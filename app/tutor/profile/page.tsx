"use client";

import { useState } from "react";
import Image from "next/image";
import NavbarTutor from "@/components/layout/navbarTutor";
import Footer from "@/components/layout/footer";

import {
  Calendar,
  Clock3,
  ShieldCheck,
  Star,
  Users,
  Check,
  Pencil,
} from "lucide-react";

export default function TutorDetailPage() {
  const [name, setName] = useState("Valencia Kirana");
  const [bio, setBio] = useState(
    "Mahasiswa DKV UI yang berpengalaman membantu mahasiswa belajar UI/UX dari dasar hingga portfolio dengan cara yang santai, interaktif, dan mudah dipahami."
  );

  const [about, setAbout] = useState(
    "Hai! Aku Valencia, Aku suka bantu mahasiswa yang masih bingung mulai belajar UI/UX dari mana. Biasanya aku ngajarin dari dasar banget sampai cara bikin portfolio dan case study yang menarik. Belajarnya santai, interaktif, dan banyak praktik biar lebih gampang dipahami ✨"
  );

  const [experience, setExperience] = useState([
    "Tutor mata kuliah Basis Data untuk adik tingkat (2023 - sekarang)",
    "Asisten praktikum Struktur Data (2023)",
    "Mengajar lebih dari 200 sesi dengan berbagai mata kuliah",
  ]);

  const [editingName, setEditingName] = useState(false);
  const [editingBio, setEditingBio] = useState(false);
  const [editingAbout, setEditingAbout] = useState(false);
  const [editingExperience, setEditingExperience] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFAFA]">
      <NavbarTutor />

      <section className="mx-auto max-w-[1280px] px-4 py-8 lg:px-6 lg:py-12">
        {/* TOP */}
        <div className="rounded-[28px] border border-[#ECECEC] bg-white p-5 lg:p-8">
          <div className="flex flex-col gap-8 xl:flex-row">
            {/* IMAGE */}
            <div className="mx-auto xl:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800"
                alt="Tutor"
                width={300}
                height={360}
                className="h-[320px] w-[260px] rounded-[24px] object-cover lg:h-[360px] lg:w-[300px]"
              />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              {/* NAME */}
              <div className="flex items-start gap-3">
                <div className="flex-1">
                  {editingName ? (
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-b border-[#DDD] pb-2 text-[34px] font-bold outline-none lg:text-[48px]"
                    />
                  ) : (
                    <h1 className="text-[34px] font-bold leading-none text-[#1F1F1F] lg:text-[48px]">
                      {name}
                    </h1>
                  )}
                </div>

                <button
                  onClick={() => setEditingName(!editingName)}
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC83D] transition hover:scale-105"
                >
                  <Pencil size={18} className="text-black" />
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-[15px] text-[#666] lg:text-[16px]">
                <span>Universitas Indonesia</span>
                <span>•</span>
                <span>Desain Komunikasi Visual</span>
              </div>

              {/* RATING */}
              <div className="mt-6 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <Star
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                  <span className="text-[18px] font-semibold">4.9</span>

                  <span className="text-[15px] text-[#888]">
                    (128 ulasan)
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[15px] text-[#666]">
                  <Users size={16} />
                  142+ Sesi Selesai
                </div>
              </div>

              {/* BIO */}
              <div className="mt-7 flex items-start gap-3">
                <div className="flex-1">
                  {editingBio ? (
                    <textarea
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className="min-h-[120px] w-full rounded-[16px] border border-[#DDD] p-4 text-[15px] leading-8 outline-none lg:text-[16px]"
                    />
                  ) : (
                    <p className="max-w-[700px] text-[15px] leading-8 text-[#666] lg:text-[16px] lg:leading-9">
                      {bio}
                    </p>
                  )}
                </div>

                {/* PENSIL ORANGE SESUAI GAMBAR */}
                <button
                  onClick={() => setEditingBio(!editingBio)}
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFC83D] transition hover:scale-105"
                >
                  <Pencil size={18} className="text-black" />
                </button>
              </div>

              {/* TAG */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                {["UI/UX", "Desain Grafis", "Wireframing"].map((tag) => (
                  <span
                    key={tag}
                    className="flex h-[38px] items-center rounded-full bg-[#F1E8FF] px-5 text-[14px] text-violet-500"
                  >
                    {tag}
                  </span>
                ))}

                {/* PENSIL ORANGE DI SEBELAH TAG */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFC83D] transition hover:scale-105">
                  <Pencil size={18} className="text-black" />
                </button>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="w-full shrink-0 xl:w-[300px]">
              <div className="rounded-[18px] bg-[#F4FCFB] p-6">
                <h3 className="text-[15px] font-semibold leading-7 text-[#333]">
                  Semua sesi dilakukan 100% di platform Peervia
                </h3>

                <div className="mt-5 space-y-3">
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
                      <Check size={18} className="text-green-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-[260px_1fr_350px]">
          {/* LEFT */}
          <div className="h-fit rounded-[28px] border border-[#ECECEC] bg-white p-7">
            <div className="space-y-9">
              <div className="flex gap-4">
                <Clock3 className="mt-1 text-violet-500" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    Respon rata-rata
                  </h3>

                  <p className="mt-1 text-[15px] text-[#888]">
                    &lt; 10 menit
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="mt-1 text-violet-500" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    200+ sesi selesai
                  </h3>

                  <p className="mt-1 text-[15px] text-[#888]">
                    bersama 120+ mahasiswa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <ShieldCheck className="mt-1 text-violet-500" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    Tutor terverifikasi
                  </h3>

                  <p className="mt-1 text-[15px] text-[#888]">
                    Identitas & akademik terverifikasi
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Calendar className="mt-1 text-violet-500" size={20} />

                <div>
                  <h3 className="text-[16px] font-semibold">
                    Bergabung di peervia
                  </h3>

                  <p className="mt-1 text-[15px] text-[#888]">
                    Februari 2025
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="rounded-[28px] border border-[#ECECEC] bg-white p-6 lg:p-7">
            {/* TAB */}
            <div className="flex flex-wrap items-center gap-8 border-b border-[#F0F0F0] pb-4">
              <button className="border-b-2 border-violet-500 pb-4 text-[15px] font-semibold text-[#222]">
                Tentang Saya
              </button>

              <button className="text-[15px] text-[#666]">
                Mata Kuliah
              </button>

              <button className="text-[15px] text-[#666]">
                Ulasan (156)
              </button>

              <button className="text-[15px] text-[#666]">Jadwal</button>
            </div>

            {/* ABOUT */}
            <div className="mt-7">
              <div className="flex items-center gap-3">
                <h2 className="text-[28px] font-bold text-[#222] lg:text-[32px]">
                  Tentang Saya
                </h2>

                {/* PENSIL ORANGE */}
                <button
                  onClick={() => setEditingAbout(!editingAbout)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFC83D] transition hover:scale-105"
                >
                  <Pencil size={18} className="text-black" />
                </button>
              </div>

              {editingAbout ? (
                <textarea
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  className="mt-5 min-h-[180px] w-full rounded-[18px] border border-[#DDD] p-5 text-[15px] leading-8 outline-none"
                />
              ) : (
                <p className="mt-5 text-[15px] leading-8 text-[#666] lg:text-[16px] lg:leading-9">
                  {about}
                </p>
              )}

              {/* INFO BOX */}
              <div className="mt-7 grid grid-cols-1 gap-5 rounded-[18px] bg-[#F4ECFF] p-6 sm:grid-cols-3">
                <div>
                  <p className="text-[14px] text-[#666]">IPK</p>

                  <h3 className="mt-2 text-[18px] font-semibold">
                    3.8 / 4.00
                  </h3>
                </div>

                <div className="sm:border-x sm:border-[#D6C8F6] sm:px-6">
                  <p className="text-[14px] text-[#666]">Semester</p>

                  <h3 className="mt-2 text-[18px] font-semibold">5</h3>
                </div>

                <div>
                  <p className="text-[14px] text-[#666]">Asal</p>

                  <h3 className="mt-2 text-[18px] font-semibold">
                    Malang, Jawa Timur
                  </h3>
                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="mt-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-[26px] font-bold text-[#222] lg:text-[28px]">
                    Pengalaman Mengajar
                  </h3>

                  {/* PENSIL ORANGE */}
                  <button
                    onClick={() =>
                      setEditingExperience(!editingExperience)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFC83D] transition hover:scale-105"
                  >
                    <Pencil size={18} className="text-black" />
                  </button>
                </div>

                {editingExperience ? (
                  <textarea
                    value={experience.join("\n")}
                    onChange={(e) =>
                      setExperience(e.target.value.split("\n"))
                    }
                    className="mt-5 min-h-[160px] w-full rounded-[18px] border border-[#DDD] p-5 text-[15px] leading-8 outline-none"
                  />
                ) : (
                  <div className="mt-5 space-y-4 text-[16px] text-[#555]">
                    {experience.map((item, index) => (
                      <div key={index}>✓ {item}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="h-fit rounded-[28px] border border-[#ECECEC] bg-white p-7">
            <div className="flex items-center justify-between">
              <h2 className="text-[18px] font-semibold">
                Jadwal tersedia
              </h2>

              <button className="text-[14px] text-violet-500">
                Atur Jadwal
              </button>
            </div>

            <div className="mt-7 space-y-4">
              {[
                ["Hari ini", "19.00 - 22.00"],
                ["Besok", "09.00 - 12.00", "14.00 - 16.00"],
                ["Kamis, 22 Mei", "13.00 - 15.00"],
                ["Kamis, 23 Mei", "08.00 - 10.00", "12.00 - 14.00"],
              ].map((item, index) => (
                <div key={index} className="grid grid-cols-3 gap-3">
                  <div className="col-span-1 flex h-[52px] items-center rounded-[14px] bg-[#F4FBFB] px-4 text-[14px] text-[#666]">
                    {item[0]}
                  </div>

                  {item.slice(1).map((time, i) => (
                    <div
                      key={i}
                      className="flex h-[52px] items-center justify-center rounded-[14px] bg-[#F4FBFB] text-[14px] text-[#666]"
                    >
                      {time}
                    </div>
                  ))}
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