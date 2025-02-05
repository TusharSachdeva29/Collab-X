"use client"

import Image from "next/image";
import Link from "next/link";
import { BoldIcon, FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FilesIcon, GlobeIcon, ItalicIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, Strikethrough, TextIcon, TrashIcon, Underline, Undo2Icon } from "lucide-react";
import { DocumentInput } from "./document-input";
import { BsFilePdf } from "react-icons/bs";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { useEditorStore } from "@/store/use-editor-store";

export const Navbar = () => {
    const {editor} = useEditorStore()

    const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
        if (!editor) return; 
        editor.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
    };
    

    const onDownload = (blob : Blob , filename : string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a")
        a.href = url;
        a.download = filename
        a.click()
    }

    const onSaveJSON = () => {
        if(!editor) return ;
        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], {
            type: "application/json",
        })
        onDownload (blob , `document.json`)
    }

    const onSaveHTML = () => {
        if(!editor) return ;
        const content = editor.getHTML();
        const blob = new Blob([content], {
            type: "text/html",
        })
        onDownload (blob , `document.html`)
    }

    const onSaveText = () => {
        if(!editor) return ;
        const content = editor.getText();
        const blob = new Blob([JSON.stringify(content)], {
            type: "text/plain",
        })
        onDownload (blob , `document.txt`)
    }

    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={36} height={36} />
                </Link>
                <div className="flex flex-col">
                    <DocumentInput />
                    <div className="flex">
                        <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-neutral-200 h-auto">
                                    File
                                </MenubarTrigger>
                                <MenubarContent className="print:hidden">
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <FileIcon className="size-4 mr-2" />
                                            Save
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={onSaveJSON}>
                                                <FileJsonIcon className="size-4 mr-2" />
                                                JSON
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveHTML}>
                                                <GlobeIcon className="size-4 mr-2" />
                                                HTML
                                            </MenubarItem>
                                            <MenubarItem onClick={()=>window.print()}>
                                                <BsFilePdf className="size-4 mr-2" />
                                                PDF
                                            </MenubarItem>
                                            <MenubarItem onClick={onSaveText}>
                                                <FilesIcon className="size-4 mr-2" />
                                                TEXT
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem>
                                        <FilePlusIcon className="size-4 mr-2" />
                                        New Document
                                    </MenubarItem>
                                    {/* <MenubarSeparator /> */}
                                    <MenubarItem>
                                        <FilePenIcon className="size-4 mr-2"/>
                                        Rename
                                    </MenubarItem>
                                    {/* <MenubarSeparator /> */}
                                    <MenubarItem>
                                        <TrashIcon className="size-4 mr-2"/>
                                        Remnove
                                    </MenubarItem>
                                    {/* <MenubarSeparator /> */}
                                    <MenubarItem onClick={() => window.print()}>
                                        <PrinterIcon className="size-4 mr-2"/>
                                        Print
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-neutral-200 h-auto">
                                    Edit
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                        <Undo2Icon className="size-4 mr-2"/>
                                        Undo
                                    </MenubarItem>
                                </MenubarContent>
                                <MenubarContent>
                                    <MenubarItem onClick={() => editor?.chain().focus().undo().run()}>
                                        <Redo2Icon className="size-4 mr-2"/>
                                        Redo
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-neutral-200 h-auto">
                                    Insert
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            Table
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => insertTable({rows : 1 , cols : 1})}>
                                                1 X 1
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({rows : 3 , cols : 3})}>
                                                2 X 2
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({rows : 3 , cols : 3})}>
                                                3 X 3
                                            </MenubarItem>
                                            <MenubarItem onClick={() => insertTable({rows : 4 , cols : 4})}>
                                                4 X 4 
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                </MenubarContent>
                            </MenubarMenu>
                            <MenubarMenu>
                                <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-neutral-200 h-auto">
                                    Format
                                </MenubarTrigger>
                                <MenubarContent>
                                    <MenubarSub>
                                        <MenubarSubTrigger>
                                            <TextIcon className="size-4 mr-2 "/>
                                            Text
                                        </MenubarSubTrigger>
                                        <MenubarSubContent>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleBold().run()}>
                                                <BoldIcon className="size-4 mr-2" />
                                                Bold
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleItalic().run()}>
                                                <ItalicIcon className="size-4 mr-2" />
                                                Italic
                                            </MenubarItem >
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleUnderline().run()}>
                                                <Underline className="size-4 mr-2" />
                                                Underline
                                            </MenubarItem>
                                            <MenubarItem onClick={() => editor?.chain().focus().toggleStrike().run()}>
                                                <Strikethrough className="size-4 mr-2" />
                                                Strikethrough
                                            </MenubarItem>
                                        </MenubarSubContent>
                                    </MenubarSub>
                                    <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}>
                                        <RemoveFormattingIcon className="size-4 mr-2" />
                                        clear Formatting
                                    </MenubarItem>
                                </MenubarContent>
                            </MenubarMenu>
                        </Menubar>
                    </div>
                </div>
            </div>
        </nav>
    );
};
