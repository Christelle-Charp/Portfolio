import CardWithCTA from "../Card/CardWithCTA"
import ClickableCard from "../Card/ClickableCard"

export default function AboutMe() {
  return (
    <section id="about" className="relative bg-black text-white pl-24 pr-12 py-24">
      <div className="max-w-6xl mx-auto">
        {/* Titre principal */}
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        {/* Texte introductif */}
        <p className="text-lg leading-relaxed mb-12">
          Après 25 ans d’expérience dans la gestion de projets, la formation et le support client,
          j’ai choisi de réorienter ma carrière vers le développement web. Curieuse, persévérante
          et passionnée par la résolution de problèmes, j’ai complété une formation intensive
          certifiée RNCP niveau 5 en 2025. Aujourd’hui, je mets à profit mes compétences techniques
          et mon sens de l’analyse pour concevoir des solutions digitales robustes et accessibles.
        </p>

        {/* Hard Skills */}
        <h3 className="text-2xl font-semibold mb-6">Hard Skills</h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Front-End */}
          <div>
            <h4 className="text-xl font-bold mb-4">Front-End</h4>
            <ul className="space-y-2 text-blue-400">
              <li>HTML, CSS, SCSS</li>
              <li>JavaScript, Ajax</li>
              <li>TypeScript</li>
              <li>React, Next</li>
              <li>UI/UX Design (Figma, Miro, Notion)</li>
            </ul>
          </div>

          {/* Back-End */}
          <div>
            <h4 className="text-xl font-bold mb-4">Back-End</h4>
            <ul className="space-y-2 text-blue-400">
              <li>PHP (POO, MVC)</li>
              <li>Symfony, Laravel</li>
              <li>SQL, MySQL</li>
              <li>API REST, Intégration & Webhooks</li>
            </ul>
          </div>

          {/* Outils & Méthodes */}
          <div>
            <h4 className="text-xl font-bold mb-4">Outils & Méthodes</h4>
            <ul className="space-y-2 text-blue-400">
              <li>Git/GitHub (workflow collaboratif)</li>
              <li>Environnements Mac, Windows, Linux</li>
              <li>Méthodes Agiles (Scrum, Sprint)</li>
              <li>IA</li>
              <li>VS Code, Docker, Composer</li>
              <li>Pack Office</li>
            </ul>
          </div>

          {/* Déploiement & Infrastructure */}
            <div>
                <h4 className="text-xl font-bold mb-4">Déploiement & Infrastructure</h4>
                <ul className="space-y-2 text-blue-400">
                    <li>VPS Deployment</li>
                    <li>Nginx Reverse Proxy</li>
                    <li>Docker Orchestration</li>
                    <li>SSL Automation</li>
                    <li>SSH Key Management</li>
                    <li>UFW Firewall Configuration</li>
                </ul>
            </div>

        </div>

        {/* Formation */}
        <h3 className="text-2xl font-semibold mb-6">Formation</h3>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
            <CardWithCTA 
                title="Développeur Web – RNCP Niveau 5"
                description="Jan 2025 – Nov 2025 · Validée avec une moyenne de 91/100"
                link="/cv#formation"
            />
            <CardWithCTA 
                title="Formation continue"
                description="L'amélioration continue · Adapter sa communication · Prise de parole en public"
                link="/cv#formation"
            />
        </div>

        {/* Soft Skills */}
        <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Collaboration & Communication */}
          <div>
            <h4 className="text-xl font-bold mb-4">Collaboration & Communication</h4>
            <ul className="space-y-2 text-blue-400">
              <li>Esprit d&apos;équipe</li>
              <li>Adaptabilité</li>
              <li>Autonomie</li>
            </ul>
          </div>

          {/* Résolution & Organisation */}
          <div>
            <h4 className="text-xl font-bold mb-4">Résolution & Organisation</h4>
            <ul className="space-y-2 text-blue-400">
              <li>Résilience face aux défis</li>
              <li>Résolution de problèmes</li>
              <li>Agilité intellectuelle</li>
              <li>Sens de l&apos;organisation</li>
            </ul>
          </div>

          {/* Curiosité & Apprentissage */}
          <div>
            <h4 className="text-xl font-bold mb-4">Curiosité & Apprentissage</h4>
            <ul className="space-y-2 text-blue-400">
              <li>Curieuse, ouverte aux nouvelles technologies</li>
              <li>Capacité d&apos;apprentissage rapide</li>
              <li>Empathie</li>
            </ul>
          </div>
        </div>

        {/* Domaines de compétences */}
        <h3 className="text-2xl font-semibold mb-6">Domaines de compétences</h3>
        <div className="grid md:grid-cols-4 gap-6">
            <ClickableCard 
                title="Développement Web"
                description="Conception et réalisation d’applications front-end et back-end, intégration API et déploiement."
                link="/cv#expro"
            />
            <ClickableCard 
                title="Gestion de projet"
                description="Planification, coordination et suivi des livrables."
                link="/cv#expro"
            />
            <ClickableCard
                title="Formation"
                description="Accompagnement et transmission des savoirs techniques."
                link="/cv#expro"
            />
            <ClickableCard
                title="Support & SAV"
                description="Assistance technique et relation client."
                link="/cv#expro"
            />
        </div>
      </div>
    </section>
  )
}