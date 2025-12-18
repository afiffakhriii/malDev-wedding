"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname === "/login" || pathname === "/register";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 md:px-8 lg:px-12 py-4 bg-white/30 backdrop-blur-md border-b border-white/20 fixed top-0 w-full z-50 shadow-sm transition-all duration-300">
      <Link href="/" className="font-bold text-lg md:text-xl text-[var(--primary)] z-50">
        Maldev Wedding
      </Link>

      {!isAuthPage && (
        <>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex space-x-6">
              <Link href="/story" className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium transition-colors">Cerita Kita</Link>
              <Link href="/gallery" className="text-[var(--primary)] hover:text-[var(--secondary)] font-medium transition-colors">Galeri</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="px-5 py-2 text-[var(--primary)] border border-[var(--primary)] rounded-full hover:bg-[var(--foreground)] hover:text-white transition-colors text-sm">
                Masuk
              </Link>
              <Link href="/register" className="px-5 py-2 text-white bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] transition-colors text-sm">
                Daftar
              </Link>
            </div>
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden z-50 p-2 text-[var(--primary)] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-between items-center relative">
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-0.5 bg-current transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </button>

          {/* Mobile Navigation Overlay */}
          <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-start pt-32 space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--secondary)]">Beranda</Link>
            <Link href="/story" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--secondary)]">Cerita Kita</Link>
            <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[var(--primary)] hover:text-[var(--secondary)]">Galeri</Link>
            <div className="flex flex-col space-y-4 w-48">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-[var(--primary)] border border-[var(--primary)] rounded-full hover:bg-[var(--foreground)] hover:text-white transition-colors text-center font-semibold">
                Masuk
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="px-6 py-3 text-white bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] transition-colors text-center font-semibold">
                Daftar
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}