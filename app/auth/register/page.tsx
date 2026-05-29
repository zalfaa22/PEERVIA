"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { User, Mail, LockKeyhole } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const role = searchParams.get("role");

  return (
    <main className="bg-white min-h-screen">
      <section className="grid min-h-screen lg:grid-cols-[0.78fr_1.22fr]">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block min-h-screen">
          <Image
            src="/logo.jpeg"
            alt="Register"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="
            flex
            items-center
            justify-center
            px-5
            py-8
            sm:px-8
            md:px-10
            lg:px-12
            xl:px-16
            2xl:px-24
            min-h-screen
          "
        >
          <div className="w-full max-w-[560px]">
            {/* BACK */}
            <button
              onClick={() => router.push("/auth/login")}
              className="mb-4 text-[13px] text-[#666666] transition hover:text-black"
            >
              ← Kembali
            </button>

            {/* LOGO */}
            <div className="mb-6 flex justify-center lg:mb-8">
              <Image
                src="/logo.svg"
                alt="Peervia Logo"
                width={260}
                height={90}
                priority
                className="h-auto w-[180px] lg:w-[240px]"
              />
            </div>

            {/* TITLE */}
            <div className="mb-6 lg:mb-7">
              <h1 className="text-[30px] font-bold leading-none text-black lg:text-[40px]">
                {role === "tutor"
                  ? "Daftar Sebagai Tutor"
                  : "Daftar Sebagai Pelajar"}
              </h1>

              <p className="mt-3 text-[15px] text-[#777]">
                {role === "tutor"
                  ? "Mulai bagikan ilmu dan bangun kelasmu di Peervia"
                  : "Temukan tutor terbaik dan mulai belajar bersama Peervia"}
              </p>
            </div>

            {/* NAME */}
            <div className="relative mb-5">
              <User
                size={20}
                strokeWidth={2}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-black"
              />

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="
                  h-[56px]
                  w-full
                  rounded-full
                  border
                  border-[#D9D9D9]
                  bg-transparent
                  pl-14
                  pr-5
                  text-[14px]
                  text-[#555555]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#9B9B9B]
                  focus:border-[#8B5CF6]
                "
              />
            </div>

            {/* EMAIL */}
            <div className="relative mb-5">
              <Mail
                size={20}
                strokeWidth={2}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-black"
              />

              <input
                type="email"
                placeholder="Masukkan email"
                className="
                  h-[56px]
                  w-full
                  rounded-full
                  border
                  border-[#D9D9D9]
                  bg-transparent
                  pl-14
                  pr-5
                  text-[14px]
                  text-[#555555]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#9B9B9B]
                  focus:border-[#8B5CF6]
                "
              />
            </div>

            {/* PASSWORD */}
            <div className="relative mb-6">
              <LockKeyhole
                size={20}
                strokeWidth={2}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-black"
              />

              <input
                type="password"
                placeholder="Buat password"
                className="
                  h-[56px]
                  w-full
                  rounded-full
                  border
                  border-[#D9D9D9]
                  bg-transparent
                  pl-14
                  pr-5
                  text-[14px]
                  text-[#555555]
                  outline-none
                  transition-all
                  duration-300
                  placeholder:text-[#9B9B9B]
                  focus:border-[#8B5CF6]
                "
              />
            </div>

            {/* TERMS */}
            <div className="mb-6 flex items-start gap-2">
              <input
                type="checkbox"
                className="mt-[2px] h-[14px] w-[14px] accent-[#8B5CF6]"
              />

              <p className="text-[14px] leading-relaxed text-[#555555]">
                I agree to the{" "}
                <span className="cursor-pointer text-[#8B5CF6] hover:underline">
                  terms of service
                </span>{" "}
                and{" "}
                <span className="cursor-pointer text-[#8B5CF6] hover:underline">
                  privacy policy
                </span>
              </p>
            </div>

            {/* REGISTER BUTTON */}
            <button
              onClick={() => router.push(`/auth/login?role=${role}`)}
              className="
    mb-6
    h-[56px]
    w-full
    rounded-full
    bg-gradient-to-r
    from-[#8B5CF6]
    to-[#9B6CF8]
    text-[20px]
    font-semibold
    text-white
    transition-all
    duration-300
    hover:scale-[1.01]
    active:scale-[0.99]
  "
            >
              Daftar
            </button>

            {/* DIVIDER */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-black" />

              <span className="whitespace-nowrap text-[14px] text-[#888888]">
                Atau Daftar Dengan
              </span>

              <div className="h-[1px] flex-1 bg-black" />
            </div>

            {/* SOCIAL LOGIN */}
            <div className="mb-5 flex items-center justify-center gap-4">
              {[
                FaFacebookF,
                FaGoogle,
                FaTwitter,
                FaInstagram,
                FaLinkedinIn,
              ].map((Icon, i) => (
                <button
                  key={i}
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEE9FF]
                    transition-all
                    duration-300
                    hover:scale-110
                  "
                >
                  <Icon className="text-[18px] text-[#8B5CF6]" />
                </button>
              ))}
            </div>

            {/* LOGIN */}
            <p className="text-center text-[15px] text-black">
              Sudah punya akun?{" "}
              <span
                onClick={() => router.push(`/auth/login?role=${role}`)}
                className="cursor-pointer text-[#8B5CF6] hover:underline"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
