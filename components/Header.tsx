"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
           {/* Replace this with the actual logo image file when provided */}
           <span className="font-bold text-2xl tracking-tighter">Improx<span className="text-blue-600">BPM</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-black text-zinc-600 transition-colors focus:outline-none">
              Services <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 p-2 rounded-xl shadow-lg border-zinc-200">
              <DropdownMenuItem className="cursor-pointer hover:bg-zinc-50 rounded-lg p-2" asChild>
                <Link href="/services/back-office-support">Back Office Support</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-zinc-50 rounded-lg p-2" asChild>
                <Link href="/services/process-excellence">Process Excellence</Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer hover:bg-zinc-50 rounded-lg p-2" asChild>
                <Link href="/services/customer-experience">Customer Experience</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/industries" className="hover:text-black text-zinc-600 transition-colors">
            Industries
          </Link>
          <Link href="/about" className="hover:text-black text-zinc-600 transition-colors">
            About Us
          </Link>
          <Link href="/resources" className="hover:text-black text-zinc-600 transition-colors">
            Resources
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-black text-zinc-600 transition-colors">
            Client Login
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-black hover:bg-zinc-800 text-white rounded-full px-6 h-10 text-sm font-medium transition-all"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="md:hidden p-2 hover:bg-zinc-100 rounded-md transition-colors">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-zinc-200">
             <div className="flex flex-col gap-6 pt-10">
                <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-bold">Services</Link>
                <Link href="/industries" onClick={() => setIsOpen(false)} className="text-lg font-bold">Industries</Link>
                <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-bold">About Us</Link>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-bold">Contact</Link>
                <hr className="border-zinc-200" />
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center w-full bg-black text-white rounded-full h-10 text-sm font-medium transition-all"
                >
                  Schedule Consultation
                </Link>
             </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
