import { useNavigate, useParams, useLocation } from "react-router-dom";
import { characters } from "@/data/characters";

const Results = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const character = characters.find((c) => c.id === characterId) || characters[0];

  const state = location.state as { score: number; total: number } | null;
  const score = state?.score ?? 0;
  const total = state?.total ?? 10;
  const percentage = Math.round((score / total) * 100);

  const getRank = () => {
    if (percentage >= 90) return { title: "¡SUPER SAIYAJIN DIOS!", emoji: "🔴" };
    if (percentage >= 70) return { title: "¡SUPER SAIYAJIN!", emoji: "💛" };
    if (percentage >= 50) return { title: "GUERRERO Z", emoji: "💪" };
    if (percentage >= 30) return { title: "ESTUDIANTE", emoji: "📖" };
    return { title: "YAMCHA LEVEL", emoji: "💀" };
  };

  const rank = getRank();

  return (
    <div className="min-h-screen bg-background halftone-bg flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full text-center">
        <div className="manga-card p-8 mb-6">
          {/* Rank */}
          <div className="text-6xl mb-4">{rank.emoji}</div>
          <h1 className="font-display text-3xl md:text-4xl text-foreground text-manga-shadow mb-2">
            {rank.title}
          </h1>

          {/* Score */}
          <div className="my-6 p-4 border-4 border-foreground bg-accent inline-block"
            style={{ boxShadow: "var(--manga-shadow-sm)" }}>
            <span className="font-display text-5xl text-accent-foreground">
              {score}/{total}
            </span>
          </div>

          <div className="w-full h-6 border-4 border-foreground bg-muted mb-6 relative">
            <div
              className="h-full bg-primary transition-all duration-1000"
              style={{ width: `${percentage}%` }}
            />
            <span className="absolute inset-0 flex items-center justify-center font-display text-xs text-foreground">
              {percentage}%
            </span>
          </div>

          {/* Character message */}
          <div className="speech-bubble text-left mb-8">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{character.emoji}</span>
              <span className="font-display text-lg">{character.name}:</span>
            </div>
            {character.finalPhrase}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate(`/trivia/${characterId}`)}
            className="manga-btn bg-primary text-primary-foreground text-xl w-full py-4"
          >
            🔄 REINTENTAR
          </button>
          <button
            onClick={() => navigate("/select")}
            className="manga-btn bg-secondary text-secondary-foreground text-lg w-full py-3"
          >
            🔀 CAMBIAR GUERRERO
          </button>
          <button
            onClick={() => navigate("/")}
            className="manga-btn bg-muted text-foreground text-lg w-full py-3"
          >
            🏠 INICIO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
