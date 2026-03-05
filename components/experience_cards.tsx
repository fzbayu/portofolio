type Props = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

export default function ExperienceCard({
  title,
  company,
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
      </div>
    </div>
  );
}