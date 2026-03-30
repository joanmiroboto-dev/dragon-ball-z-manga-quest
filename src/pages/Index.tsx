import { useNavigate } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background halftone-bg flex flex-col">
      {/* Hero Section */}
      <section className="relative flex-1 flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-20"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Dragon Ball emojis */}
          <div className="flex justify-center gap-2 mb-6 text-3xl md:text-4xl">
            {["🟠", "🟠", "🟠", "🟠", "🟠", "🟠", "🟠"].map((e, i) => (
              <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                {e}
              </span>
            ))}
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground text-manga-shadow leading-tight mb-4">
            DRAGON BALL
            <span className="block text-primary">TRIVIA Z</span>
          </h1>

          <div className="speech-bubble max-w-md mx-auto mb-10">
            <p className="text-base md:text-lg">
              ¡Demuestra que eres el guerrero Z con más conocimiento del universo!
            </p>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <button
              onClick={() => navigate("/select")}
              className="manga-btn bg-primary text-primary-foreground text-xl md:text-2xl px-8 py-4"
            >
              🥊 ¡COMENZAR!
            </button>
            <button
              onClick={() => navigate("/characters")}
              className="manga-btn bg-secondary text-secondary-foreground text-lg md:text-xl"
            >
              📖 GUERREROS Z
            </button>
            <button
              onClick={() => navigate("/story")}
              className="manga-btn bg-accent text-accent-foreground text-lg md:text-xl"
            >
              📜 HISTORIA
            </button>
          </div>
        </div>

        {/* Speed lines decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 speed-lines opacity-30" />
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-foreground bg-card py-4 text-center">
        <p className="font-display text-muted-foreground text-sm tracking-wider">
          🐉 DRAGON BALL TRIVIA Z — Hecho con Ki por fans, para fans
        </p>
      </footer>
    </div>
  );
};

export default Index;
