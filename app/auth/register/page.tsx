"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { User, Mail, LockKeyhole } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-white grid lg:grid-cols-[0.7fr_1.3fr]">

      {/* LEFT IMAGE */}
      <div className="relative hidden lg:block h-screen">
        <Image
          src="/logo.jpeg"
          alt="Register"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="h-screen flex flex-col justify-center px-10 lg:px-24 overflow-y-auto">

        <div className="max-w-[500px] w-full mx-auto">

          {/* BACK */}
          <button
            onClick={() => router.push("/auth/login")}
            className="mb-6 text-[#666]"
          >
            ← Kembali
          </button>

          {/* LOGO */}
          <div className="flex justify-center mb-10">
            <Image src="/logo.svg" alt="logo" width={260} height={90} />
          </div>

          {/* TITLE */}
          <h1 className="text-[26px] font-semibold mb-8">
            Register
          </h1>

          {/* NAMA */}
          <div className="relative mb-5">
            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999]" />
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full h-[68px] pl-14 rounded-[20px] bg-[#FAFAFA] border border-[#ECECEC]"
            />
          </div>

          {/* EMAIL */}
          <div className="relative mb-5">
            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999]" />
            <input
              type="email"
              placeholder="Masukkan Email"
              className="w-full h-[68px] pl-14 rounded-[20px] bg-[#FAFAFA] border border-[#ECECEC]"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative mb-4">
            <LockKeyhole className="absolute left-5 top-1/2 -translate-y-1/2 text-[#999]" />
            <input
              type="password"
              placeholder="Buat Password"
              className="w-full h-[68px] pl-14 rounded-[20px] bg-[#FAFAFA] border border-[#ECECEC]"
            />
          </div>

          {/* AGREEMENT */}
          <div className="flex items-start gap-2 mb-10">
            <input type="checkbox" className="mt-1" />
            <span className="text-[14px] text-[#777]">
              I agree to Terms of Service and Privacy Policy
            </span>
          </div>

          {/* REGISTER BUTTON */}
          <button className="w-full h-[68px] bg-[#8B5CF6] text-white rounded-[20px] mb-10">
            Register
          </button>

          {/* LOGIN LINK */}
          <p className="text-center text-[#777] text-[15px]">
            Sudah punya akun?{" "}
            <span
              onClick={() => router.push("/auth/login")}
              className="text-[#8B5CF6] font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>

          {/* SOCIAL REGISTER */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
            <span className="text-[#999] text-[14px] whitespace-nowrap">
              or register with
            </span>
            <div className="flex-1 h-[1px] bg-[#E5E5E5]" />
          </div>

          <div className="flex justify-center gap-6">
            <FaFacebookF className="text-[#7C4DF2]" />
            <FaInstagram className="text-[#7C4DF2]" />
            <FaLinkedinIn className="text-[#7C4DF2]" />
            <FaTwitter className="text-[#7C4DF2]" />
          </div>

        </div>
      </div>
    </div>
  );
}