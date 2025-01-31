"use client"

import { cn } from "@/lib/utils";
import { on } from "events";
import { LucideIcon, Undo2Icon , Redo2Icon , PrinterIcon ,SpellCheckIcon , BoldIcon , ItalicIcon , UnderlineIcon , MessageSquarePlusIcon , ListTodoIcon , RemoveFormattingIcon, ChevronDownIcon } from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import { type Level } from "@tiptap/extension-heading"

const FontFamilyButton = () => {
    const {editor} = useEditorStore();
    const fonts = [
        {label : "Arial" , value:"Arial"},
        {label : "Times New Roman" , value:"Times New Roman"},
        {label : "Courier New" , value:"Courier New"},
        {label : "Calibri" , value:"Calibri"},
        {label : "Cambria" , value:"Cambria"},
    ]

    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>
                <button className={cn(
                    "h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
                )}>
                    <span className="truncate">
                        {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                    </span>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {fonts.map(({ label,value }) => (
                    <button 
                    onClick={() => editor?.chain().focus().setFontFamily(value).run() }
                    key={value} className={cn(
                        "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                        editor?.getAttributes("textStyle").fontFamily === value && "bg-neutral-200/80"
                    )}
                    style={{fontFamily : value}}
                    >
                        <span className="text-sm"> {label} </span>
                    </button>
                ))}
            </DropdownMenuContent>

        </DropdownMenu>
    )
}


const HeadingLevelButton = () => {
    const {editor} = useEditorStore();



    const headings = [
        {label : "Normal text" , value: 0, fontSize: "16px"}, 
        {label : "Heading 1" , value: 1, fontSize: "24px"},
        {label : "Heading 2" , value: 2, fontSize: "32px"},
        {label : "Heading 3" , value: 3, fontSize: "21px"},
        {label : "Heading 4" , value: 4, fontSize: "18px"},
    ]

    const getCurrentHeading = () =>{
        for (let level = 1; level<=5 ; level++){
            if(editor?.isActive("heading" , {level})){
                return `Heading ${level}`
            }
        }

        return "Normal text"
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className={cn(
                    "h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm"
                )}>
                    <span className="truncate">
                        {getCurrentHeading()}
                        {editor?.getAttributes("textStyle").fontFamily || "Arial"}
                    </span>
                    <ChevronDownIcon className="ml-2 size-4 shrink-0" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
                {headings.map(({label , value , fontSize}) => (
                    <button
                    onClick={() => {
                        if(value===0){
                            editor?.chain().focus().setParagraph().run()
                        }else {
                            editor?.chain().focus().toggleHeading({level:value as Level}).run()
                        }
                    }}
                        key={value}
                        style={{ fontSize }}
                        className={cn(
                            "flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
                            (value === 0 && !editor?.isActive("heading")) || editor?.isActive("heading" , {level : value}) && "bg-neutral-200/80"
                        )}
                    >

                        {label}
                        
                    </button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}


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

            <FontFamilyButton />

            <Separator orientation="vertical" className="h-6 bg-neutral-300" />

            <HeadingLevelButton />


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