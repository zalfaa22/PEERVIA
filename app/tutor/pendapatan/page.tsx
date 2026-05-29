// app/pendapatan/page.tsx
"use client";

import NavbarTutor from "@/components/layout/navbarTutor";
import Footer from "@/components/layout/footer";
import {
  Wallet,
  BookOpen,
  Users,
  Star,
  CalendarDays,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  WalletCards,
  Music2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const stats = [
  {
    title: "Total Pendapatan",
    value: "Rp12.500.000",
    growth: "18,6%",
    icon: Wallet,
    iconBg: "bg-[#EFE4FF]",
    iconColor: "text-[#8B5CF6]",
  },
  {
    title: "Kelas Selesai",
    value: "152",
    growth: "20,3%",
    icon: BookOpen,
    iconBg: "bg-[#DDFBFF]",
    iconColor: "text-[#10C9D8]",
  },
  {
    title: "Murid Aktif",
    value: "84",
    growth: "12,5%",
    icon: Users,
    iconBg: "bg-[#E5F0FF]",
    iconColor: "text-[#4B8DF8]",
  },
  {
    title: "Rating",
    value: "4.9 / 5.0",
    growth: "18,6%",
    icon: Star,
    iconBg: "bg-[#FFF3DE]",
    iconColor: "text-[#FF9B05]",
  },
];

const transactions = [
  {
    student: "Andi Pratama",
    class: "Pemogramanan Web",
    date: "30 Mei 2025",
    status: "Berhasil",
    amount: "Rp350.000,00",
  },
  {
    student: "Kirana",
    class: "UI/UX Design",
    date: "30 Mei 2025",
    status: "Berhasil",
    amount: "Rp250.000,00",
  },
  {
    student: "Siti Nurhaliza",
    class: "Design Grafis",
    date: "29 Mei 2025",
    status: "Pending",
    amount: "Rp300.000,00",
  },
  {
    student: "Rizky Maulana",
    class: "Struktur Data",
    date: "28 Mei 2025",
    status: "Berhasil",
    amount: "Rp2.000.000,00",
  },
  {
    student: "Retno Wulan",
    class: "SQL",
    date: "27 Mei 2025",
    status: "Berhasil",
    amount: "Rp250.000,00",
  },
  {
    student: "Elshaday",
    class: "Pemogramanan Web",
    date: "25 Mei 2025",
    status: "Berhasil",
    amount: "Rp300.000,00",
  },
];

export default function PendapatanPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] font-[Poppins] text-[#1D1D1D]">
      <NavbarTutor />

      {/* CONTENT */}
      <section className="mx-auto w-full max-w-[1320px] px-4 pb-20 pt-5 lg:px-6">
        {/* TOP CARD */}
        <div className="rounded-[18px] border border-[#D7E3E5] bg-[#EAF6F7] p-5 shadow-[0_3px_8px_rgba(0,0,0,0.08)]">
          {/* HEADER */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <h1 className="text-[28px] font-semibold leading-none lg:text-[34px]">
                Pendapatan Saya
              </h1>

              <p className="mt-3 text-[14px] text-[#5B5B5B] lg:text-[16px]">
                Kelola dan pantau pendapatan dari kelas yang Anda ajar
              </p>
            </div>

            {/* DATE */}
            <button className="flex h-[48px] items-center gap-3 rounded-[14px] border border-[#D8D8D8] bg-white px-4 text-[14px] font-medium transition hover:bg-[#F7F7F7]">
              <CalendarDays className="h-5 w-5" />
              1 - 31 Mei 2026
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>

          {/* STATS */}
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[18px] border border-[#D7D7D7] bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-[52px] w-[52px] items-center justify-center rounded-[14px] ${item.iconBg}`}
                    >
                      <Icon className={`h-7 w-7 ${item.iconColor}`} />
                    </div>

                    <div>
                      <p className="text-[14px] text-[#555]">
                        {item.title}
                      </p>

                      <h3 className="mt-1 text-[22px] font-semibold">
                        {item.value}
                      </h3>

                      <p className="mt-1 text-[12px] text-[#5A5A5A]">
                        <span className="font-medium text-[#18B56A]">
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
        </div>

        {/* SALDO */}
        <div className="mt-8 rounded-[18px] border border-[#D9D9D9] bg-white p-5 shadow-[0_3px_8px_rgba(0,0,0,0.08)] lg:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[24px] font-semibold lg:text-[30px]">
                Saldo Tersedia
              </h2>

              <h3 className="mt-2 text-[42px] font-bold leading-none text-[#8B5CF6] lg:text-[56px]">
                Rp8.750.000
              </h3>

              <p className="mt-4 text-[16px] text-[#6A6A6A]">
                Saldo dapat ditarik ke rekening anda
              </p>
            </div>

            <button className="flex h-[68px] w-full items-center justify-center gap-4 rounded-[16px] bg-[#8B5CF6] px-8 text-[18px] font-medium text-white transition hover:bg-[#7B4CF0] lg:w-[260px]">
              <WalletCards className="h-7 w-7" />
              Tarik Dana
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="mt-8 rounded-[18px] border border-[#D7E3E5] bg-[#EAF6F7] p-5 shadow-[0_3px_8px_rgba(0,0,0,0.08)]">
          <h2 className="mb-6 text-[24px] font-semibold lg:text-[32px]">
            Riwayat Transaksi
          </h2>

          {/* TABLE WRAPPER */}
          <div className="overflow-x-auto rounded-[14px] border border-[#CFCFCF] bg-white">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-[#F3F3F3]">
                  <th className="border-b border-r border-[#D0D0D0] px-5 py-4 text-left text-[15px] font-semibold">
                    Nama Murid
                  </th>

                  <th className="border-b border-r border-[#D0D0D0] px-5 py-4 text-left text-[15px] font-semibold">
                    Kelas
                  </th>

                  <th className="border-b border-r border-[#D0D0D0] px-5 py-4 text-left text-[15px] font-semibold">
                    Tanggal
                  </th>

                  <th className="border-b border-r border-[#D0D0D0] px-5 py-4 text-left text-[15px] font-semibold">
                    Status
                  </th>

                  <th className="border-b px-5 py-4 text-left text-[15px] font-semibold">
                    Jumlah
                  </th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item, index) => (
                  <tr
                    key={index}
                    className="transition hover:bg-[#F8F8F8]"
                  >
                    <td className="border-b border-r border-[#D9D9D9] px-5 py-4 text-[15px]">
                      {item.student}
                    </td>

                    <td className="border-b border-r border-[#D9D9D9] px-5 py-4 text-[15px]">
                      {item.class}
                    </td>

                    <td className="border-b border-r border-[#D9D9D9] px-5 py-4 text-[15px]">
                      {item.date}
                    </td>

                    <td className="border-b border-r border-[#D9D9D9] px-5 py-4">
                      <span
                        className={`rounded-lg px-3 py-1 text-[14px] font-medium ${
                          item.status === "Berhasil"
                            ? "bg-[#E9F8EE] text-[#19A55B]"
                            : "bg-[#FFF2DE] text-[#FF9900]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="border-b border-[#D9D9D9] px-5 py-4 text-[15px]">
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-[13px] text-[#5B5B5B]">
            <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E1E1E1] bg-white hover:bg-[#F5F5F5]">
              <ChevronLeft className="h-4 w-4" />
            </button>

            <button className="h-8 w-8 rounded-md hover:bg-white">
              1
            </button>

            <span>...</span>

            <button className="h-8 w-8 rounded-md hover:bg-white">
              5
            </button>

            <button className="h-8 w-8 rounded-md bg-white text-[#10B4C7]">
              6
            </button>

            <button className="h-8 w-8 rounded-md hover:bg-white">
              7
            </button>

            <span>...</span>

            <button className="h-8 w-8 rounded-md hover:bg-white">
              50
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E1E1E1] bg-white hover:bg-[#F5F5F5]">
              <ChevronRight className="h-4 w-4" />
            </button>

            <span className="ml-2">Go to</span>

            <input className="h-8 w-[46px] rounded-md border border-[#DADADA] bg-white px-2 text-center outline-none" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}