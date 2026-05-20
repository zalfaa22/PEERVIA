import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Link from "next/link";
import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";

export default function CariTutorPage() {
  return (
    <main className="min-h-screen bg-[#F5FAF8]">
      <Navbar />

      <section className="max-w-[1440px] mx-auto px-6 py-10">
        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-8">
          {/* SIDEBAR */}
          <aside className="bg-white rounded-[28px] border border-[#EDEDED] p-7 h-fit shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-9">
              <h2 className="text-[18px] font-semibold text-[#222]">
                Filter Pencarian
              </h2>

              <SlidersHorizontal size={18} className="text-[#444]" />
            </div>

            {/* MATA KULIAH */}
            <div className="mb-9">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  Mata Kuliah
                </h3>

                <span className="text-[#666]">⌃</span>
              </div>

              <input
                placeholder="Cari mata kuliah..."
                className="w-full h-[46px] rounded-[12px] border border-[#E7E7E7] px-4 text-[14px] outline-none"
              />

              <div className="mt-5 space-y-4">
                {[
                  "Pemrogramman",
                  "Statistika",
                  "Fisika",
                  "Kimia",
                  "Matematika",
                ].map((item, index) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-[#555]"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={index === 0}
                      className="accent-violet-500"
                    />

                    {item}
                  </label>
                ))}
              </div>

              <button className="mt-5 text-[15px] font-medium text-violet-500">
                Lihat semua
              </button>
            </div>

            {/* UNIVERSITAS */}
            <div className="mb-9">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  Universitas
                </h3>

                <span className="text-[#666]">⌃</span>
              </div>

              <input
                placeholder="Cari universitas..."
                className="w-full h-[46px] rounded-[12px] border border-[#E7E7E7] px-4 text-[14px] outline-none"
              />

              <div className="mt-5 space-y-4">
                {[
                  "Universitas Indonesia",
                  "Institut Teknologi Bandung",
                  "Universitas Gadjah Mada",
                  "Universitas Airlangga",
                  "Binus University",
                ].map((item, index) => (
                  <label
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-[#555]"
                  >
                    <input
                      type="checkbox"
                      defaultChecked={index === 0}
                      className="accent-violet-500"
                    />

                    {item}
                  </label>
                ))}
              </div>

              <button className="mt-5 text-[15px] font-medium text-violet-500">
                Lihat semua
              </button>
            </div>

            {/* RENTANG HARGA */}
            <div className="mb-9">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  Rentang Harga
                </h3>

                <span className="text-[#666]">⌃</span>
              </div>

              <input type="range" className="w-full accent-violet-500" />

              <div className="flex justify-between mt-2 text-[13px] text-[#999]">
                <span>Rp0</span>
                <span>100</span>
              </div>
            </div>

            {/* RATING */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[15px] font-semibold text-[#222]">
                  Rating
                </h3>

                <span className="text-[#666]">⌃</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {["5", "4+", "3+", "2+"].map((item) => (
                  <button
                    key={item}
                    className="h-[38px] border border-[#DADADA] rounded-[10px] px-4 text-[14px] text-[#444]"
                  >
                    ⭐ {item}
                  </button>
                ))}
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full h-[52px] rounded-[14px] bg-violet-500 text-white text-[16px] font-semibold">
              Terapkan
            </button>
          </aside>

          {/* CONTENT */}
          <div>
            {/* TITLE */}
            <h1 className="text-[54px] leading-none font-bold text-[#1F1F1F]">
              Cari Tutor
            </h1>

            <p className="mt-3 text-[18px] text-[#8A8A8A]">
              Temukan tutor mahasiswa terbaik yang sesuai dengan kebutuhanmu.
            </p>

            {/* SEARCH */}
            <div className="relative mt-8">
              <input
                placeholder="Cari mata kuliah atau keahlian..."
                className="w-full h-[64px] bg-white rounded-full border border-[#EAEAEA] px-7 pr-16 text-[16px] outline-none"
              />

              <Search
                size={22}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-[#999]"
              />
            </div>

            {/* FILTER CHIP */}
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <span className="text-[16px] font-medium text-[#444]">
                Filter aktif :
              </span>

              <div className="h-[38px] bg-violet-100 text-violet-500 rounded-full px-5 flex items-center text-[14px]">
                Pemrogramman ✕
              </div>

              <div className="h-[38px] bg-violet-100 text-violet-500 rounded-full px-5 flex items-center text-[14px]">
                Universitas Indonesia ✕
              </div>

              <button className="ml-auto text-[15px] font-medium text-violet-500">
                Reset filter
              </button>
            </div>

            {/* CONTAINER */}
            <div className="mt-8 bg-white border border-[#EDEDED] rounded-[32px] p-6">
              {/* HEADER */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[18px] font-semibold text-[#222]">
                  24 Tutor ditemukan
                </h2>

                <div className="flex items-center gap-3">
                  <button className="w-[42px] h-[42px] rounded-[12px] border border-[#EAEAEA] flex items-center justify-center">
                    <LayoutGrid size={18} />
                  </button>

                  <button className="w-[42px] h-[42px] rounded-[12px] bg-violet-100 flex items-center justify-center">
                    <List size={18} />
                  </button>
                </div>
              </div>

              {/* CARD */}
              {[1, 2].map((item) => (
                <div
                  key={item}
                  className="border border-[#EFEFEF] rounded-[28px] p-6 mb-6 flex flex-col xl:flex-row gap-6"
                >
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                    className="w-full xl:w-[190px] h-[190px] rounded-[20px] object-cover"
                  />

                  {/* INFO */}
                  <div className="flex-1">
                    <h3 className="text-[24px] font-bold text-[#222]">
                      Valencia Kirana
                    </h3>

                    <div className="flex flex-wrap items-center gap-3 mt-2 text-[15px] text-[#666]">
                      <span>Universitas Indonesia</span>
                      <span>•</span>
                      <span>Desain Komunikasi Visual</span>
                    </div>

                    <div className="flex items-center gap-6 mt-4 text-[14px] text-[#666]">
                      <span>⭐ 4.9 (128 ulasan)</span>
                      <span>142+ sesi selesai</span>
                    </div>

                    <p className="mt-5 text-[15px] leading-8 text-[#666] max-w-2xl">
                      Berpengalaman membantu mahasiswa belajar UI/UX dari dasar
                      hingga portfolio.
                    </p>

                    <div className="flex flex-wrap gap-3 mt-5">
                      {["UI/UX", "Desain Grafis", "Wireframing"].map((tag) => (
                        <span
                          key={tag}
                          className="bg-violet-100 text-violet-500 text-[13px] px-4 py-2 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* ACTION */}
                  <div className="flex flex-col justify-between xl:items-end">
                    <h3 className="text-[30px] font-bold text-violet-500">
                      Rp75.000/sesi
                    </h3>

                    <Link
                      href="/tutor/1"
                      className="h-[46px] px-6 rounded-[14px] bg-violet-500 hover:bg-violet-600 transition text-white text-[14px] font-medium whitespace-nowrap flex items-center justify-center"
                    >
                      Lihat Profil
                    </Link>
                  </div>
                </div>
              ))}

              {/* PAGINATION */}
              <div className="flex justify-center items-center gap-5 pt-4 text-[#666]">
                <button>{"<"}</button>

                <button>1</button>
                <button>...</button>
                <button>5</button>

                <button className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-700">
                  7
                </button>

                <button>8</button>
                <button>...</button>
                <button>50</button>

                <button>{">"}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
