import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Calendar, Clock3, ShieldCheck, Star, Users } from "lucide-react";

export default function TutorDetailPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <Navbar />

      <section className="max-w-[1280px] mx-auto px-6 py-12">
        {/* TOP */}
        <div className="bg-white border border-[#ECECEC] rounded-[28px] p-8 flex flex-col xl:flex-row gap-10">
          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            className="w-full xl:w-[300px] h-[360px] rounded-[24px] object-cover shrink-0"
          />

          {/* CONTENT */}
          <div className="flex-1">
            <h1 className="text-[48px] leading-none font-bold text-[#1F1F1F]">
              Valencia Kirana
            </h1>

            <div className="flex items-center gap-4 mt-4 text-[16px] text-[#666]">
              <span>Universitas Indonesia</span>
              <span>•</span>
              <span>Desain Komunikasi Visual</span>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-8 mt-6">
              <div className="flex items-center gap-2">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />

                <span className="text-[18px] font-semibold">4.9</span>

                <span className="text-[#888] text-[15px]">(128 ulasan)</span>
              </div>

              <div className="flex items-center gap-2 text-[15px] text-[#666]">
                <Users size={16} />
                142+ Sesi Selesai
              </div>
            </div>

            {/* BIO */}
            <p className="mt-7 text-[16px] leading-9 text-[#666] max-w-[700px]">
              Mahasiswa DKV UI yang berpengalaman membantu mahasiswa belajar
              UI/UX dari dasar hingga portfolio dengan cara yang santai,
              interaktif, dan mudah dipahami.
            </p>

            {/* TAG */}
            <div className="flex flex-wrap gap-3 mt-7">
              {["UI/UX", "Desain Grafis", "Wireframing"].map((tag) => (
                <span
                  key={tag}
                  className="h-[38px] px-5 rounded-full bg-[#F1E8FF] text-violet-500 text-[14px] flex items-center"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="w-full xl:w-[300px] shrink-0">
            <button className="w-full h-[58px] rounded-[14px] bg-violet-500 text-white text-[18px] font-semibold">
              Pesan Sesi
            </button>

            <button className="w-full h-[58px] rounded-[14px] bg-[#F3ECFF] text-violet-500 text-[18px] font-semibold mt-4">
              Chat Tutor
            </button>

            {/* FEATURES */}
            <div className="bg-[#F4FCFB] rounded-[18px] p-6 mt-6">
              <h3 className="text-[15px] font-semibold text-[#333] leading-7">
                Semua sesi dilakukan 100% di platform Peervia
              </h3>

              <div className="space-y-3 mt-5">
                {[
                  "Video Call HD",
                  "Live Whiteboard",
                  "Screen Sharing",
                  "File Sharing",
                  "Session Recording",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-[15px] text-[#555]"
                  >
                    <ShieldCheck size={18} className="text-green-500" />

                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="grid grid-cols-1 xl:grid-cols-[260px_1fr_350px] gap-6 mt-7">
          {/* LEFT INFO */}
          <div className="bg-white border border-[#ECECEC] rounded-[28px] p-7 h-fit">
            <div className="space-y-9">
              <div className="flex gap-4">
                <Clock3 className="text-violet-500 mt-1" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    Respon rata-rata
                  </h3>

                  <p className="text-[15px] text-[#888] mt-1">&lt; 10 menit</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="text-violet-500 mt-1" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    200+ sesi selesai
                  </h3>

                  <p className="text-[15px] text-[#888] mt-1">
                    bersama 120+ mahasiswa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="text-violet-500 mt-1" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    Tutor terverifikasi
                  </h3>

                  <p className="text-[15px] text-[#888] mt-1">
                    Identitas & akademik terverifikasi
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="text-violet-500 mt-1" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    Bergabung di peervia
                  </h3>

                  <p className="text-[15px] text-[#888] mt-1">Februari 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="bg-white border border-[#ECECEC] rounded-[28px] p-7">
            {/* TAB */}
            <div className="flex items-center gap-10 border-b border-[#F0F0F0] pb-4">
              <button className="text-[15px] font-semibold text-[#222] border-b-2 border-violet-500 pb-4 -mb-4">
                Tentang Saya
              </button>

              <button className="text-[15px] text-[#666]">Mata Kuliah</button>

              <button className="text-[15px] text-[#666]">Ulasan (156)</button>
            </div>

            {/* CONTENT */}
            <div className="mt-7">
              <h2 className="text-[32px] font-bold text-[#222]">
                Tentang Saya
              </h2>

              <p className="mt-5 text-[16px] leading-9 text-[#666]">
                Hai! Aku Valencia, Aku suka bantu mahasiswa yang masih bingung
                mulai belajar UI/UX dari mana. Biasanya aku ngajarin dari dasar
                banget sampai cara bikin portfolio dan case study yang menarik.
                Belajarnya santai, interaktif, dan banyak praktik biar lebih
                gampang dipahami ✨
              </p>

              {/* INFO BOX */}
              <div className="bg-[#F4ECFF] rounded-[18px] p-6 mt-7 grid grid-cols-3 gap-5">
                <div>
                  <p className="text-[14px] text-[#666]">IPK</p>

                  <h3 className="text-[18px] font-semibold mt-2">3.8 / 4.00</h3>
                </div>

                <div>
                  <p className="text-[14px] text-[#666]">Semester</p>

                  <h3 className="text-[18px] font-semibold mt-2">5</h3>
                </div>

                <div>
                  <p className="text-[14px] text-[#666]">Asal</p>

                  <h3 className="text-[18px] font-semibold mt-2">
                    Malang, Jawa Timur
                  </h3>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="mt-8">
                <h3 className="text-[28px] font-bold text-[#222]">
                  Pengalaman Mengajar
                </h3>

                <div className="space-y-4 mt-5 text-[16px] text-[#555]">
                  <div>
                    ✓ Tutor mata kuliah Basis Data untuk adik tingkat (2023 -
                    sekarang)
                  </div>

                  <div>✓ Asisten praktikum Struktur Data (2023)</div>

                  <div>
                    ✓ Mengajar lebih dari 200 sesi dengan berbagai mata kuliah
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCHEDULE */}
          <div className="bg-white border border-[#ECECEC] rounded-[28px] p-7 h-fit">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-semibold">Jadwal tersedia</h2>

              <button className="text-violet-500 text-[14px]">
                lihat kalender
              </button>
            </div>

            <div className="space-y-4 mt-7">
              {[
                ["Hari ini", "19.00 - 22.00"],
                ["Besok", "09.00 - 12.00"],
                ["Kamis, 22 Mei", "13.00 - 15.00"],
                ["Kamis, 23 Mei", "08.00 - 10.00"],
              ].map((item) => (
                <div key={item[0]} className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F4FBFB] h-[52px] rounded-[14px] flex items-center px-4 text-[15px] text-[#666]">
                    {item[0]}
                  </div>

                  <div className="bg-[#F4FBFB] h-[52px] rounded-[14px] flex items-center justify-center text-[15px] text-[#666]">
                    {item[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
