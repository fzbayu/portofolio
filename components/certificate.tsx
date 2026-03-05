import Image from "next/image";

type Props = {
  title: string;
  issuer: string;
  date: string;
  image: string;
};

export default function CertificateCard({ title, issuer, date, image }: Props) {
  return (
    <div className="flex flex-col bg-white border border-gray-200 overflow-hidden">
      {/* Container Gambar - Rasio 4:3 */}
      <div className="relative aspect-[4/3] w-full bg-gray-50 border-b border-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>

      {/* Konten Teks */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-[11px] font-semibold text-orange-500 uppercase tracking-wide mb-1">
          {issuer}
        </p>
        
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
          {title}
        </h3>
        
        <p className="text-sm text-gray-500 mt-auto">
          {date}
        </p>
      </div>
    </div>
  );
}