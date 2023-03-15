import { Cover } from 'components/Cover';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';

export const BlockRenderer = ({ blocks }) => {
    return blocks.map(block => {
        switch (block.name) {
            case 'core/heading': {
                return (
                    <Heading
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
            default: {
                return null;
            }
        }

    });
}