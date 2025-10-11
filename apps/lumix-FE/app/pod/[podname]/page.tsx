"use client";

import { FC, useState } from "react"; //function component type
import { PodBreadCrumb } from "@/components/PodBreadCrumb";
import { Button } from "@/components/ui/button";
import { Settings, Share2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PodDescription } from "@/components/PodDescription";
import { PodCanvas } from "@/components/PodCanvas";
import { PodSideBar } from "@/components/PodSidebar";

interface podPageProps {
    params: {
        podname: string;
    }
}

const pod: FC<podPageProps> = ({ params }) => {
    const [isSidebarOpen, setIsSideBarOpen] = useState(true);
    const { podname } = params;
    return <div className="min-h-screen max-h-screen flex flex-col max-w-screen bg-background text-foreground">
        <header className="border-b border-border bg-card/10 backdrop-blur-sm">
            <div className="flex items-center justify-between px-6 py-2">
                <PodBreadCrumb podName={podname} />
                <div className="flex items-center space-x-3">
                    <ThemeToggle />
                    <Button variant="outline" size="sm" className="hover:bg-green-400/50 dark:hover:bg-green-400/50 hover:text-white cursor-pointer">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                    </Button>
                    <Button variant="outline" size="sm" className="hover:bg-green-400/50 dark:hover:bg-green-400/50 hover:text-white cursor-pointer">
                        <Settings className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </header>

        <div>
            <PodDescription podTitle={"Product innovation pod"} podDescription={"This is a idea discussion for the upcoming lumix project for our hackathon"} activeMembers={4} />
        </div>

        <div className="flex-1 h-full w-full relative bg-card/50">
            <div className="flex">
                <div className="h-full w-full bg-green-700">
                    <PodCanvas />
                </div>
                <div className={`${isSidebarOpen ? "w-80" : "w-12"} border-1 border-border transition-all h-full duration-300 bg-amber-400`}>
                    <PodSideBar />
                </div>
            </div>
        </div>

    </div>
}

export default pod;