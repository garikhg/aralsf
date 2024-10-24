import {Block} from "@/lib/types";

export function parseBlocks(element: any): any[] {
    const blocks: any[] = [];
    element.childNodes.forEach( (child: any) => {
        if (child.nodeType === 1) { // Element node
            const childElement = child as Element;
            const block: Block = {
                blockName: child.tagName.toLowerCase(),
                attrs: {},
                innerBlocks: parseBlocks( child ),
                innerHTML: child.innerHTML,
            };


            // Parse attributes
            // Array.from( child.attributes ).forEach( (attr) => {
            //     block.attrs[attr.name] = attr.value;
            // } );


            blocks.push( block );
        }
    } );

    return blocks;
}

export function mergeACFData(blocks: Block[], acf: Record<string, any>): Block[] {
    return blocks.map( (block) => {
        if (block.blockName.startsWith( 'acf/' )) {
            const acfBlockName = block.blockName.split( '/' )[1];
            return {
                ...block,
                attrs: {
                    ...block.attrs,
                    data: acf[acfBlockName] || {},
                }
            }
        }
        return {
            ...block,
            innerBlocks: mergeACFData( block.innerBlocks, acf ),
        }
    } );
}
