"use client";

import { useState } from "react"; //function component type
import { useParams } from 'next/navigation';
import { PodBreadCrumb } from "@/components/PodBreadCrumb";
import { Button } from "@/components/ui/button";
import { Settings, Share2 } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { PodDescription } from "@/components/PodDescription";
import { PodCanvas } from "@/components/PodCanvas";
import { PodSideBar } from "@/components/PodSidebar";

const PodPage = () => {
    const params = useParams();
    const podname = params.podname as string;
    const [isSidebarOpen, setIsSideBarOpen] = useState(false);
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

        <div className="h-73px">
            <PodDescription podTitle={"Product innovation pod"} podDescription={"This is a idea discussion for the upcoming lumix project for our hackathon"} activeMembers={4} />
        </div>

        <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 transition-all duration-300 ease-in-out">
                <PodCanvas />
            </div>
            <div className={`${isSidebarOpen ? "w-80" : "w-12"} border-l border-border transition-all duration-300`}>
                <PodSideBar isOpen={isSidebarOpen} onToggle={() => setIsSideBarOpen(!isSidebarOpen)} />
            </div>
        </div>

    </div>
}

export default PodPage;