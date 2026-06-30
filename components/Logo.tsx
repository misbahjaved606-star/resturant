"use client";
import Link from "next/link";
import React from "react";
import { siteConfig } from "@/lib/site-config";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <div className="h-7 w-7 bg-gradient-to-br from-[#0a0f1e] to-[#1a2540] rounded-md flex items-center justify-center text-white font-bold text-xs border border-amber-400/30"><span className="bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-transparent">M</span></div>
      <span className="font-semibold text-black tracking-tight">{siteConfig.name}</span>
    </Link>
  );
};
