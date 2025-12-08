// components/Projects.tsx
import ProjectCard from "../Card/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white pl-24 pr-12 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-4xl font-bold mb-12">Mes Projets</h2>

        {/* Exemple de projets */}
        <ProjectCard
          title="Cutie Panda"
          description="Simulation de vie en React Bienvenue dans Cutie Panda, une application React développée avec Vite.js, qui simule la vie d’un adorable panda. Le joueur doit maintenir ses statistiques en équilibre tout en gérant les contraintes du temps et les aléas de la vie. Projet réalisé dans le cadre de l'examen final de la formation RNCP Développeur Web. Note obtenue: 100/100. Promotion 2025 Images fournies par Webecom."
          image="/cutie-panda.png"
          serverLink="https://cutie-panda.christelle-charpinet.fr"
          githubLink="https://github.com/christelle-charp/cutie-panda"
        />

        <ProjectCard
          title="Bolonews"
          description="Exercice sur un site communautaire construit avec Symfony, incluant authentification et gestion de contenu. Pas de responsive."
          image="/bolonews.png"
          serverLink="https://bolonews.christelle-charpinet.fr"
          githubLink="https://github.com/christelle-charp/bolowens"
        />
      </div>
    </section>
  )
}