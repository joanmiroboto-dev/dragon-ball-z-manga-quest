import { useNavigate } from "react-router-dom";
import { characters } from "@/data/characters";

const CharacterGallery = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background halftone-bg px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <button
            onClick={() => navigate("/")}
            className="manga-btn bg-muted text-foreground text-sm mb-6 px-4 py-2"
          >
            ← VOLVER
          </button>
          <h1 className="font-display text-4xl md:text-6xl text-foreground text-manga-shadow mb-2">
            GUERREROS <span className="text-secondary">Z</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {characters.map((char) => (
            <div key={char.id} className="manga-card p-6 flex gap-4 items-center">
              <div className="text-5xl md:text-6xl shrink-0">{char.emoji}</div>
              <div className="flex-1">
                <h2 className="font-display text-2xl text-foreground">{char.name}</h2>
                <p className="text-sm text-muted-foreground font-body mb-2">{char.description}</p>
                <div
                  className="inline-block px-3 py-1 border-2 border-foreground text-xs font-display tracking-wider"
                  style={{ backgroundColor: char.color, color: "#fff" }}
                >
                  PODER: {char.powerLevel}
                </div>
                <div className="mt-2">
                  <div className="speech-bubble text-sm !p-3">
                    "{char.correctPhrase}"
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterGallery;
