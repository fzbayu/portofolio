import { FaInstagram } from "react-icons/fa";

type Props = {
  title: string;
  company: string;
  instagram?: string;
  period: string;
  description: string[];
};

export default function ExperienceCard({
  title,
  company,
  instagram,
  period,
  description,
}: Props) {
  return (
    <div className="flex gap-20 items-center mt-12">

      <div>
        <h3 className="font-bold text-2xl">
          {company} ({period})
        </h3>
        <p className="text-sm mt-2 mb-4">{title}</p>
        <ul className="list-disc list-inside mt-4 font-extralight text-lg text-justify">
            {description.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center mt-3 text-xl hover:text-orange-500 transition duration-300"
          >
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
}