"use client"

import { cn } from "@/lib/utils";
import { on } from "events";
import { LucideIcon, Undo2Icon , Redo2Icon , PrinterIcon ,SpellCheckIcon , BoldIcon , ItalicIcon , UnderlineIcon , MessageSquarePlusIcon , ListTodoIcon , RemoveFormattingIcon } from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";

import {Separator} from "@/components/ui/Separator";


interface ToolbarButtonprops {
    onClick?: () => void
    isActive?: boolean;
    icon: LucideIcon
}


const ToolbarButton = ({
    onClick,
    isActive,
    icon : Icon,
}: ToolbarButtonprops) => {
    return (
        // whenever using synamic classes always prefer to use cn it takes care of most of the thigs we generally miss so yeahh

        <button onClick={onClick} className={cn("text-sm h-7 min-w-7 items-center justify-center rounded-sm hover:bg-neutral-200/80" , 
            isActive && "bg-neutral-200/80"
        )}>
            <Icon className="size-4"/>
        </button>
    )
}


export const Toolbar = () => {
    const { editor } = useEditorStore()

    console.log("toolbar editor:" , {editor})

    const sections: {label : string; icon: LucideIcon;
        onClick: () => void;
        isActive?: boolean;
    }[][] = [
        [
            {
                label: "Undo",
                icon:Undo2Icon,
                onClick : () => editor?.chain().focus().undo().run(),
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick : () => editor?.chain().focus().redo().run(),
            },
            {
                label: "print",
                icon: PrinterIcon,
                onClick : () => window.print()
            },{
                label : "spell Check",
                icon: SpellCheckIcon,
                onClick : () => {
                    const current = editor?.view.dom.getAttribute("spellcheck");
                    editor?.view.dom.setAttribute("spellcheck" , current === "false" ? "true" : "false")
                }
            }
        ],
        [
            {

                label: "Bold",
                icon: BoldIcon,
                isActive : editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().toggleBold().run(),
            },
            {
                label: "italic",
                icon: ItalicIcon,
                isActive : editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().toggleItalic().run(),
            },
            {
                label: "underline",
                icon: UnderlineIcon,
                isActive : editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run(),
            },
        ],
        [
            {

                label : "Comment",
                icon : MessageSquarePlusIcon,
                onClick: () => console.log("todo comment"),
                isActive : false,
            },
            {


                label : "List Todo",
                icon : ListTodoIcon,
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
                isActive : editor?.isActive("taskList"),
            },
            {
                label : "Remvoe formatting",
                icon : RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run(),
            },
            
        ]
    ];

    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            { sections[0].map((item) => (
                <ToolbarButton key={item.label} {...item} />
            ))}


            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

    
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

                
            {sections[1].map((item) => {
                return <ToolbarButton key={item.label} {...item} />
            })}

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

            {sections[2].map((item) => {
                return <ToolbarButton key={item.label} {...item} />
            })}
        </div>
    )
}