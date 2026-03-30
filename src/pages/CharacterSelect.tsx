import { useNavigate } from "react-router-dom";
import { characters } from "@/data/characters";

const CharacterSelect = () => {
  const navigate = useNavigate();

  const handleSelect = (characterId: string) => {
    navigate(`/trivia/${characterId}`);
  };

  return (
    <div className="min-h-screen bg-background halftone-bg px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <button
            onClick={() => navigate("/")}
            className="manga-btn bg-muted text-foreground text-sm mb-6 px-4 py-2"
          >
            ← VOLVER
          </button>
          <h1 className="font-display text-4xl md:text-6xl text-foreground text-manga-shadow mb-2">
            ELIGE TU <span className="text-primary">GUERRERO</span>
          </h1>
          <p className="font-body text-muted-foreground text-lg">
            Tu personaje reaccionará a cada respuesta
          </p>
        </div>

        {/* Character Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {characters.map((char) => (
            <button
              key={char.id}
              onClick={() => handleSelect(char.id)}
              className="manga-card p-4 md:p-6 text-center group cursor-pointer"
            >
              <div
                className="text-5xl md:text-7xl mb-3 transition-transform group-hover:scale-110"
              >
                {char.emoji}
              </div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-1">
                {char.name}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground font-body">
                {char.description}
              </p>
              <div className="mt-3 inline-block px-3 py-1 border-2 border-foreground text-xs font-display tracking-wider"
                style={{ backgroundColor: char.color, color: "#fff" }}
              >
                PWR: {char.powerLevel}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelect;
