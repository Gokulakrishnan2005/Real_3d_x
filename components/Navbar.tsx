"use client";

import { motion } from "framer-motion";
import { Menu, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // smooth graceful entrance
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                {/* Simple Logo Placeholder if needed, or stick to text */}
                <div className="w-8 h-8 flex items-center justify-center bg-[#DC143C] rounded-sm transform rotate-45">
                    <span className="transform -rotate-45 text-white font-bold text-xs">R</span>
                </div>
                <span className="text-xl md:text-2xl font-bold tracking-widest text-[#E0E0E0] font-syncopate ml-2">
                    REALX
                </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
                {["Work", "Studio", "Services", "Careers"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-xs font-bold tracking-widest text-[#E0E0E0] hover:text-[#DC143C] transition-colors uppercase font-syncopate"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-6">
                <button className="hidden md:block px-6 py-2 text-xs font-bold tracking-widest uppercase bg-[#DC143C] text-white hover:bg-red-700 transition-colors rounded-full shadow-[0_0_10px_rgba(220,20,60,0.4)]">
                    Get in Touch
                </button>
                <button className="md:hidden text-[#E0E0E0] hover:text-[#DC143C] transition-colors">
                    <Menu className="w-6 h-6" />
                </button>
            </div>
        </motion.header>
    );
}
