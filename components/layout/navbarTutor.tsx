"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Bell, CircleUserRound, Menu, Settings, LogOut } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function NavbarTutor() {
  const pathname = usePathname();

  const [openProfile, setOpenProfile] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setOpenProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    {
      label: "Beranda",
      href: "/tutor/dashboard",
    },
    {
      label: "Booking",
      href: "/tutor/booking",
    },
    {
      label: "Chat",
      href: "/tutor/chat",
    },
    {
      label: "Pendapatan",
      href: "/tutor/pendapatan",
    },
    {
      label: "Profil",
      href: "/tutor/profile",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#ECECEC] bg-white">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Peervia"
            width={180}
            height={60}
            priority
            className="h-auto w-[135px] lg:w-[180px]"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-[15px]
                  font-semibold
                  transition-all
                  duration-300
                  hover:text-[#8B5CF6]
                  xl:text-[17px]
                  ${isActive ? "text-[#8B5CF6]" : "text-[#1E1E1E]"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3 lg:gap-5">
          {/* NOTIF */}
          <button className="transition-all duration-300 hover:scale-110">
            <Bell
              strokeWidth={2.2}
              className="h-[24px] w-[24px] text-black lg:h-[28px] lg:w-[28px]"
            />
          </button>

          {/* PROFILE DROPDOWN */}
          <div className="relative hidden lg:block" ref={profileRef}>
            <button
              onClick={() => setOpenProfile(!openProfile)}
              className="transition-all duration-300 hover:scale-110"
            >
              <CircleUserRound
                strokeWidth={2.1}
                className="h-[34px] w-[34px] text-black lg:h-[42px] lg:w-[42px]"
              />
            </button>

            {/* DROPDOWN */}
            <div
              className={`
                absolute right-0 top-[62px]
                w-[220px]
                rounded-[16px]
                border border-[#ECECEC]
                bg-white
                p-3
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                transition-all duration-200
                ${
                  openProfile
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }
              `}
            >
              <div className="flex flex-col">
                {/* SETTINGS */}
                <Link
                  href="/tutor/pengaturan"
                  className="flex items-center gap-3 rounded-[12px] px-4 py-3 text-[15px] font-medium text-[#222] transition hover:bg-[#F6F6F6]"
                >
                  <Settings size={18} />
                  Pengaturan Akun
                </Link>

                {/* LOGOUT */}
                <Link
                  href="/auth/login"
                  className="flex items-center gap-3 rounded-[12px] px-4 py-3 text-left text-[15px] font-medium text-[#FF3B30] transition hover:bg-[#FFF2F1]"
                >
                  <LogOut size={18} />
                  Logout
                </Link>
              </div>
            </div>
          </div>

          {/* MOBILE MENU */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <Menu className="h-7 w-7 text-black" />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[280px]">
                <div className="mt-10 flex flex-col gap-5">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`text-[16px] font-semibold ${
                          isActive ? "text-[#8B5CF6]" : "text-[#1E1E1E]"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}

                  <div className="mt-6 border-t border-[#ECECEC] pt-6">
                    <Link
                      href="/tutor/pengaturan"
                      className="flex items-center gap-3 py-3 text-[16px] font-medium text-[#222]"
                    >
                      <Settings size={18} />
                      Pengaturan Akun
                    </Link>

                    <Link
                      href="/auth/login"
                      className="flex items-center gap-3 py-3 text-[16px] font-medium text-[#FF3B30]"
                    >
                      <LogOut size={18} />
                      Logout
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
