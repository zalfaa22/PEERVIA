import Image from "next/image";
import {
  Video,
} from "lucide-react";

import NavbarTutor from "@/components/layout/navbarTutor";

const tabs = [
  "Semua",
  "Menunggu Konfirmasi",
  "Dikonfirmasi",
  "Selesai",
  "Dibatalkan",
];

const bookings = [
  {
    name: "Amanda Kirana",
    image: "/student1.jpg",
    topic: "UI/UX Design Dasar",
    status: "Dikonfirmasi",
    statusColor:
      "border border-[#21B66F] bg-[#E9FFF3] text-[#18A45F]",
  },
  {
    name: "Budi Susanto",
    image: "/student2.jpg",
    topic: "UI/UX Design Dasar",
    status: "Dikonfirmasi",
    statusColor:
      "border border-[#21B66F] bg-[#E9FFF3] text-[#18A45F]",
  },
  {
    name: "Kenzo Hosea",
    image: "/student3.jpg",
    topic: "UI/UX Design Dasar",
    status: "Menunggu Konfirmasi",
    statusColor:
      "border border-[#FFB648] bg-[#FFF4E5] text-[#FF9800]",
  },
  {
    name: "Luna Cantika",
    image: "/student4.jpg",
    topic: "UI/UX Design Dasar",
    status: "Menunggu Konfirmasi",
    statusColor:
      "border border-[#FFB648] bg-[#FFF4E5] text-[#FF9800]",
  },
  {
    name: "Yusuf Fauzan",
    image: "/student5.jpg",
    topic: "UI/UX Design Dasar",
    status: "Menunggu Konfirmasi",
    statusColor:
      "border border-[#FFB648] bg-[#FFF4E5] text-[#FF9800]",
  },
];

export default function TutorBookingPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* NAVBAR */}
      <NavbarTutor />

      {/* CONTENT */}
      <section className="mx-auto max-w-[1440px] px-4 py-7 sm:px-6 lg:px-10 lg:py-10">

        {/* TITLE */}
        <div className="mb-7">
          <h1 className="text-[28px] font-bold leading-tight text-[#222222] sm:text-[34px] lg:text-[42px]">
            Booking Sesi
          </h1>

          <p className="mt-1 text-[14px] text-[#666666] sm:text-[15px] lg:text-[18px]">
            Kelola semua permintaan dan jadwal sesi belajar.
          </p>
        </div>

        {/* TABS */}
        <div className="mb-5 flex flex-wrap items-center gap-5 border-b border-[#E7E7E7] pb-4 sm:gap-7">

          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                relative
                pb-2
                text-[14px]
                font-semibold
                transition-all
                duration-300
                sm:text-[15px]
                lg:text-[16px]
                ${
                  index === 0
                    ? "text-[#8B5CF6]"
                    : "text-[#555555] hover:text-[#8B5CF6]"
                }
              `}
            >
              <div className="flex items-center gap-2">

                {tab}

                {tab === "Menunggu Konfirmasi" && (
                  <span
                    className="
                      flex
                      h-[18px]
                      min-w-[18px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFB9C4]
                      px-[5px]
                      text-[10px]
                      font-bold
                      text-[#B4233C]
                    "
                  >
                    3
                  </span>
                )}
              </div>

              {index === 0 && (
                <div className="absolute bottom-[-5px] left-0 h-[3px] w-full rounded-full bg-[#8B5CF6]" />
              )}
            </button>
          ))}
        </div>

        {/* BOOKING CARD */}
        <div
          className="
            rounded-[24px]
            border
            border-[#EAEAEA]
            bg-white
            px-4
            py-3
            shadow-[0_4px_25px_rgba(0,0,0,0.04)]
            sm:px-6
            lg:rounded-[30px]
            lg:px-9
            lg:py-5
          "
        >

          {bookings.map((item, index) => (
            <div
              key={index}
              className={`
                flex
                flex-col
                gap-6
                py-5
                lg:grid
                lg:grid-cols-[1.6fr_1fr_0.7fr_0.9fr]
                lg:items-center
                lg:gap-6
                ${
                  index !== bookings.length - 1
                    ? "border-b border-[#E8E8E8]"
                    : ""
                }
              `}
            >

              {/* LEFT */}
              <div className="flex items-center gap-4 lg:gap-5">

                {/* IMAGE */}
                <Image
                  src={item.image}
                  alt={item.name}
                  width={72}
                  height={72}
                  className="
                    h-[62px]
                    w-[62px]
                    rounded-full
                    object-cover
                    lg:h-[72px]
                    lg:w-[72px]
                  "
                />

                {/* INFO */}
                <div>
                  <h3 className="text-[17px] font-bold text-[#222222] lg:text-[20px]">
                    {item.name}
                  </h3>

                  <p className="mt-[2px] text-[14px] text-[#666666] lg:text-[15px]">
                    {item.topic}
                  </p>

                  <div className="mt-1 flex items-center gap-2 text-[12px] text-[#666666] lg:text-[13px]">
                    <Video className="h-4 w-4" />
                    Via Google Meet
                  </div>
                </div>
              </div>

              {/* DATE */}
              <div>
                <h4 className="text-[16px] font-semibold text-[#222222] lg:text-[18px]">
                  Kamis, 22 Mei 2026
                </h4>

                <p className="mt-2 text-[14px] text-[#666666]">
                  13.00 - 15.00 WIB
                </p>

                <p className="mt-1 text-[14px] text-[#666666]">
                  2 jam
                </p>
              </div>

              {/* PRICE + STATUS */}
              <div className="flex flex-col gap-3">
                <h3 className="text-[22px] font-bold text-[#111111] lg:text-[28px]">
                  Rp75.000
                </h3>

                <div
                  className={`
                    inline-flex
                    h-[38px]
                    items-center
                    justify-center
                    rounded-[8px]
                    px-4
                    text-[13px]
                    font-semibold
                    whitespace-nowrap
                    lg:h-[42px]
                    lg:text-[15px]
                    ${item.statusColor}
                  `}
                >
                  {item.status}
                </div>
              </div>

              {/* ACTION */}
              <div className="flex items-center gap-3 lg:justify-end">

                {/* ACCEPT */}
                <button
                  className="
                    h-[42px]
                    rounded-[10px]
                    bg-[#8B5CF6]
                    px-6
                    text-[14px]
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#7C4DF2]
                    active:scale-[0.98]
                    lg:h-[48px]
                    lg:px-8
                    lg:text-[15px]
                  "
                >
                  Terima
                </button>

                {/* REJECT */}
                <button
                  className="
                    h-[42px]
                    rounded-[10px]
                    border
                    border-[#FF3B30]
                    bg-white
                    px-6
                    text-[14px]
                    font-semibold
                    text-[#FF3B30]
                    transition-all
                    duration-300
                    hover:bg-[#FFF1F0]
                    active:scale-[0.98]
                    lg:h-[48px]
                    lg:px-8
                    lg:text-[15px]
                  "
                >
                  Tolak
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}