"use client"

import { Maximize2, Minimize2, PresentationIcon, TvMinimalPlayIcon } from "lucide-react"
import { Switch } from "./ui/switch"
import { Button } from "./ui/button"
import { useState } from "react"
import { PodCreateCanvas } from "./PodCreateCanvas"

export const PodCanvas = ()=>{
    const [isCanvasFullscreen, setIsCanvasFullscreen] = useState(false);
    return <div>
        <div className="absolute inset-4 bg-card/10 border border-border rounded-lg shadow-sm overflow-hidden">
           <div className="flex items-center justify-between p-3 border-b border-border bg-muted/50">
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1.5"><PresentationIcon className="h-4 w-4"/>Present</span>
                    <Switch/>
                    <span className="flex items-center gap-1.5"><TvMinimalPlayIcon className="h-4 w-4"/>Observe</span>
                </div>
                <Button variant="ghost" size="sm" className="border border-border hover:bg-green-400/50 dark:hover:bg-green-400/50 cursor-pointer" onClick={() => setIsCanvasFullscreen(!isCanvasFullscreen)}>
                  {isCanvasFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
                </Button>
            </div> 
            <PodCreateCanvas/>
        </div>
    </div>
}