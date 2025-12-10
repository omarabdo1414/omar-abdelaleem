"use client";

import Link from "next/link"
import { Code2Icon, List as ListIcon, X as CloseIcon } from "lucide-react";
import { Button } from "../ui/button"

// Logics
import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
        <nav className="shadow-lg flex justify-center items-center" id="navbar">
            <div className="container flex md:justify-around justify-between py-5 max-md:px-5 dark:border-b dark:border-[#818183]">
                <Link href="/" className="flex items-center justify-center">
                    <div className="logo flex items-center justify-center gap-4 dark:text-white">
                        <Code2Icon className="lg:w-10 lg:h-10" color="#135bec" />
                        <h3 className="dark:text-white lg:text-2xl text-lg font-semibold [word-spacing:-4px]">Omar Abdo</h3>
                    </div>
                </Link>
                <div className="md:nav-list md:flex md:items-center md:gap-15 hidden">
                    <ul className="flex lg:gap-15 gap-8 items-center">
                        <Link href="/">
                            <li className="dark:text-white text-lg">Home</li>
                        </Link>
                        <Link href="/projects">
                            <li className="dark:text-white text-lg">Projects</li>
                        </Link>
                        <Link href="/about">
                            <li className="dark:text-white text-lg">About</li>
                        </Link>
                        <Link href="/contact">
                            <li className="dark:text-white text-lg">Contact</li>
                        </Link>
                    </ul>
                    <div className="flex min-w-[84px] cursor-pointer items-center justify-center">
                        <Button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-base font-bold leading-normal tracking-[0.015em] text-white hover:bg-primary/90">
                            <Link href="/contact">
                                <span className="truncate">Hire Me</span>
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="block md:hidden" onClick={() => {
                    setOpen(true);
                }}>
                    <ListIcon />
                </div>
            </div>
        </nav>
        {/* Mobile Dropdown Menu */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-white dark:bg-[#101622] shadow-xl p-6 flex flex-col gap-8 animate-slide-left">
            
            {/* Close button */}
            <div className="flex justify-end">
              <CloseIcon
                className="cursor-pointer dark:text-white"
                onClick={() => setOpen(false)}
              />
            </div>

            {/* Mobile Links */}
            <ul className="flex flex-col gap-6 text-lg items-center z-50">
              <Link href="/" onClick={() => setOpen(false)}>
                <li className="dark:text-white">Home</li>
              </Link>
              <Link href="/projects" onClick={() => setOpen(false)}>
                <li className="dark:text-white">Projects</li>
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                <li className="dark:text-white">About</li>
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                <li className="dark:text-white">Contact</li>
              </Link>
            </ul>

            {/* Button */}
            <Button
              className="overflow-hidden rounded-lg h-12 px-5 bg-primary text-base font-bold text-white hover:bg-primary/90"
              onClick={() => setOpen(false)}
            >
              <Link href="/contact">
                <span className="truncate">Hire Me</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
        </>
    )
}

export default Navbar