import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function CertificateCard({
  title,
  description,
  image, 
}: Props) {
  return (
    <div className="p-6 cursor-pointer hover:scale-105 transition">
      <div className="relative h-80 mb-4 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>

      <div className="flex gap-2 mt-3">
      </div>
    </div>
  );
}