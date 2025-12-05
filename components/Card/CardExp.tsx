// components/Card/CardExp.tsx
interface CardExpProps {
  title: string
  dates: string
  company: string
  description: string
}

export default function CardExp({ title, dates, company, description }: CardExpProps) {
  return (
    <div className="bg-black border border-white rounded-lg p-6 hover:border-blue-400 transition">
      <h4 className="text-xl font-bold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400 mb-1">{company}</p>
      <p className="text-sm text-gray-400 mb-4">{dates}</p>
      <p className="text-blue-400 whitespace-pre-line">{description}</p>
    </div>
  )
}