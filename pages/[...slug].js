import client from 'client';
import { gql } from '@apollo/client';

import { cleanAndTransformBlocks } from 'utils/cleanAndTransformBlocks';
import { BlockRenderer } from 'components/BlockRenderer';

export default function Page(props) {

    return (
        <div>
            <BlockRenderer blocks={props.blocks}></BlockRenderer>
        </div>
    );
}

export const getStaticProps = async (context) => {


    const uri = `/${context.params.slug.join('/')}`;

    const { data } = await client.query({
        query: gql`
      query PageQuery($uri: String!) {
          nodeByUri(uri: $uri) {
              ... on Page {
                  id
                  title
                  blocksJSON
            }
          } 
      }
    `,
        variables: {
            uri,
        }
    })

    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
    const title = data.nodeByUri.title;

    return {
        props: {
            blocks,
            title,
        },
    };
};

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
            query GET_PAGES {
                pages {
                    nodes {
                        uri
                    }
                }
            }
        `,
    });

    const paths = data.pages.nodes.map((page) => (
        {
            params: {
                slug: page.uri.substring(1, page.uri.length - 1).split('/'),
            }
        }
    )
    );

    return {
        paths,
        fallback: false,
    };
}