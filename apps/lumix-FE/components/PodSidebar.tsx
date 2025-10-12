import { MessageSquare, Calendar, FolderOpen, X } from "lucide-react";
interface PodSideBarProps {
    isOpen: boolean;
    onToggle: () => void;
}

export const PodSideBar = ({ isOpen, onToggle }: PodSideBarProps) => {
    return (
        <div className="h-full w-80 bg-card/50">
            <div className="p-2">
                {isOpen ? (
                    <div className="flex items-center gap-2 justify-between">
                        <div className="flex flex-1 gap-1 items-center justify-center p-2 rounded-md hover:bg-green-400/50 cursor-pointer">
                            <MessageSquare className="h-5 w-5" />
                            <span>Chat</span>
                        </div>
                        <div className="flex flex-1 gap-1 items-center justify-center p-2 rounded-md hover:bg-green-400/50 cursor-pointer">
                            <Calendar className="h-5 w-5" />
                            <span>Schedule</span>
                        </div>
                        <div className="flex flex-1 gap-1 items-center justify-center p-2 rounded-md hover:bg-green-400/50 cursor-pointer">
                            <FolderOpen className="h-5 w-5" />
                            <span>Files</span>
                        </div>
                        <div className="flex flex-1 gap-1 items-center justify-center p-2 rounded-md hover:bg-green-400/50 cursor-pointer">
                            <X onClick={onToggle}/>
                        </div>
                    </div>
                ) :
                    (
                        <div className="mr-2 flex flex-col space-y-5">
                            <div className="hover:bg-green-400/50 p-3 rounded-lg cursor-pointer" onClick={onToggle}>
                                <MessageSquare className="h-4 w-4" />
                            </div>
                            <div className="hover:bg-green-400/50 p-3 rounded-lg cursor-pointer" onClick={onToggle}>
                                <Calendar className="h-4 w-4" />
                            </div>
                            <div className="hover:bg-green-400/50 p-3 rounded-lg cursor-pointer" onClick={onToggle}>
                                <FolderOpen className="h-4 w-4" />
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
};