"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
export default function Home(){
    return <div>
        <CardHoverEffectDemo/>
    </div>
}

function CardHoverEffectDemo() {
  return (
    <div className="w-full mx-auto px-8">
      <HoverEffect items={cards}/>
    </div>
  );
}
export const cards = [
  {
    number: 1,
    description: "A Pod, All your ideas and discussions",
    buttonlabel: "Create a Pod",
    path: "/videos/create_pod.mp4"
  },
  {
    number: 2,
    description: "All your deadline Unified into a single place",
    buttonlabel: "Go to Calendar",
    path: "/videos/Calendar.mp4"
  },
  {
    number: 3,
    description: "Access all the shared materials",
    buttonlabel: "Shared materials",
    path: ""
  },
  {
    number: 4,
    description: "Invite friends to Lumix and start brainstorming",
    buttonlabel: "Invite friends",
    path: ""
  },
];
