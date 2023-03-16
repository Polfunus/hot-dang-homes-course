import { gql } from '@apollo/client';
import client from 'client';

import { cleanAndTransformBlocks } from './cleanAndTransformBlocks';
import { mapMainMenuItems } from './mapMainMenuItems';

export const getPageStaticProps = async (context) => {

    const uri = context.params?.slug ? `/${context.params.slug.join('/')}` : '/';


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
          
          acfOptionsMainMenu {
            mainMenu {
                menuItems {
                    menuItem {
                        label
                        destination {
                          ... on Page {
                            uri
                          }
                        }
                    }
                    items {
                        label
                          destination {
                            ... on Page {
                              uri
                            }
                          }
                        }
                    }
                    callToActionButton {
                      label
                      destination {
                        ... on Page {
                          uri
                        }
                      }
                    }
            }
          }
        }
    `,
        variables: {
            uri,
        }
    })

    const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
    const mainMenuItems = mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems);
    const callToAction = data.acfOptionsMainMenu.mainMenu.callToActionButton;
    const title = data.nodeByUri.title;


    return {
        props: {
            blocks,
            mainMenuItems,
            callToAction,
            title
        },
    };
};