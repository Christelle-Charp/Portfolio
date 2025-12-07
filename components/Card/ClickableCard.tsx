import Link from "next/link"

// components/Card/ClickableCard.tsx
interface ClickableCardProps {
  title: string
  description: string
  link: string
}

export default function ClickableCard({ title, description, link }: ClickableCardProps) {
  return (
    <Link
      href={link}
      className="block bg-white text-black p-6 rounded shadow hover:shadow-lg transition hover:text-blue-400"
    >
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <p>{description}</p>
    </Link>
  )
}