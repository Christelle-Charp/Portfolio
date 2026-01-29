// components/Projects.tsx
import ProjectCard from "../Card/ProjectCard"

export default function Projects() {
  return (
    <section id="projects" className="relative bg-black text-white pl-24 pr-12 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Titre principal */}
        <h2 className="text-4xl font-bold mb-12">Mes Projets</h2>

        {/* SECTION FRONT-END */}
        <h3 className="text-2xl font-semibold mb-6 mt-12 border-l-4 border-purple-500 pl-4">
          Front-End
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <ProjectCard
            title="Cutie Panda"
            description="Simulation de vie développée en React avec Vite. Le joueur doit maintenir les statistiques d’un panda tout en gérant les événements du quotidien. Projet d’examen RNCP Développeur Web – note obtenue : 100/100. Images fournies par Webecom."
            image="/cutie-panda.png"
            serverLink="https://cutie-panda.christelle-charpinet.fr"
            githubLink="https://github.com/christelle-charp/cutie-panda"
          />

          <ProjectCard
            title="Frigo Vide"
            description="Application React permettant de trouver des recettes à partir des ingrédients disponibles. Recherche dynamique, gestion des favoris et interface intuitive."
            image="/frigo-vide.png"
            serverLink="https://frigo-vide.christelle-charpinet.fr"
            githubLink="https://github.com/Christelle-Charp/FrigoVide"
          />

          <ProjectCard
            title="4 Elements"
            description="Intégration d’une maquette en HTML, SCSS et JavaScript vanilla. Projet 100% statique comprenant une navigation multi‑pages et un formulaire non connecté. Architecture SCSS structurée et responsive."
            image="/4elements.png"
            serverLink="https://4elements.christelle-charpinet.fr"
            githubLink="https://github.com/Christelle-Charp/4-Elements"
          />

          <ProjectCard
            title="Borne Cinéma"
            description="Application front-end interactive simulant une borne Pathé : catalogue de films, sélection des places, panier snack, tarifs et récapitulatif final. Projet 100% front-end (HTML, SCSS, JS, JSON) sans base de données. Responsive tablette et desktop uniquement."
            image="/borne-cinema.png"
            serverLink="https://borne-cinema.christelle-charpinet.fr"
            githubLink="https://github.com/Christelle-Charp/Borne_Cinema_Pathe"
          />

        </div>

        {/* SECTION BACK-END / DEVOPS */}
        <h3 className="text-2xl font-semibold mb-6 mt-16 border-l-4 border-blue-500 pl-4">
          Back-End & DevOps
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <ProjectCard
            title="API"
            description="API Node.js en production gérant plusieurs routes backend et orchestrant le déploiement automatique de mon portfolio. Réception d’un webhook GitHub, exécution d’un script shell sécurisé et reconstruction du service via Docker Compose."
            image="/api.jpg"
            serverLink="https://api.christelle-charpinet.fr"
            githubLink="https://github.com/Christelle-Charp/api"
          />

          <ProjectCard
            title="Bolonews"
            description="Exercice d’intégration d’un site communautaire avec Symfony : authentification, gestion de contenu et interactions utilisateurs. Projet non responsive, réalisé dans un cadre pédagogique."
            image="/bolonews.png"
            serverLink="https://bolonews.christelle-charpinet.fr"
            githubLink="https://github.com/christelle-charp/bolowens"
          />

          <ProjectCard
            title="MyPizza"
            description="Application PHP permettant de composer une pizza personnalisée via une architecture MVC légère et des appels API en cURL. Gestion du panier en session et mise à jour dynamique des choix. Projet pédagogique centré sur la logique backend ; le style visuel est volontairement minimal et non responsive."
            image="/my-pizza.png"
            serverLink="https://my-pizza.christelle-charpinet.fr"
            githubLink="https://github.com/christelle-charp/MyPizza"
          />

        </div>

      </div>
    </section>
  )
}