"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Beranda",
      href: "/",
    },
    {
      label: "Cari Tutor",
      href: "/cari-tutor",
    },
    {
      label: "Tentang Kami",
      href: "/tentang-kami",
    },
    {
      label: "Kontak",
      href: "/kontak",
    },
  ];

  return (
    <header className="w-full border-b border-[#EEEEEE] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Peervia"
            className="w-[150px] h-auto"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-[16px]
                  font-semibold
                  transition
                  hover:text-violet-500
                  ${
                    isActive
                      ? "text-violet-500"
                      : "text-[#222222]"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* BUTTON */}
        <button className="bg-violet-500 hover:bg-violet-600 transition text-white px-6 py-3 rounded-xl font-semibold">
          Masuk
        </button>
      </div>
    </header>
  );
}