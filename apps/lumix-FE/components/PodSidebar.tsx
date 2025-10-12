interface PodSideBarProps {
    isOpen: boolean;
    onToggle: () => void;
}

export const PodSideBar = ({ isOpen, onToggle }: PodSideBarProps) => {
    return (
        <div className="h-full w-80 bg-card/50">
            <div className="p-4">
                {isOpen && (
                    <>
                        <h3 className="text-lg font-semibold mb-4">Pod Sidebar</h3>
                        <p className="text-sm text-muted-foreground">Sidebar content goes here</p>
                    </>
                )}
            </div>
        </div>
    );
};