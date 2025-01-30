import React from 'react';
import { Editor } from './editor';


interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>
}



const DocumentIdPage = async ({params}: DocumentIdPageProps) => {
    // const documentId = params.documentId

    const { documentId } = await params

    return (
        <div className='min-h-screen bg-[#FAFBFD]'>
            Document Id : {documentId}
            <Editor />
        </div>
    )
}

export default DocumentIdPage;