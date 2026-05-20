import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import TutorCard from "@/components/tutor/tutor-card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen">
      <Navbar />

      <section className="bg-[#F4EBFF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 lg:px-24 py-0 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-[#1F1F1F]">
              Belajar Jadi Lebih Mudah Bersama Peervia
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
              Temukan tutor mahasiswa terbaik, atur jadwal fleksibel, dan
              tingkatkan pemahamanmu bersama Peervia.
            </p>

            <Link
  href="/cari-tutor"
  className="mt-10 bg-violet-500 text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center justify-center"
>
  Jelajahi Tutor
</Link>
          </div>

          <div className="flex justify-center">
            <img src="/hero.svg" />
          </div>
        </div>
      </section>

      <section className="bg-[#6EA7F7] py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-3xl"
          />

          <div className="text-white">
            <h2 className="text-5xl font-bold mb-8">Apa kata mereka?</h2>

            <p className="text-2xl leading-10 opacity-95">
              Belajar bareng kakak tingkat bikin materi jadi lebih gampang
              dipahami. Suasananya santai kayak ngobrol sama teman sendiri.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-10">Tutor Terpopuler</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TutorCard
            name="Valencia Kirana"
            major="Desain Komunikasi Visual"
            university="Universitas Indonesia"
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
            price="Rp75.000"
          />

          <TutorCard
            name="Budi Santoso"
            major="Teknik Informatika"
            university="Universitas Indonesia"
            image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            price="Rp65.000"
          />
          <TutorCard
            name="Kevin Wijaya"
            major="Teknik Informatika"
            university="Universitas Indonesia"
            image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
            price="Rp70.000"
          />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-4">
              Siap Tingkatkan Pemahamanmu?
            </h2>

            <p className="text-xl opacity-90">
              Temukan tutor terbaik sekarang juga.
            </p>
          </div>

          <Link
            href="/cari-tutor"
            className="bg-white text-violet-600 px-8 py-4 rounded-2xl font-bold inline-flex items-center justify-center"
          >
            Cari Tutor Sekarang
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
