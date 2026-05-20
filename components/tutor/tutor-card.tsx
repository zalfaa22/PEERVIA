interface TutorCardProps {
  name: string;
  major: string;
  university: string;
  image: string;
  price: string;
}

export default function TutorCard({
  name,
  major,
  university,
  image,
  price,
}: TutorCardProps) {
  return (
    <div className="bg-white rounded-3xl border p-4 shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="w-full h-72 object-cover rounded-2xl"
      />

      <div className="mt-5 space-y-2">
        <h3 className="text-2xl font-bold">{name}</h3>

        <p className="font-semibold text-gray-700">{major}</p>

        <p className="text-gray-500">{university}</p>

        <div className="flex gap-2 flex-wrap pt-2">
          <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm">
            UI/UX
          </span>
          <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full text-sm">
            Wireframing
          </span>
        </div>

        <div className="flex items-center justify-between pt-4">
          <span className="text-gray-500 text-sm">142+ sesi selesai</span>

          <span className="font-bold text-violet-600">
            {price}/sesi
          </span>
        </div>
      </div>
    </div>
  );
}