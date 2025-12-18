// src/components/Hero.js
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const images = [
  "/images/wedding_hero_accent.png",
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
];

export default function Hero() {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Restore state

  useEffect(() => {
    // Image Slider Interval
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    const targetDate = new Date("2025-12-31T00:00:00").getTime(); // Dummy Date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(slideInterval);
    };
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-8 lg:p-16 pt-32 lg:pt-40 gap-8 min-h-screen">
      <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 max-w-xl z-10">

        {/* Konten Text dengan Animasi Masuk */}
        <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-lg animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-[#d83c87] leading-tight mb-4 drop-shadow-sm font-serif">
            Cinta Mekar <br />
            di Setiap Detik
          </h1>
          <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium mb-6">
            Di antara kelopak bunga dan semilir angin, kami mengikat janji suci.
            Jadilah saksi penyatuan dua hati dalam ikatan abadi yang penuh warna.
          </p>

          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="flex flex-col items-center bg-white/70 rounded-lg p-3 w-20 shadow-sm border border-[#ec4899]/20">
                <span className="text-2xl font-bold text-[#ec4899]">{value}</span>
                <span className="text-xs uppercase text-gray-600 font-semibold">{unit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
            <button className="px-8 py-4 text-white bg-[#ec4899] rounded-full font-bold hover:bg-[#d83c87] transition-all transform hover:scale-105 shadow-md hover:shadow-xl text-lg">
              Buat Undanganmu
            </button>
            <button className="px-8 py-4 text-[#ec4899] bg-white/80 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105 shadow-md hover:shadow-xl text-lg border border-white/50">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>

      {/* Slider Gambar */}
      <div className="flex-1 flex justify-center items-center relative mt-8 lg:mt-0 z-10">
        <div className="bg-white/30 backdrop-blur-md border border-white/40 rounded-[2rem] p-4 md:p-6 w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex justify-center items-center shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] shadow-inner">
            <div
              className="flex w-full h-full transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
              {images.map((src, index) => (
                <div key={index} className="flex-shrink-0 w-full h-full relative">
                  <Image
                    src={src}
                    alt={`Digital Wedding Solution ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}