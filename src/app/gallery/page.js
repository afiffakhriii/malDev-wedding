"use client";

import ScrollReveal from "@/components/ScrollReveal";
import Image from "next/image";
import { motion } from "framer-motion";

const photoList = [
    { src: "/images/couple_photo_1.png", delay: 0.5, x: "10%", y: 45, ropeLength: 60, rotationDuration: 4, initialRotate: 2 },
    { src: "/images/couple_photo_2.png", delay: 1.5, x: "35%", y: 75, ropeLength: 80, rotationDuration: 5, initialRotate: -3 },
    { src: "/images/couple_photo_3.png", delay: 2.5, x: "60%", y: 75, ropeLength: 50, rotationDuration: 4.5, initialRotate: 1.5 },
    { src: "/images/wedding_hero_accent.png", delay: 3.5, x: "85%", y: 45, ropeLength: 70, rotationDuration: 5.5, initialRotate: -2 },
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-4 md:px-12 lg:px-24 overflow-x-hidden">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal width="100%">
                    <h1 className="text-4xl md:text-5xl font-bold text-center text-[#ec4899] mb-4 font-serif">
                        Galeri Kebahagiaan
                    </h1>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Potret-potret kecil yang merekam cinta besar kami. Setiap senyum adalah doa, dan setiap tatapan adalah janji.
                    </p>
                </ScrollReveal>

                {/* Animated Hanging Gallery Section */}
                <div className="w-full mt-12 md:mt-24 overflow-x-auto pb-12 hide-scrollbar">
                    <div className="relative h-[600px] min-w-[1000px] w-full">

                        {/* SVG Animated Branch - Simple 'Smile' Curve */}
                        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 400" preserveAspectRatio="none">
                            {/* Dahan Utama */}
                            <motion.path
                                d="M-50,20 Q500,150 1050,20"
                                fill="none"
                                stroke="#8b5a2b"
                                strokeWidth="10"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 3, ease: "easeInOut" }}
                            />

                            {/* Ranting Kecil (Aksen) */}
                            <motion.path
                                d="M200,75 C210,95 190,105 180,115"
                                fill="none"
                                stroke="#8b5a2b"
                                strokeWidth="5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ delay: 1, duration: 1 }}
                            />
                            <motion.path
                                d="M800,70 C820,90 840,80 850,60"
                                fill="none"
                                stroke="#8b5a2b"
                                strokeWidth="5"
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                transition={{ delay: 1.5, duration: 1 }}
                            />
                        </svg>

                        {/* Hanging Photos */}
                        {photoList.map((photo, index) => (
                            <div
                                key={index}
                                className="absolute top-0"
                                style={{ left: photo.x, top: photo.y }}
                            >
                                {/* Rope/Tali Animation */}
                                <motion.div
                                    className="w-0.5 bg-[#d4a373] mx-auto origin-top relative"
                                    style={{ height: photo.ropeLength }}
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ delay: 2 + (index * 0.5), duration: 1, ease: "easeOut" }}
                                >
                                    {/* Hanging Photo Container */}
                                    <motion.div
                                        className="absolute top-full left-1/2 transform -translate-x-1/2"
                                        initial={{ opacity: 0, rotate: photo.initialRotate }}
                                        whileInView={{ opacity: 1 }}
                                        animate={{
                                            rotate: [-photo.initialRotate, photo.initialRotate, -photo.initialRotate]
                                        }}
                                        transition={{
                                            opacity: { delay: 3 + (index * 0.5), duration: 0.5 },
                                            rotate: {
                                                repeat: Infinity,
                                                duration: photo.rotationDuration,
                                                ease: "easeInOut",
                                                repeatType: "reverse"
                                            }
                                        }}
                                    >
                                        {/* Clip */}
                                        <div className="absolute -top-2 left-1/2 w-3 h-8 bg-[#8b5a2b] rounded-full -translate-x-1/2 -z-10"></div>

                                        {/* Polaroid Frame */}
                                        <div className="bg-white p-3 pb-8 shadow-xl rounded-sm w-56 h-auto transform origin-top hover:scale-105 transition-transform duration-300">
                                            <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                                                <Image
                                                    src={photo.src}
                                                    alt={`Gallery Photo ${index + 1}`}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
