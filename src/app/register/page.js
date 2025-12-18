// src/components/RegisterForm.js

"use client";

import { useState } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const passwordStrength = {
    hasOneLowercase: /[a-z]/.test(password),
    hasOneUppercase: /[A-Z]/.test(password),
    hasOneNumber: /[0-9]/.test(password),
    hasAtLeast8Chars: password.length >= 8,
  };

  const getPasswordStrength = () => {
    let score = 0;
    if (passwordStrength.hasOneLowercase) score += 1;
    if (passwordStrength.hasOneUppercase) score += 1;
    if (passwordStrength.hasOneNumber) score += 1;
    if (passwordStrength.hasAtLeast8Chars) score += 1;
    return (score / 4) * 100;
  };

  const getStrengthText = (score) => {
    if (score === 0) return "";
    if (score <= 50) return "weak";
    if (score <= 75) return "good";
    return "very good";
  };

  const handlePhoneNumberChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(numericValue);
  };

  return (
    <div className="flex items-center justify-center min-h-screen pt-20 pb-10 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-sm bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-[2rem] shadow-xl text-center border border-white/50">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Daftar Sekarang!
        </h1>
        <p className="text-gray-500 text-sm md:text-base mb-6 md:mb-8">
          Yuk, wujudkan pernikahan impianmu bersama kami.
        </p>

        <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-100 transition-colors mb-4">
          <FcGoogle className="w-5 h-5 mr-2" />
          Daftar Dengan Google
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

          <div className="flex space-x-2 relative mt-4">
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 text-gray-700">
              <span className="mr-2">🇮🇩</span>
              +62
            </div>
            <input
              type="tel"
              placeholder="Nomor Ponsel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-gray-700"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400"
            >
              {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
            </button>
          </div>

          {/* Password Strength */}
          <div className="mt-2 flex items-center justify-between">
            <div
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: `${getPasswordStrength()}%`,
                backgroundColor: getPasswordStrength() > 75 ? '#22C55E' : getPasswordStrength() > 50 ? '#FACC15' : '#EF4444',
              }}
            ></div>
            <span className="text-sm font-semibold ml-2"
              style={{
                color: getPasswordStrength() > 75 ? '#22C55E' : getPasswordStrength() > 50 ? '#FACC15' : '#EF4444',
              }}
            >
              {getStrengthText(getPasswordStrength())}
            </span>
          </div>

          <div className="text-sm text-gray-500 space-y-1 mt-2">
            <h3 className="font-semibold text-gray-700">Password Strength</h3>
            <div className="flex items-center">
              <span className={`w-3 h-3 mr-2 ${passwordStrength.hasOneLowercase && passwordStrength.hasOneUppercase ? 'text-green-500' : 'text-gray-400'}`}>
                {passwordStrength.hasOneLowercase && passwordStrength.hasOneUppercase ? '✓' : '•'}
              </span>
              One Lowercase & One Uppercase
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 mr-2 ${passwordStrength.hasOneNumber ? 'text-green-500' : 'text-gray-400'}`}>
                {passwordStrength.hasOneNumber ? '✓' : '•'}
              </span>
              Number (0-9)
            </div>
            <div className="flex items-center">
              <span className={`w-3 h-3 mr-2 ${passwordStrength.hasAtLeast8Chars ? 'text-green-500' : 'text-gray-400'}`}>
                {passwordStrength.hasAtLeast8Chars ? '✓' : '•'}
              </span>
              At least 8 Characters
            </div>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Konfirmasi Kata Sandi"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-400"
            >
              {showPassword ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="mt-6">
          <button className="w-full px-4 py-3 bg-[var(--primary)] text-white rounded-full font-semibold hover:bg-[var(--secondary)] transition-colors">
            Daftar
          </button>
        </div>

        <div className="mt-4 text-center text-sm">
          <span className="text-gray-500">Sudah punya akun?</span>{" "}
          <Link href="/login" className="text-[var(--primary)] font-semibold hover:underline">
            Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}