import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";

import React, { useState } from "react";
import { Button } from "./button";
import VideoPlayer from "../VideoPlayer";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    number: number;
    description: string;
    buttonlabel: string;
    path: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          key={item?.number}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 shadow-md dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card className="shadow-[1px_1px_3px_1px_rgba(0,0,0,0.1)] dark:border dark:border-white/20 rounded-2xl">
            <VideoPlayer path={item.path}/>
            <CardDescription className="font-sans">{item.description}</CardDescription>
            <Button
              variant="outline"
              className="cursor-pointer font-mono bg-black text-white  hover:bg-black/70 hover:text-white dark:bg-white dark:text-black dark:hover:text-black dark:hover:bg-gray-50 px-10"
            >
              {item.buttonlabel}
            </Button>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-md h-full w-full overflow-hidden bg-white dark:bg-black border border-transparent dark:border-white/[0.1] relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-2 mb-3 text-black dark:text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
