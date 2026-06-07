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
      <div className="h-6 w-6 bg-gradient-to-br from-emerald-700 to-yellow-500 rounded-md flex items-center justify-center text-white font-bold text-xs">L</div>
      <span className="font-semibold text-black tracking-tight">{siteConfig.name}</span>
    </Link>
  );
};
