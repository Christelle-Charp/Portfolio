// components/CVDownload.tsx
export default function CVDownload() {
  return (
    <div className="relative bg-black text-white pl-24 pr-12 flex justify-end">
      <a
        href="/Christelle-Charpinet-CV.pdf" // le fichier doit être dans /public
        download
        className="bg-white text-black px-6 py-3 rounded hover:text-blue-400 transition"
      >
        Télécharger mon CV
      </a>
    </div>
  )
}