import Image from "next/image";

import {
  Users,
  BookOpen,
  Star,
  Wallet,
} from "lucide-react";

import NavbarTutor from "@/components/layout/navbarTutor";

export default function TutorDashboardPage() {
  const stats = [
    {
      title: "Murid Aktif",
      value: "84",
      growth: "12,5%",
      icon: Users,
      bg: "bg-[#EAF2FF]",
      iconColor: "text-[#4D8DFF]",
    },
    {
      title: "Kelas Selesai",
      value: "152",
      growth: "20.3%",
      icon: BookOpen,
      bg: "bg-[#E8FBFC]",
      iconColor: "text-[#1DD3E0]",
    },
    {
      title: "Rating",
      value: "4.9 / 5.0",
      growth: "18,6%",
      icon: Star,
      bg: "bg-[#FFF4E7]",
      iconColor: "text-[#FFA319]",
    },
    {
      title: "Total Pendapatan",
      value: "Rp12.500.000",
      growth: "18,6%",
      icon: Wallet,
      bg: "bg-[#F1E9FF]",
      iconColor: "text-[#8B5CF6]",
    },
  ];

  const schedules = [
    {
      time: "13.00 - 15.00",
      topic: "UI/UX Desain Dasar",
    },
    {
      time: "09.00 - 11.00",
      topic: "Wireframing",
    },
    {
      time: "09.00 - 11.00",
      topic: "Prototyping",
    },
  ];

  const bookings = [
    {
      status: "Menunggu Konfirmasi",
      color: "bg-[#FFD86B] text-[#2E2100]",
    },
    {
      status: "Menunggu Konfirmasi",
      color: "bg-[#FFD86B] text-[#2E2100]",
    },
    {
      status: "Dikonfirmasi",
      color: "bg-[#9BE0B7] text-[#12532D]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA]">

      {/* NAVBAR */}
      <NavbarTutor />

      {/* CONTENT */}
      <section className="mx-auto max-w-[1440px] px-5 py-8 lg:px-10 lg:py-10">

        {/* TITLE */}
        <div className="mb-7 lg:mb-10">
          <h1 className="text-[30px] font-bold leading-tight text-[#222222] lg:text-[42px]">
            Selamat pagi, Valencia!👋
          </h1>

          <p className="mt-1 text-[15px] text-[#9A9A9A] lg:text-[18px]">
            Semangat mengajar hari ini!
          </p>
        </div>

        {/* STATS */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                  rounded-[24px]
                  border
                  border-[#EAEAEA]
                  bg-white
                  p-5
                  shadow-[0_4px_18px_rgba(0,0,0,0.03)]
                "
              >
                <div className="flex items-start gap-4">

                  <div
                    className={`flex h-[58px] w-[58px] items-center justify-center rounded-[14px] ${item.bg}`}
                  >
                    <Icon
                      className={`h-[28px] w-[28px] ${item.iconColor}`}
                    />
                  </div>

                  <div>
                    <p className="text-[14px] text-[#555555] lg:text-[15px]">
                      {item.title}
                    </p>

                    <h3 className="mt-1 text-[30px] font-bold leading-none text-[#111111]">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-[13px] text-[#555555]">
                      <span className="font-medium text-[#3BB273]">
                        ↑ {item.growth}
                      </span>{" "}
                      dari bulan lalu
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.15fr_0.95fr]">

          {/* LEFT */}
          <div className="rounded-[28px] border border-[#ECECEC] bg-white p-5 shadow-[0_4px_18px_rgba(0,0,0,0.03)] lg:p-7">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[20px] font-bold text-[#1E1E1E]">
                Jadwal Hari Ini
              </h2>

              <button className="text-[15px] font-medium text-[#8B5CF6] hover:underline">
                Lihat Semua Jadwal
              </button>
            </div>

            <div className="space-y-5">
              {schedules.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-[52px] min-w-[120px] items-center justify-center rounded-[12px] bg-[#F2FBFC] text-[14px] font-semibold text-[#9AA1A6]">
                      {item.time}
                    </div>

                    <Image
                      src="/logo.jpeg"
                      alt="Tutor"
                      width={70}
                      height={70}
                      className="h-[70px] w-[70px] rounded-[18px] object-cover"
                    />

                    <div>
                      <h3 className="text-[18px] font-bold text-[#1E1E1E]">
                        Valencia Kirana
                      </h3>

                      <p className="mt-1 text-[15px] text-[#666666]">
                        Topik : {item.topic}
                      </p>
                    </div>
                  </div>

                  <button className="h-[42px] rounded-[10px] bg-[#8B5CF6] px-5 text-[15px] font-semibold text-white transition hover:bg-[#7C4DF2]">
                    Mulai Sesi
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-[28px] border border-[#ECECEC] bg-white p-5 shadow-[0_4px_18px_rgba(0,0,0,0.03)] lg:p-7">

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-[20px] font-bold text-[#1E1E1E]">
                Booking Masuk
              </h2>

              <button className="text-[15px] font-medium text-[#8B5CF6] hover:underline">
                Lihat Semua
              </button>
            </div>

            <div className="space-y-6">
              {bookings.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"
                >

                  <div className="flex items-start gap-4">

                    <Image
                      src="/logo.jpeg"
                      alt="Student"
                      width={62}
                      height={62}
                      className="h-[62px] w-[62px] rounded-[18px] object-cover"
                    />

                    <div>
                      <h3 className="text-[17px] font-bold text-[#1E1E1E]">
                        Valencia Kirana
                      </h3>

                      <p className="mt-1 text-[14px] text-[#666666]">
                        Topik : UI/UX Desain Dasar
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-[13px] text-[#666666]">
                        <span>Jumat, 24 Mei 2026</span>
                        <span>16.00 - 18.00</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`flex h-[38px] items-center justify-center rounded-[8px] px-4 text-[14px] font-semibold whitespace-nowrap ${item.color}`}
                  >
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}