import { useState, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { characters } from "@/data/characters";
import { getRandomQuestions, type Question } from "@/data/questions";

const TriviaGame = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const navigate = useNavigate();
  const character = characters.find((c) => c.id === characterId) || characters[0];

  const [questions] = useState<Question[]>(() => getRandomQuestions(10));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [kiAnimation, setKiAnimation] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = useCallback(
    (optionIndex: number) => {
      if (showFeedback) return;
      const correct = optionIndex === currentQuestion.correctIndex;
      setSelectedOption(optionIndex);
      setIsCorrect(correct);
      setShowFeedback(true);
      if (correct) {
        setScore((s) => s + 1);
        setKiAnimation(true);
      }
    },
    [showFeedback, currentQuestion]
  );

  const handleNext = useCallback(() => {
    setKiAnimation(false);
    if (currentIndex + 1 >= questions.length) {
      navigate(`/results/${characterId}/${score + (isCorrect ? 0 : 0)}`, {
        state: { score: score, total: questions.length },
      });
      return;
    }
    setCurrentIndex((i) => i + 1);
    setSelectedOption(null);
    setShowFeedback(false);
    setIsCorrect(false);
  }, [currentIndex, questions.length, navigate, characterId, score, isCorrect]);

  useEffect(() => {
    if (kiAnimation) {
      const t = setTimeout(() => setKiAnimation(false), 1500);
      return () => clearTimeout(t);
    }
  }, [kiAnimation]);

  if (!currentQuestion) return null;

  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-background halftone-bg px-4 py-6 flex flex-col">
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate("/select")}
            className="manga-btn bg-muted text-foreground text-xs px-3 py-1"
          >
            ✕ SALIR
          </button>
          <div className="font-display text-lg text-foreground">
            {character.emoji} {character.name}
          </div>
          <div className="font-display text-lg text-primary">
            ⭐ {score}/{questions.length}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-4 border-4 border-foreground bg-muted mb-6 relative">
          <div
            className="h-full bg-primary transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
          <span className="absolute inset-0 flex items-center justify-center font-display text-xs text-foreground">
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        {/* Character speech */}
        <div className={`mb-6 ${kiAnimation ? "animate-power-up" : ""}`}>
          <div className="speech-bubble">
            {showFeedback
              ? isCorrect
                ? character.correctPhrase
                : character.wrongPhrase
              : `Pregunta ${currentIndex + 1}... ¡Concéntrate!`}
          </div>
        </div>

        {/* Question */}
        <div className="manga-card p-5 md:p-6 mb-6 flex-1">
          <div className="text-xs font-display text-muted-foreground mb-2 tracking-wider">
            {currentQuestion.category}
          </div>
          <h2 className="font-display text-xl md:text-2xl text-foreground mb-6">
            {currentQuestion.question}
          </h2>

          <div className="grid gap-3">
            {currentQuestion.options.map((option, i) => {
              let btnStyle = "bg-card text-foreground border-foreground";
              if (showFeedback) {
                if (i === currentQuestion.correctIndex) {
                  btnStyle = "bg-accent text-accent-foreground border-foreground";
                } else if (i === selectedOption && !isCorrect) {
                  btnStyle = "bg-destructive text-destructive-foreground border-foreground animate-shake";
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={showFeedback}
                  className={`manga-btn text-left text-base md:text-lg ${btnStyle} w-full disabled:cursor-default`}
                >
                  <span className="font-display mr-2">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* Ki animation overlay */}
        {kiAnimation && (
          <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full animate-ki-pulse" style={{
              background: `radial-gradient(circle, ${character.color} 0%, transparent 70%)`
            }} />
          </div>
        )}

        {/* Next button */}
        {showFeedback && (
          <button
            onClick={handleNext}
            className="manga-btn bg-primary text-primary-foreground text-xl w-full py-4 mt-auto"
          >
            {currentIndex + 1 >= questions.length ? "🏆 VER RESULTADOS" : "➡️ SIGUIENTE"}
          </button>
        )}
      </div>
    </div>
  );
};

export default TriviaGame;
