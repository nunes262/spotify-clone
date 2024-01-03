import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import { SideBar } from "@/components";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CentralDisplay } from "@/components/CentralDisplay/CentralDisplay";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <div className="flex-1 flex">
                <SideBar />
                <CentralDisplay />
            </div>
            <footer className="bg-zinc-800 border-zinc-700 p-6">footer</footer>
        </div>
    );
}
