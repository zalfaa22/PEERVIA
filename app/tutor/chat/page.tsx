// app/chat/page.tsx
"use client";

import Image from "next/image";
import NavbarTutor from "@/components/layout/navbarTutor";
import {
  CircleEllipsis,
  Filter,
  Info,
  Paperclip,
  SendHorizonal,
  Video,
  FileText,
} from "lucide-react";

const bookedUsers = [
  {
    name: "Amanda Kirana",
    major: "Sesi: Desain Komunikasi Visual",
    time: "09.32",
    active: true,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
  },
  {
    name: "Budi Susanto",
    major: "Sesi: Teknik Informatika",
    time: "Kemarin",
    active: true,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
  {
    name: "Nabila Putri",
    major: "Sesi: UI/UX Design",
    time: "08.10",
    active: true,
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=200",
  },
  {
    name: "Rafi Akbar",
    major: "Sesi: Mobile Development",
    time: "Senin",
    active: false,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=200",
  },
];

const unbookedUsers = [
  {
    name: "Kenzo Hosea",
    time: "10.15",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200",
  },
  {
    name: "Luna Cantika",
    time: "2 Hari Lalu",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200",
  },
  {
    name: "Yusuf Fauzan",
    time: "3 Hari Lalu",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
  {
    name: "Farrel Wijaya",
    time: "5 Hari Lalu",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
  },
  {
    name: "Cindy Maharani",
    time: "1 Minggu",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
  },
];

export default function ChatPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F8F8] font-[Poppins] text-[#1A1A1A]">
      <NavbarTutor />

      {/* MAIN */}
      <section className="mx-auto flex h-[calc(100vh-74px)] max-w-[1360px] overflow-hidden">
        {/* SIDEBAR */}
        <aside className="hidden h-full w-[315px] shrink-0 border-r border-[#E9E9E9] bg-[#FAFAFA] lg:block xl:w-[340px]">
          {/* IMPORTANT */}
          {/* ini bikin panel kiri bisa scroll */}
          <div className="flex h-full flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto px-5 py-5 scrollbar-thin scrollbar-thumb-[#D8D8D8] scrollbar-track-transparent">
              {/* TITLE */}
              <h1 className="mb-5 text-[28px] font-semibold tracking-[-1px]">
                Chat
              </h1>

              {/* SEARCH */}
              <div className="mb-5 flex gap-3">
                <div className="flex h-[46px] flex-1 items-center gap-3 rounded-[16px] border border-[#E7E7E7] bg-white px-4">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="#8B8B8B"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="11" cy="11" r="7"></circle>
                    <path d="m20 20-3.5-3.5"></path>
                  </svg>

                  <input
                    placeholder="Cari mahasiswa..."
                    className="w-full bg-transparent text-[13px] outline-none placeholder:text-[#9B9B9B]"
                  />
                </div>

                <button className="flex h-[46px] w-[46px] items-center justify-center rounded-[16px] border border-[#E7E7E7] bg-white transition hover:bg-[#F4F4F4]">
                  <Filter className="h-4 w-4" />
                </button>
              </div>

              {/* TAB */}
              <div className="mb-5 flex items-center gap-6 text-[13px]">
                <button className="border-b-2 border-[#8B5CF6] pb-2 font-medium text-[#8B5CF6]">
                  Semua
                </button>

                <button className="pb-2 text-[#5F5F5F]">
                  Sudah Booking
                </button>

                <button className="pb-2 text-[#5F5F5F]">
                  Belum Booking
                </button>
              </div>

              {/* BOOKED */}
              <div>
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.5px] text-[#8B5CF6]">
                  Mahasiswa (Sudah Booking)
                </p>

                <div className="space-y-3">
                  {bookedUsers.map((user, index) => (
                    <div
                      key={index}
                      className={`flex cursor-pointer items-center justify-between rounded-[18px] border px-3 py-3 transition-all ${
                        index === 0
                          ? "border-[#DDD1FF] bg-[#F4EEFF]"
                          : "border-transparent hover:bg-[#F4F4F4]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Image
                            src={user.image}
                            alt={user.name}
                            width={48}
                            height={48}
                            className="h-[46px] w-[46px] rounded-full object-cover"
                          />

                          <div
                            className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white ${
                              user.active
                                ? "bg-[#19C463]"
                                : "bg-[#BDBDBD]"
                            }`}
                          />
                        </div>

                        <div>
                          <h3 className="text-[14px] font-semibold leading-none">
                            {user.name}
                          </h3>

                          <p className="mt-1 text-[11px] text-[#6F6F6F]">
                            {user.major}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <p className="mb-1 text-[11px] text-[#666]">
                          {user.time}
                        </p>

                        <span className="rounded-md border border-[#19C463] bg-[#EFFFF5] px-2 py-[1px] text-[10px] font-medium text-[#19C463]">
                          Booked
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* UNBOOKED */}
              <div className="mt-6 border-t border-dashed border-[#DDDDDD] pt-6">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.5px] text-[#8B5CF6]">
                  Mahasiswa (Belum Booking)
                </p>

                <div className="space-y-4">
                  {unbookedUsers.map((user, index) => (
                    <div
                      key={index}
                      className="flex cursor-pointer items-center justify-between transition hover:opacity-80"
                    >
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Image
                            src={user.image}
                            alt={user.name}
                            width={44}
                            height={44}
                            className="h-[44px] w-[44px] rounded-full object-cover"
                          />

                          <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-[#19C463]" />
                        </div>

                        <h3 className="text-[13px] font-medium">
                          {user.name}
                        </h3>
                      </div>

                      <div className="text-right">
                        <p className="mb-1 text-[11px] text-[#666]">
                          {user.time}
                        </p>

                        <span className="rounded-md border border-[#FF9900] bg-[#FFF3E0] px-2 py-[1px] text-[10px] font-medium text-[#FF9900]">
                          Belum Booking
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-6 w-full text-center text-[12px] font-medium text-[#8B5CF6]">
                  Tampilkan lebih banyak
                </button>
              </div>

              {/* LEGEND */}
              <div className="mt-6 rounded-[18px] border border-[#E9DFFF] bg-[#F8F4FF] p-4">
                <h4 className="mb-3 text-[15px] font-semibold">
                  Keterangan
                </h4>

                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#19C463]" />

                    <div>
                      <p className="text-[13px] font-medium">
                        Sudah Booking
                      </p>

                      <p className="text-[11px] text-[#777]">
                        Mahasiswa sudah memesan sesi belajar
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 h-3 w-3 rounded-full bg-[#FF9900]" />

                    <div>
                      <p className="text-[13px] font-medium">
                        Belum Booking
                      </p>

                      <p className="text-[11px] text-[#777]">
                        Mahasiswa belum memesan sesi belajar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* spacer */}
              <div className="h-6" />
            </div>
          </div>
        </aside>

        {/* CHAT ROOM */}
        <section className="flex min-w-0 flex-1 flex-col overflow-hidden bg-[#FCFCFC]">
          {/* HEADER */}
          <div className="flex h-[74px] items-center justify-between border-b border-[#EAEAEA] bg-white px-5 xl:px-7">
            <div className="flex items-center gap-3">
              <Image
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  alt=""
  width={38}
  height={38}
  className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
/>

              <div>
                <h2 className="text-[16px] font-semibold">
                  Amanda Kirana
                </h2>

                <p className="text-[13px] text-[#19C463]">
                  Online
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-[#5B5B5B]">
              <button className="transition hover:text-[#8B5CF6]">
                <Video className="h-5 w-5" />
              </button>

              <button className="transition hover:text-[#8B5CF6]">
                <Info className="h-5 w-5" />
              </button>

              <button className="transition hover:text-[#8B5CF6]">
                <CircleEllipsis className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto px-5 py-5 xl:px-8">
            <div className="mx-auto max-w-[880px]">
              {/* BOOKING CARD */}
              <div className="mb-8 rounded-[20px] border border-[#E6DFFF] bg-[#F5F1FF] p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        stroke="#19C463"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 2v4M16 2v4M3 10h18" />
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-[17px] font-semibold">
                        Sudah Booking
                      </h3>

                      <p className="text-[13px] text-[#666]">
                        Sesi: Desain Komunikasi Visual
                      </p>
                    </div>
                  </div>

                  <button className="w-fit rounded-xl border border-[#E4E4E4] bg-white px-4 py-2 text-[13px] font-medium transition hover:bg-[#F5F5F5]">
                    Lihat Detail
                  </button>
                </div>
              </div>

              {/* DATE */}
              <div className="mb-8 flex justify-center">
                <div className="rounded-lg bg-[#F1F1F1] px-4 py-2 text-[12px] text-[#707070]">
                  Hari ini
                </div>
              </div>

              {/* CHAT */}
              <div className="space-y-6">
                <div className="flex items-end gap-3">
                  <Image
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  alt=""
  width={38}
  height={38}
  className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
/>

                  <div className="max-w-[290px] rounded-[22px] rounded-bl-[8px] bg-[#F5F1FF] px-5 py-4">
                    <p className="text-[14px] leading-relaxed text-[#3B3B3B]">
                      Halo kak, saya sudah siap di sesi hari ini ya!
                    </p>

                    <p className="mt-2 text-right text-[11px] text-[#777]">
                      10.25
                    </p>
                  </div>
                </div>

                <div className="flex justify-end">
                  <div className="max-w-[290px] rounded-[22px] rounded-br-[8px] bg-[#D9C4FF] px-5 py-4">
                    <p className="text-[14px] leading-relaxed text-[#353535]">
                      Halo! Siap, kita mulai sebentar lagi ya
                    </p>

                    <p className="mt-2 text-right text-[11px] text-[#5C5C5C]">
                      10.26
                    </p>
                  </div>
                </div>

                <div className="flex items-end gap-3">
                  <Image
  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200"
  alt=""
  width={38}
  height={38}
  className="h-[38px] w-[38px] shrink-0 rounded-full object-cover"
/>

                  <div className="max-w-[190px] rounded-[22px] rounded-bl-[8px] bg-[#F5F1FF] px-5 py-4">
                    <p className="text-[14px] text-[#3B3B3B]">
                      Oke, Baik kak.
                    </p>

                    <p className="mt-2 text-right text-[11px] text-[#777]">
                      10.26
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* INPUT */}
          <div className="border-t border-[#EAEAEA] bg-white px-5 py-4 xl:px-7">
            <div className="mx-auto max-w-[880px] rounded-[22px] border border-[#E8E8E8] bg-[#FCFCFC] p-3">
              <div className="flex items-center gap-3">
                <button className="flex h-[48px] w-[48px] items-center justify-center rounded-xl transition hover:bg-[#F2F2F2]">
                  <Paperclip className="h-5 w-5" />
                </button>

                <input
                  placeholder="Ketik Pesan..."
                  className="h-[50px] flex-1 rounded-[16px] border border-[#E8E8E8] bg-white px-5 text-[14px] outline-none placeholder:text-[#A0A0A0] focus:border-[#B692FF]"
                />

                <button className="flex h-[50px] w-[50px] items-center justify-center rounded-[16px] bg-[#8B5CF6] transition hover:bg-[#7C49F3]">
                  <SendHorizonal className="h-5 w-5 text-white" />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-3">
                <button className="flex h-[58px] items-center justify-center gap-3 rounded-[18px] border border-[#E8E8E8] bg-white text-[14px] font-medium transition hover:bg-[#F5F5F5]">
                  <Video className="h-5 w-5" />
                  Video Call
                </button>

                <button className="flex h-[58px] items-center justify-center gap-3 rounded-[18px] border border-[#E8E8E8] bg-white text-[14px] font-medium transition hover:bg-[#F5F5F5]">
                  <FileText className="h-5 w-5" />
                  Kirim File
                </button>

                <button className="flex h-[58px] items-center justify-center gap-3 rounded-[18px] bg-[#FF5757] text-[14px] font-semibold text-black transition hover:bg-[#ff4d4d]">
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    stroke="black"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 9h6v6H9z" />
                    <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
                  </svg>

                  Sesi Berakhir
                </button>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}