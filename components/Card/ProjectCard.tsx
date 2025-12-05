// components/Card/ProjectCard.tsx

import Image from "next/image";

interface ProjectCardProps {
  title: string
  description: string
  image: string
  serverLink: string
  githubLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  serverLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row bg-white text-black rounded-lg overflow-hidden shadow hover:shadow-lg transition mb-12">
      {/* Image à gauche */}
      <div className="md:w-1/2">
        <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu à droite */}
      <div className="md:w-1/2 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-lg mb-6">{description}</p>
        </div>
        <div className="flex gap-6">
          <a
            href={serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Voir le projet →
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            GitHub →
          </a>
        </div>
      </div>
    </div>
  )
}