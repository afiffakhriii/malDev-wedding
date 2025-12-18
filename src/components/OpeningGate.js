"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function OpeningGate({ onOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showGate, setShowGate] = useState(true);

    const handleOpen = () => {
        setIsOpen(true);
        if (onOpen) onOpen();

        // Remove component from DOM after animation completes
        setTimeout(() => {
            setShowGate(false);
        }, 2500);
    };

    if (!showGate) return null;

    return (
        <div className="fixed inset-0 z-[100] flex overflow-hidden pointer-events-auto">
            {/* Kiri Gate */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isOpen ? "-100%" : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-1/2 h-full bg-[#fce7f3] relative border-r-2 border-[#ec4899]/50 flex items-center justify-end"
            >
                <div className="absolute right-0 top-0 bottom-0 w-full h-full opacity-20" style={{ backgroundImage: "url('/images/floral_bg_main.png')", backgroundSize: 'cover' }}></div>
            </motion.div>

            {/* Kanan Gate */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: isOpen ? "100%" : 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-1/2 h-full bg-[#fce7f3] relative border-l-2 border-[#ec4899]/50 flex items-center justify-start"
            >
                <div className="absolute left-0 top-0 bottom-0 w-full h-full opacity-20" style={{ backgroundImage: "url('/images/floral_bg_main.png')", backgroundSize: 'cover' }}></div>
            </motion.div>

            {/* Konten Tengah - Undangan & Tombol */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-50 text-center p-4"
                    >
                        <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border-2 border-[#ec4899]/30 shadow-2xl max-w-md w-full">
                            <h2 className="text-xl md:text-2xl text-gray-600 mb-2 font-serif italic">The Wedding of</h2>
                            <h1 className="text-4xl md:text-6xl font-bold text-[#ec4899] mb-4 font-serif">Gani & Ceni</h1>

                            <p className="text-gray-500 mb-8 text-sm md:text-base">
                                Kepada Yth.<br />
                                Bapak/Ibu/Saudara/i
                            </p>

                            <button
                                onClick={handleOpen}
                                className="px-8 py-3 bg-[#ec4899] text-white rounded-full font-bold hover:bg-[#d83c87] transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
                            >
                                <span>💌</span> Buka Undangan
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
