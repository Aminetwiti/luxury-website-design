"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - très léger en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('/images/Hero_Engineering_Excellence.jpg')",
          }}
        />
      </div>

      {/* Fond dégradé bleu foncé/gris anthracite avec texture technique */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900">
        {/* Texture technique subtile */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              radial-gradient(circle at 25% 25%, rgba(201,165,104,0.1) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(201,165,104,0.1) 2px, transparent 2px)
            `,
            backgroundSize: "60px 60px, 40px 40px, 40px 40px",
          }}
        />
      </div>

      {/* Zone bleue raccourcie */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-800/50 to-transparent z-20" />

      {/* Contenu centré */}
      <div className="relative z-30 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Titre principal */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Nous transformons vos ambitions architecturales en réalités structurelles
          </h1>

          {/* Sous-texte */}
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto text-justify">
            Le Bureau d'études Structiba accompagne vos projets de construction neuve et de réhabilitation avec une
            expertise technique reconnue en ingénierie structurelle et béton armé, de la conception à l'exécution.
          </p>
        </div>
      </div>

      {/* Overlay transparent pour améliorer la lisibilité */}
      <div className="absolute inset-0 z-20 bg-black/20" />
    </section>
  )
}
