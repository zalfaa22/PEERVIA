"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Mail,
  LockKeyhole,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function LoginPage() {
  const [role, setRole] = useState<"select" | "tutor" | "student">("select");
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-white grid lg:grid-cols-[0.7fr_1.3fr]">

      {/* LEFT IMAGE */}
      <div className="relative hidden lg:block h-screen">
        <Image
          src="/logo.jpeg"
          alt="Login"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="h-screen flex flex-col justify-center px-10 lg:px-24 overflow-y-auto">

        {/* ROLE SECTION */}
        {role === "select" && (
          <>
            <div className="flex justify-center mb-24">
              <Image
                src="/logo.svg"
                alt="Peervia Logo"
                width={300}
                height={100}
                className="w-[300px] h-auto"
                priority
              />
            </div>

            <h1 className="text-[44px] leading-[54px] font-bold text-[#111111] text-center mb-5">
              Selamat datang di Peervia!
            </h1>

            <p className="text-[#777777] text-[18px] text-center mb-16">
              Sebelum memulai, pilih peran yang sesuai dengan anda
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

              {/* TUTOR */}
              <div className="bg-[#F3EBFF] rounded-[36px] p-8 flex flex-col items-center text-center">
                <div className="w-[100px] h-[100px] rounded-full bg-[#E5D6FF] flex items-center justify-center mb-6">
                  <GraduationCap size={44} className="text-[#2F2F72]" />
                </div>

                <h2 className="text-[26px] font-bold mb-4">Saya Tutor</h2>

                <p className="text-[#666666] text-[14px] leading-relaxed mb-8">
                  Bagikan ilmu dan pengalaman Anda, bantu siswa memahami materi dengan lebih baik, dan dapatkan penghasilan.
                </p>

                <button
                  onClick={() => setRole("tutor")}
                  className="w-full rounded-full bg-[#4B4B4B] hover:bg-[#3A3A3A] transition text-white py-4 font-semibold text-[15px]"
                >
                  Lanjut sebagai Tutor
                </button>
              </div>

              {/* STUDENT */}
              <div className="bg-[#F3EBFF] rounded-[36px] p-8 flex flex-col items-center text-center">
                <div className="w-[100px] h-[100px] rounded-full bg-[#E5D6FF] flex items-center justify-center mb-6">
                  <BookOpen size={44} className="text-[#2F2F72]" />
                </div>

                <h2 className="text-[26px] font-bold mb-4">Saya Pelajar</h2>

                <p className="text-[#666666] text-[14px] leading-relaxed mb-8">
                  Temukan tutor terbaik, belajar sesuai kebutuhan, dan tingkatkan pemahaman Anda bersama Peervia.
                </p>

                <button
                  onClick={() => setRole("student")}
                  className="w-full rounded-full bg-[#8B5CF6] hover:bg-[#7C4DF2] transition text-white py-4 font-semibold text-[15px]"
                >
                  Lanjut sebagai Pelajar
                </button>
              </div>
            </div>
          </>
        )}

        {/* LOGIN SECTION */}
        {role !== "select" && (
          <div className="max-w-[500px] w-full mx-auto">

            {/* BACK BUTTON */}
            <button
              onClick={() => setRole("select")}
              className="text-[#666666] hover:text-black transition mb-6 text-[15px] text-left"
            >
              ← Kembali
            </button>

            {/* LOGO */}
            <div className="flex justify-center mb-10">
              <Image
                src="/logo.svg"
                alt="Peervia Logo"
                width={260}
                height={90}
                className="w-[260px] h-auto"
                priority
              />
            </div>

            {/* TITLE */}
            <h1 className="text-[26px] font-semibold text-[#111111] mb-8 text-left">
              Login
            </h1>

            {/* EMAIL */}
            <div className="relative mb-5">
              <Mail size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999999]" />
              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full h-[68px] bg-[#FAFAFA] border border-[#ECECEC] rounded-[20px] pl-14 pr-5 text-[15px] outline-none focus:border-violet-500"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative mb-4">
              <LockKeyhole size={20} className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999999]" />
              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full h-[68px] bg-[#FAFAFA] border border-[#ECECEC] rounded-[20px] pl-14 pr-5 text-[15px] outline-none focus:border-violet-500"
              />
            </div>

            {/* REMEMBER */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-[14px] text-[#777777]">Remember me</span>
              </div>

              <button className="text-[14px] text-[#8B5CF6] font-medium hover:underline">
                Forgot Password?
              </button>
            </div>

            {/* LOGIN BUTTON */}
            <button className="w-full h-[68px] rounded-[20px] bg-[#8B5CF6] hover:bg-[#7C4DF2] transition text-white font-semibold text-[17px] mb-10 shadow-lg shadow-violet-200">
              Login
            </button>

            {/* OR LOGIN */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
              <span className="text-[#999999] text-[14px] whitespace-nowrap">
                or login with
              </span>
              <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
            </div>

            {/* SOCIAL */}
            <div className="flex items-center justify-center gap-6 mb-10">
              <button className="w-[82px] h-[82px] rounded-[28px] bg-[#F3EBFF] flex items-center justify-center hover:scale-105 transition">
                <FaFacebookF className="text-[28px] text-[#7C4DF2]" />
              </button>

              <button className="w-[82px] h-[82px] rounded-[28px] bg-[#F3EBFF] flex items-center justify-center hover:scale-105 transition">
                <FaInstagram className="text-[28px] text-[#7C4DF2]" />
              </button>

              <button className="w-[82px] h-[82px] rounded-[28px] bg-[#F3EBFF] flex items-center justify-center hover:scale-105 transition">
                <FaLinkedinIn className="text-[28px] text-[#7C4DF2]" />
              </button>

              <button className="w-[82px] h-[82px] rounded-[28px] bg-[#F3EBFF] flex items-center justify-center hover:scale-105 transition">
                <FaTwitter className="text-[28px] text-[#7C4DF2]" />
              </button>
            </div>

            {/* REGISTER (HANYA TAMBAH ONCLICK ROUTER) */}
            <p className="text-center text-[#777777] text-[15px]">
              Belum punya akun?{" "}
              <span
                onClick={() => router.push("/auth/register")}
                className="text-[#8B5CF6] font-semibold cursor-pointer hover:underline"
              >
                Daftar sekarang
              </span>
            </p>

          </div>
        )}
      </div>
    </div>
  );
}