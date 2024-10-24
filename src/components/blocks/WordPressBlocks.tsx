import React from 'react';
import {Block} from "@/lib/types";

interface WordPressBlocksProps {
    blocks: any[];
}

const WordPressBlocks: React.FC<WordPressBlocksProps> = ({blocks}) => {
    const renderBlock = (block: Block) => {
        switch (block.blockName) {
            case 'p':
                return <p dangerouslySetInnerHTML={{__html: block.innerHTML}}/>
            case 'h1':
            case 'h2':
            case 'h3':
            case 'h4':
            case 'h5':
            case 'h6':
                const HeadingTag = block.blockName as keyof JSX.IntrinsicElements;
                return <HeadingTag dangerouslySetInnerHTML={{__html: block.innerHTML}}/>;
            case 'img':
                return (
                    <figure dangerouslySetInnerHTML={{__html: block.innerHTML}}/>
                )
            case 'figure':
                return (
                    <figure dangerouslySetInnerHTML={{__html: block.innerHTML}}/>
                )

        }
    }
    return (
        <>
            {blocks.map( (block: any) => (
                <React.Fragment key={block.id}>
                    {renderBlock( block )}
                </React.Fragment>
            ) )}
        </>
    );
};

export default WordPressBlocks;
