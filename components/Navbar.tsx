import { Button } from "./ui/button"
import Image from "next/image"
import balloon from "../public/baloon.png"
import { asimovian } from "@/style/font"


export const Navbar = () => {
    return <div className="mx-35 px-3 rounded-lg mt-2 shadow-lg items-center shadow-accent flex justify-between h-15">
        <div className="flex gap-2 items-center text-2xl">
            <Image
                src={balloon}
                className="h-10 w-10"
                alt="ballon"
            />
            <span className={`${asimovian.className}`}>Lumix</span>
        </div>

        <Button
            variant="default"
            className="text-xs"
        >
            Sign up Now
        </Button>
    </div>
}