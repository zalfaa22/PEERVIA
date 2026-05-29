"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { GraduationCap, BookOpen, Mail, LockKeyhole } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGoogle,
} from "react-icons/fa";

type Role = "select" | "tutor" | "student";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role") as Role | null;
  const [role, setRole] = useState<Role>(
    roleParam === "tutor" || roleParam === "student" ? roleParam : "select",
  );

  return (
    <main className="bg-white min-h-screen">
      <section className="grid min-h-screen lg:grid-cols-[0.78fr_1.22fr]">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block min-h-screen">
          <Image
            src="/logo.jpeg"
            alt="Login"
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
            overflow-y-auto
          "
        >
          {/* ================= SELECT ROLE ================= */}
          {role === "select" && (
            <div className="w-full max-w-[760px]">
              {/* LOGO */}
              <div className="mb-5 flex justify-center lg:mb-6">
                <Image
                  src="/logo.svg"
                  alt="Peervia Logo"
                  width={240}
                  height={80}
                  priority
                  className="h-auto w-[170px] sm:w-[200px] lg:w-[220px] xl:w-[240px]"
                />
              </div>

              {/* TITLE */}
              <div className="mb-6 text-center lg:mb-7">
                <h1 className="mb-2 text-[26px] font-bold leading-tight text-[#111111] sm:text-[32px] lg:text-[36px] xl:text-[42px]">
                  Selamat datang di Peervia!
                </h1>

                <p className="mx-auto max-w-[520px] text-[13px] text-[#777777] sm:text-[14px] lg:text-[15px] xl:text-[16px]">
                  Sebelum memulai, pilih peran yang sesuai dengan anda
                </p>
              </div>

              {/* ROLE CARDS */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-5">
                {/* TUTOR */}
                <div className="rounded-[26px] bg-[#F3EBFF] p-5 xl:rounded-[32px] xl:p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#E5D6FF] lg:h-[76px] lg:w-[76px] xl:h-[86px] xl:w-[86px]">
                      <GraduationCap size={34} className="text-[#2F2F72]" />
                    </div>
                  </div>

                  <h2 className="mb-2 text-center text-[18px] font-bold text-[#111111] lg:text-[20px] xl:text-[24px]">
                    Saya Tutor
                  </h2>

                  <p className="mb-5 text-center text-[11px] leading-relaxed text-[#666666] sm:text-[12px] xl:text-[13px]">
                    Bagikan ilmu dan pengalaman Anda, bantu siswa memahami
                    materi dengan lebih baik, dan dapatkan penghasilan.
                  </p>

                  <button
                    onClick={() => setRole("tutor")}
                    className="h-[46px] w-full rounded-full bg-[#4B4B4B] text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#3A3A3A] active:scale-[0.99] xl:h-[52px] xl:text-[14px]"
                  >
                    Lanjut sebagai Tutor
                  </button>
                </div>

                {/* STUDENT */}
                <div className="rounded-[26px] bg-[#F3EBFF] p-5 xl:rounded-[32px] xl:p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#E5D6FF] lg:h-[76px] lg:w-[76px] xl:h-[86px] xl:w-[86px]">
                      <BookOpen size={32} className="text-[#2F2F72]" />
                    </div>
                  </div>

                  <h2 className="mb-2 text-center text-[18px] font-bold text-[#111111] lg:text-[20px] xl:text-[24px]">
                    Saya Pelajar
                  </h2>

                  <p className="mb-5 text-center text-[11px] leading-relaxed text-[#666666] sm:text-[12px] xl:text-[13px]">
                    Temukan tutor terbaik, belajar sesuai kebutuhan, dan
                    tingkatkan pemahaman Anda bersama Peervia.
                  </p>

                  <button
                    onClick={() => setRole("student")}
                    className="h-[46px] w-full rounded-full bg-[#8B5CF6] text-[12px] font-semibold text-white transition-all duration-300 hover:bg-[#7C4DF2] active:scale-[0.99] xl:h-[52px] xl:text-[14px]"
                  >
                    Lanjut sebagai Pelajar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ================= LOGIN FORM ================= */}
          {role !== "select" && (
            <div className="w-full max-w-[560px] my-auto">
              {/* BACK */}
              <button
                onClick={() => setRole("select")}
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
                  Login
                </h1>
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
              <div className="relative mb-5">
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

              {/* REMEMBER */}
              <div className="mb-5 flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-[14px] w-[14px] accent-[#8B5CF6]"
                />

                <span className="text-[14px] text-[#555555]">Remember me</span>
              </div>

              {/* LOGIN BUTTON */}
              <button
                onClick={() =>
                  router.push(
                    role === "student"
                      ? "/learner/dashboard"
                      : "/tutor/dashboard",
                  )
                }
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
                Login
              </button>

              {/* DIVIDER */}
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-black" />

                <span className="whitespace-nowrap text-[14px] text-[#888888]">
                  Or Login With
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

              {/* REGISTER */}
              {/* REGISTER */}
              <p className="text-center text-[15px] text-black">
                Belum punya akun?{" "}
                <span
                  onClick={() => router.push(`/auth/register?role=${role}`)}
                  className="cursor-pointer text-[#8B5CF6] hover:underline"
                >
                  Daftar
                </span>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
