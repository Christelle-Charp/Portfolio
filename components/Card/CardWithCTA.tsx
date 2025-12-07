import Link from "next/link"

// components/Card/CardWithCTA.tsx
interface CardWithCTAProps {
  title: string
  description: string
  link: string
}

export default function CardWithCTA({ title, description, link }: CardWithCTAProps) {
  return (
    <div className="bg-white text-black p-6 rounded shadow hover:shadow-lg transition">
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p className="mb-4">{description}</p>
      <Link href={link} className="text-blue-400 hover:underline">
        En savoir plus →
      </Link>
    </div>
  )
}