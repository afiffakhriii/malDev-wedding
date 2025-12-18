"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 pb-10 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-xl text-center border border-white/50">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Selamat Datang di Maldev Wedding!
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
          Waktunya wujudkan pernikahan impianmu. Masuk!
        </p>

        <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-colors mb-4">
          <FcGoogle className="w-5 h-5 mr-2" />
          Login Dengan Google
        </button>

        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">atau</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="space-y-4 text-left">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-gray-700"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
              {showPassword ? (
                <FaEyeSlash className="h-5 w-5 text-gray-400" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>
          <div className="text-right text-sm">
            <Link href="#" className="text-gray-500 hover:text-[var(--primary)] transition-colors">
              Lupa Kata Sandi?
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-3 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--secondary)] transition-colors">
            Masuk
          </button>
        </div>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-500">Belum punya akun?</span>{" "}
          <Link href="/register" className="text-[var(--primary)] font-semibold hover:underline">
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}