"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fond élégant avec dégradé et texture technique */}
      <div className="absolute inset-0 z-0">
        {/* Dégradé principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900"></div>

        {/* Texture technique subtile */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              radial-gradient(circle at 20% 20%, rgba(201,165,104,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(201,165,104,0.1) 0%, transparent 50%)
            `,
            backgroundSize: "60px 60px, 200px 200px, 200px 200px",
          }}
        ></div>

        {/* Overlay transparent pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Contenu centré */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Nous transformons vos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9A568] to-[#E6C78A]">
              ambitions architecturales
            </span>{" "}
            en réalités structurelles
          </h1>

          {/* Sous-texte */}
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed text-justify">
              Bureau d'études spécialisé en structure et béton armé, intervenant en construction neuve et
              réhabilitation, de la conception à l'exécution. Notre expertise technique reconnue depuis plus de 15 ans
              vous accompagne dans la réalisation de vos projets les plus ambitieux.
            </p>
          </div>
        </div>
      </div>

      {/* Indicateur de scroll minimaliste */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
