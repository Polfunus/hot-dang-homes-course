import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { CallToActionButton } from 'components/CallToActionButton';
import { Columns } from 'components/Columns';
import { Column } from 'components/Column';

import Image from "next/image";

export const BlockRenderer = ({ blocks }) => {
    return blocks.map(block => {
        switch (block.name) {
            case 'core/heading': {
                return (
                    < Heading
                        key={block.id}
                        content={block.attributes.content}
                        level={block.attributes.level}
                        textAlign={block.attributes.textAlign}
                    />
                );
            }
            case 'core/cover': {

                return (
                    <Cover
                        key={block.id}
                        background={block.attributes.url}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Cover>
                );
            }
            case 'core/paragraph': {
                return (
                    <Paragraph
                        key={block.id}
                        content={block.attributes.content}
                        textAlign={block.attributes.align}
                        color={block.attributes.textColor ? block.attributes.textColor : block.attributes.style?.color?.text}
                    />
                );
            }
            case 'acf/ctabutton': {
                return (
                    <CallToActionButton
                        key={block.id}
                        buttonLabel={block.attributes.data.label}
                        align={block.attributes.data.align}
                        destination={block.attributes.data.destination || '/'}
                    />
                );
            }
            case 'core/columns': {
                return (
                    <Columns
                        key={block.id}
                        stackOnMobile={block.attributes.isStackedOnMobile}
                    >
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Columns>
                );
            }
            case 'core/column': {
                return (
                    <Column key={block.id} width={block.attributes.width}>
                        <BlockRenderer blocks={block.innerBlocks} />
                    </Column>
                );
            }
            case 'core/image': {
                return (
                    <Image
                        key={block.id}
                        src={block.attributes.url}
                        alt={block.attributes.alt || 'Image'}
                        width={block.attributes.width}
                        height={block.attributes.height}
                    />
                );
            }
            case 'core/group':
            case 'core/block': {
                return (
                    <BlockRenderer
                        key={block.id}
                        blocks={block.innerBlocks}
                    />
                );
            }
            default: {
                console.log("UNKOWN BLOCK TYPE: ", block)
                return null;
            }
        }

    });
}