export default function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/portrait.jpg')" }}
    >
      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Contenu du hero */}
      <div className="relative z-10 flex items-center h-full ml-24 px-12">
        <div>
          <h1 className="text-5xl font-bold mb-4">Hello, je suis Christelle Charpinet</h1>
          <p className="text-2xl">Développeuse web full-stack</p>
        </div>
      </div>
    </section>
  );
}