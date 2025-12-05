// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white pl-24 pr-12 py-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        
        {/* Réseaux sociaux avec cercles et contour bleu au hover */}
        <div className="flex gap-6">
          <a
            href="https://github.com/christelle-charp"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-3 transition border-8 border-transparent hover:border-blue-400"
          >
            {/* Icône GitHub */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.6-.7 1.8-1 .1-.7.4-1.1.7-1.3-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.8 11.8 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3.7.9 1.2 2 1.2 3.3 0 4.6-2.7 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/christelle-charpinet-102860137"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-3 transition border-8 border-transparent hover:border-blue-400"
          >
            {/* Icône LinkedIn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.5 1.1 2.5 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.7-2.2 3.6-2.2 3.8 0 4.5 2.5 4.5 5.7V24h-4v-7.9c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z" />
            </svg>
          </a>
        </div>

        {/* Mentions légales */}
        <div className="text-sm text-gray-400">
          © 2025 Christelle Charpinet – Tous droits réservés
        </div>
      </div>
    </footer>
  )
}