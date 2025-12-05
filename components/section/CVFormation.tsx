import CardFormation from "../Card/CardFormation"

export default function CVFormation() {
    return(
        <section id="#formation" className="relative bg-black text-white pl-24 pr-12 py-12">
            <h3 className="text-2xl font-semibold mb-6">Diplomes</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <CardFormation
                    title="Développeur Web – RNCP Niveau 5"
                    dates="Jan 2025 – Nov 2025"
                    description="Formation intensive en développement web et conception d'applications validée avec une moyenne de 91/100, comprenant 4 modules: UI/UX, Front-End, Back-End, Frameworks Réact et Symfony. Réalisée chez Webecom à Saint Etienne."
                />
                <CardFormation
                    title="BTS Commerce International"
                    dates="1998 – 2000"
                    description="BTS en Commerce International au lycée Saint-Louis à Saint Etienne."
                />
            </div>
            <h3 className="text-2xl font-semibold mb-6">Formation continue</h3>
            <ul className="space-y-4 text-blue-400 mb-12">
                <li>L&apos;amélioration continue</li>
                <li>Prise de parole en public</li>
                <li>Adapter sa communication</li>
                <li>La relation client</li>
                <li>Négociation Achat</li>
                <li>Gestion du stress et du temps</li>
            </ul>
        </section>
    )
}