import client from 'client';
import { gql } from '@apollo/client';

import { getPageStaticProps } from 'utils/getPageStaticProps';

import { Page } from 'components/Page';



export default Page;

export const getStaticProps = getPageStaticProps;

export const getStaticPaths = async () => {
    const { data } = await client.query({
        query: gql`
            query getAllPages {
                pages {
                    nodes {
                        uri
                    }
                }
                properties {
                    nodes{
                        uri
                    }
                }
            }
        `,
    });

    const paths = [...data.pages.nodes, ...data.properties.nodes].map((page) => (
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