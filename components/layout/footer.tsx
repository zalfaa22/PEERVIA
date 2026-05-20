export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-[#1A1B4B] mb-4">
            peervia
          </h2>
          <p className="text-gray-500 leading-7 max-w-sm">
            Platform bimbingan belajar antar mahasiswa aktif yang aman,
            fleksibel, dan terpercaya.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Informasi</h3>
          <div className="space-y-3 text-gray-500">
            <p>Tentang Kami</p>
            <p>FAQ</p>
            <p>Kebijakan Privasi</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Bantuan</h3>
          <div className="space-y-3 text-gray-500">
            <p>Pusat Bantuan</p>
            <p>Hubungi Kami</p>
            <p>Laporkan Masalah</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Kontak</h3>
          <div className="space-y-3 text-gray-500">
            <p>hello@peervia.id</p>
            <p>0812-3456-7890</p>
            <p>Malang, Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
}