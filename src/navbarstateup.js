"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./components/ui/navbar";
import { cn } from "./utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p>
    </div>
  );
}

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {/* <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem> */}
        {/* <MenuItem setActive={setActive} active={active} item="Games">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Sat test"
              href="https://learn-link-black.vercel.app/"
              src="/Screenshot (506).png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="hangman"
              href="/hangman"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="check vocublary"
            />
            <ProductItem
              title="memory test"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
           
          </div>
        </MenuItem>
         */}
      </Menu>
    </div>
  );
}
