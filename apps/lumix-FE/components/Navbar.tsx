import { Button } from "@repo/ui/ui/button"
import Image from "next/image"
import Logo from "@repo/lumix/Logo_lumix.png"
import { asimovian } from "@/style/font"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@repo/ui/ui/navigation-menu"


export const Navbar = () => {
    return <div className="mx-35 flex justify-between items-center gap-2">
        <div className="rounded-lg flex w-full justify-between mt-2 items-center p-1 shadow-[6px_0_6px_5px_rgba(0,0,0,0.9)] shadow-accent ">
            <div className="flex gap-2 items-center text-2xl">
                <Image
                    src={Logo}
                    className="h-10 w-10"
                    alt="ballon"
                />
                <span className={`${asimovian.className}`}>Lumix</span>
            </div>

            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Create a room</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink><div className="w-20">Voice Call</div></NavigationMenuLink>
                            <NavigationMenuLink>Video room</NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <Button
                variant="outline"
                className="text-xs cursor-pointer"
            >
                Sign up Now
            </Button>
        </div>
        <Button className="cursor-pointer mt-2 py-5">Dashboard</Button>
    </div>
}