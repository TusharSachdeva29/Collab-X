interface DocumentsLayoutProps{
    children: React.ReactNode;
}

const AuthLayout = ({children} : DocumentsLayoutProps) => {
    return (

        <div className="flex flex-col gap-y-4">            
            <p>auth navbar</p>
            {children}
        </div>
        
    )
}

export default AuthLayout