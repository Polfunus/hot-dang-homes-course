import { v4 as uuid } from "uuid";

export const cleanAndTransformBlocks = (blocksJSON) => {
    const blocks = JSON.parse(blocksJSON);

    //Assing unique id to each block and inner blocks
    const assingIdToBlocks = (b) => {
        b.forEach((block) => {
            block.id = uuid();

            //if block has inner blocks, assing id to them
            if (block.innerBlocks?.lenght) {
                assingIdToBlocks(block.innerBlocks);
            }
        });
    }

    assingIdToBlocks(blocks);

    return blocks;
}