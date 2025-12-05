# Portfolio – Christelle Charpinet

Bienvenue sur mon portfolio !  
Je suis **Christelle Charpinet**, développeuse web full-stack en reconversion, spécialisée en **React, Next.js, Tailwind CSS** , en PHP avec ou sans framework et en intégration d'API.  
Ce projet présente mes compétences, mon parcours et mes réalisations.

---

## 🚀 Stack technique

- **Framework** : Next.js (React + App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS
- **Outils** : Docker, Nginx, VPS
- **UI/UX** : Figma, design moderne et accessible

---

## 📂 Structure du projet

PORTEFOLIO/
|_ app/ # Pages et layout principal (Next.js App Router)
| |_ favicon.ico # Favicon du site
| |_ globals.css # Styles globaux
| |_ layout.tsx # Layout racine
| |_ page.tsx # Page d’accueil
| |\_cv/
| |\_page.tsx # Page CV
|
|_ components/
| |_ Card/ # Composants de type carte (expérience, formation, projets, CTA)
| | |_ CardExp.tsx # Carte pour une expérience professionnelle
| | |_ CardFormation.tsx # Carte pour une formation
| | |_ CardWithCTA.tsx # Carte avec bouton d’appel à l’action
| | |_ ClickableCard.tsx # Carte cliquable générique
| | |_ ProjectCard.tsx # Carte dédiée à un projet
| |
| |_ section/ # Sections principales du portfolio
| | |_ AboutMe.tsx # Section "À propos de moi"
| | |_ Hero.tsx # Section d’introduction / accroche
| | |_ Projects.tsx # Section des projets
| | |_ Contact.tsx # Section de contact
| | |_ CVExperience.tsx # Bloc listant les expériences pro
| | |_ CVFormation.tsx # Bloc listant les formations
| | |_ CVAutre.tsx # Bloc pour autres infos du CV
| |
| |_ Header.tsx # En-tête du site
| |_ Footer.tsx # Pied de page
| |_ Sidebar.tsx # Barre latérale fixe
| |_ BackToTop.tsx # Bouton retour en haut de page
| |_ ContactForm.tsx # Formulaire de contact (Web3Forms)
| |_ CVDownload.tsx # Bouton ou lien de téléchargement du CV
|
|_ public/ # Assets statiques
| |_ Christelle-Charpinet-CV.pdf
| |_ cutie-panda.png
| |_ portrait.jpg
|
|_ .env.local # Variables d’environnement (non versionné)
|_ .gitignore # Fichiers ignorés par Git
|_ eslint.config.mjs # Configuration ESLint
|_ next.config.ts # Configuration Next.js
|_ package.json # Dépendances et scripts du projet
|_ package-lock.json # Versions figées des dépendances
|_ postcss.config.mjs # Configuration PostCSS
|_ tailwind.config.js # Configuration Tailwind CSS
|_ tsconfig.json # Configuration TypeScript
|_ README.md # Documentation du projet

---

## ⚙️ Installation & lancement

Clonez le projet et installez les dépendances :

```bash
git clone https://github.com/christelle-charp/Portfolio.git
cd portfolio-christelle
npm install
```

Lancer le serveur de développement:

```bash
npm run dev
```

---

📬 Contact et lien

- LinkedIn : Christelle Charpinet
- CV : disponible dans /public/Christelle-Charpinet-CV.pdf
- www.christelle-charpinet.fr

---

👩‍💻 Auteur

**Christelle Charpinet**
