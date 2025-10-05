import { FC } from "react"; //function component type
import { PodBreadCrumb } from "@/components/PodBreadCrumb";
import { Button } from "@/components/ui/button";
import { Settings, Share2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface podPageProps {
    params: {
        podname: string;
    }
}

const pod: FC<podPageProps> = ({ params }) => {
    const { podname } = params;
    return <div className="h-screen bg-background text-foreground">
        <header className="border-b border-border bg-card/50 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 py-2">
                <PodBreadCrumb podName={podname} />
                <div className="flex items-center space-x-3">
                    <ThemeToggle />
                    <Button variant="outline" size="sm" className="hover:bg-green-500/50 dark:hover:bg-green-500/50 cursor-pointer">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-green-500/50 dark:hover:bg-green-500/50 cursor-pointer">
                        <Settings className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>
    </div>
}

export default pod;