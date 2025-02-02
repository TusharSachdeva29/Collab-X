import { Extension } from "@tiptap/react";
import TextStyle from "@tiptap/extension-text-style";


declare module "@tiptap/react" {
    interface Commands <ReturnType> {
        fontSize: {
            setFontSize : (size : string) => ReturnType
            unsetFontSize: () => ReturnType
        }
    }
}

export const FontSizeExtension = Extension.create({
    name : "fontSize",
    addOptions() {
        return {
            types : ["textStyle"],
        }
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default : null,
                        parseHTML : element => element.style.fontSize,
                        renderHTML : attributes => {
                            if(!attributes.fontSize){
                                return {};
                            }
                            return {
                                style : `font-size: ${attributes.fontSize}`,
                            }
                        }
                    }
                }
            }
        ]
    },
    addCommands() {
        return {
            setFontSize: (fontSize: string) => ({ chain }) => {
                return chain()
                    .setMark("textStyle", { fontSize }) // Set font size using the textStyle mark
                    .run();
            },
    
            unsetFontSize: () => ({ chain }) => {
                return chain()
                    .unsetMark("textStyle") // Unset textStyle mark completely
                    .run();
            },
        };
    },
    

})