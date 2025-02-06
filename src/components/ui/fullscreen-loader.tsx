import { LoaderIcon } from "lucide-react";

interface FullscreenLoaderProps {
    label? : string;
    className? : string;
}

export const FullscreenLoader = ({ label , className } : FullscreenLoaderProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-centergap-2">

            <LoaderIcon className="size-6 text-muted-foreground animate-spin"/>
            {
                label && <p className="text-sm text-muted-foreground">
                    {label}
                </p>
            }

        </div>
    )
}