"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] flex flex-col items-center justify-center pt-24 md:pt-0">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#DC143C]/20 blur-[120px] rounded-full mix-blend-screen opacity-40"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[40%] bg-[#DC143C]/10 blur-[100px] rounded-full mix-blend-screen opacity-30"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none"></div>

            {/* Main Container - Grid Layout */}
            <div className="container mx-auto px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 h-full relative z-10 gap-8 md:gap-14 items-center">

                {/* 1. Text Content (Mobile: Top, Desktop: Left Col Row 1) */}
                <div className="w-full flex flex-col gap-6 md:gap-8 justify-center items-center md:items-start text-center md:text-left z-20 md:row-start-1 md:col-start-1">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.15 },
                            },
                        }}
                    >
                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="flex items-center gap-4 mb-4 justify-center md:justify-start"
                        >
                            <div className="w-8 h-[2px] bg-[#DC143C]"></div>
                            <h2 className="text-[#DC143C] font-bold tracking-[0.2em] text-xs md:text-sm uppercase font-syncopate">
                                VFX & 3D Orchestration
                            </h2>
                        </motion.div>

                        <motion.h1
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-syncopate text-[#E0E0E0] leading-[1] tracking-tighter"
                        >
                            CRAFTING<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E0E0E0] to-[#888888]">
                                REALITY
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="text-[#888888] text-sm md:text-lg max-w-lg mt-6 font-inter leading-relaxed mx-auto md:mx-0"
                        >
                            High-fidelity VFX and immersive 3D orchestration for the next generation of cinematic excellence. Powered by Unreal Engine 5.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                            className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center"
                        >
                            <button className="group relative w-auto max-w-xs px-8 py-3 bg-[#DC143C] text-white font-bold tracking-widest uppercase overflow-hidden transition-all hover:bg-red-700 hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] rounded-full text-sm">
                                <span className="relative z-10 flex items-center gap-2">
                                    View The Reel <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </button>

                            <button className="w-auto max-w-xs px-8 py-3 border border-[#E0E0E0]/20 text-[#E0E0E0] font-bold tracking-widest uppercase hover:bg-white/5 transition-colors rounded-md text-sm">
                                Our Stage
                            </button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* 2. Camera Image (Mobile: Middle, Desktop: Right Col Span 2) */}
                <div className="w-full flex items-center justify-center relative md:row-span-2 md:col-start-2">
                    {/* Red Glow behind camera */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-[#DC143C] blur-[80px] rounded-full opacity-30 z-0 animate-pulse"></div>

                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 1, 0, -1, 0],
                        }}
                        transition={{
                            duration: 6,
                            ease: "easeInOut",
                            repeat: Infinity,
                        }}
                        className="relative z-10 w-full max-w-[280px] sm:max-w-[400px] xl:max-w-[600px]"
                    >
                        <Image
                            src="/red-magic.png"
                            alt="Cinema Camera"
                            width={800}
                            height={800}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </motion.div>
                </div>

                {/* 3. Features Cards (Mobile: Bottom w/ Horizontal Scroll, Desktop: Left Col Row 2) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="w-full md:row-start-2 md:col-start-1 flex overflow-x-auto md:grid md:grid-cols-3 gap-4 pb-4 md:pb-0 md:mt-0 md:self-start snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
                >
                    {[
                        { title: "Textures", val: "8K Ultra-Res", sub: "+100% Quality" },
                        { title: "Integration", val: "UE5 Native", sub: "Real-time" },
                        { title: "Delivery", val: "250+ Shots", sub: "Global Pipeline" },
                    ].map((item, idx) => (
                        <div key={idx} className="bg-[#0A0A0A] border border-[#E0E0E0]/10 p-5 rounded-xl hover:border-[#DC143C]/50 transition-colors group min-w-[85vw] sm:min-w-[300px] md:min-w-0 snap-center">
                            <h3 className="text-[#DC143C] text-[10px] md:text-xs font-bold tracking-widest uppercase mb-3">{item.title}</h3>
                            <p className="text-white text-lg md:text-xl font-bold italic font-inter mb-1 group-hover:text-[#DC143C] transition-colors">{item.val}</p>
                            <p className="text-[#00FF88] text-xs font-medium">{item.sub}</p>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:bottom-10"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#888888] font-syncopate">Explore</span>
                <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#DC143C] to-transparent"></div>
            </motion.div>
        </section>
    );
}
