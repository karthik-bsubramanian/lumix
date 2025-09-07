"use client";

import { Button } from "@/components/ui/button";
import { client } from "@/lib/appwrite"
import { Navbar } from "@/components/Navbar";

export default function Home() {
  async function ping(){
    const response = await client.ping();
    console.log(response);
  }
  return (
  <div>
    <Navbar/>
      <Button onClick={ping}>
          Send signal
      </Button>
  </div>
  );
}

