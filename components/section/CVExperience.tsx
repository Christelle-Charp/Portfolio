import CardExp from "../Card/CardExp";

export default function CVExperience(){
    return(
        <section id="#expro" className="relative bg-black text-white pl-24 pr-12 py-12">
            <h3 className="text-2xl font-semibold mb-6">Expériences Professionnelles</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                <CardExp 
                    title="Développeur Web"
                    company="InnovQube - Full Remote"
                    dates="Sept. à Nov. 2025"
                    description={`Participation au développement et à la maintenance d'une plateforme SaaS\nIntégration de l'API OwnerRez pour automatiser la gestion des réservations\nMise en place et traitement de webhooks pour synchroniser les données en temps réel\nOptimisation de l'UX multilingue et gestion des traductions\nCollaboration en méthode agile\nUtilisation de GitLab, Laravel, Livewire, Filament et Tailwind`}
                />
                <CardExp 
                    title="Chargé de projet"
                    company="Gutenberg - Saint Etienne"
                    dates="août 2010 à janv. 2025"
                    description={`Pilotage simultané de 40 projets\nGestion de budgets clients annuels de 1000€ à 10M€\nFormation de 10 nouveaux collaborateurs en 2 ans\nCréation d'outils Excel pour optimiser les processus administratifs`}
                />
                <CardExp
                    title="Commerciale & Formatrice"
                    company="Telia - Taluyers"
                    dates="sept. 2008 à nov. 2009"
                    description={`Gestion d'un portefeuille de 70 clients\nPropection\nNégociation\nEtude besoins client\nFormation clients\nParamétrage outils\nOptimisation des outils avec développeurs`}
                />
                <CardExp
                    title="Formatrice et technicienne EDI"
                    company="XPO Logistics - Andrézieux-Bouthéon"
                    dates="déc. 2006 à août 2008"
                    description={`Promotion des outils EDI: ouverture de 250 comptes\nParamétrage des applications\nMise en place liaison EDI inter sociétés\nFormation des utilisateurs\nHot Line`}
                />
            </div>
        </section>
    )
}