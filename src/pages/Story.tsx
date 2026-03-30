import { useNavigate } from "react-router-dom";
import { useState } from "react";

import imgAdventure from "@/assets/story/db-adventure.jpg";
import imgRedRibbon from "@/assets/story/db-redribbon.jpg";
import imgPiccoloDaimao from "@/assets/story/db-piccolo-daimao.jpg";
import imgBudokai from "@/assets/story/db-budokai.jpg";
import imgSaiyajin from "@/assets/story/dbz-saiyajin.jpg";
import imgNamek from "@/assets/story/dbz-namek.jpg";
import imgCell from "@/assets/story/dbz-cell.jpg";
import imgBuu from "@/assets/story/dbz-buu.jpg";
import imgBills from "@/assets/story/dbs-bills.jpg";
import imgGoldenFreezer from "@/assets/story/dbs-golden-freezer.jpg";
import imgTournament from "@/assets/story/dbs-tournament.jpg";

interface TimelineEvent {
  year: string;
  saga: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  image: string;
}

const timeline: TimelineEvent[] = [
  {
    year: "Año 749",
    saga: "Dragon Ball",
    title: "La Aventura Comienza",
    description: "Goku conoce a Bulma y juntos inician la búsqueda de las Esferas del Dragón. Goku entrena con el Maestro Roshi y participa en el Torneo de Artes Marciales.",
    color: "hsl(20 94% 54%)",
    icon: "🐉",
    image: imgAdventure,
  },
  {
    year: "Año 750",
    saga: "Dragon Ball",
    title: "La Red Ribbon",
    description: "Goku se enfrenta solo al Ejército de la Red Ribbon para recuperar las esferas. Conoce a Krillin, Yamcha y otros aliados que serán clave en el futuro.",
    color: "hsl(0 70% 50%)",
    icon: "🎖️",
    image: imgRedRibbon,
  },
  {
    year: "Año 753",
    saga: "Dragon Ball",
    title: "El Rey Demonio Piccolo",
    description: "Piccolo Daimaō aterroriza la Tierra. Krillin es asesinado, despertando la furia de Goku. Tras una batalla épica, Goku derrota a Piccolo pero su hijo renace.",
    color: "hsl(140 60% 35%)",
    icon: "👹",
    image: imgPiccoloDaimao,
  },
  {
    year: "Año 756",
    saga: "Dragon Ball",
    title: "23° Tenkaichi Budokai",
    description: "Goku, ya adulto, se enfrenta a Piccolo Jr. en la final del torneo. Gana el combate y se casa con Chi-Chi, cerrando la era de Dragon Ball.",
    color: "hsl(280 60% 50%)",
    icon: "🏆",
    image: imgBudokai,
  },
  {
    year: "Año 761",
    saga: "Dragon Ball Z",
    title: "Llegada de Raditz — Saga Saiyajin",
    description: "Raditz llega a la Tierra revelando el origen Saiyajin de Goku. Goku se sacrifica para derrotarlo. Un año después, Vegeta y Nappa invaden la Tierra.",
    color: "hsl(215 100% 34%)",
    icon: "🛸",
    image: imgSaiyajin,
  },
  {
    year: "Año 762",
    saga: "Dragon Ball Z",
    title: "Saga de Namek y Freezer",
    description: "Los guerreros Z viajan a Namek para revivir a sus amigos. Se enfrentan a Freezer, el tirano del universo. Goku se transforma en Super Saiyajin por primera vez.",
    color: "hsl(53 99% 57%)",
    icon: "💛",
    image: imgNamek,
  },
  {
    year: "Año 764",
    saga: "Dragon Ball Z",
    title: "Saga de los Androides",
    description: "Trunks del futuro advierte sobre los Androides 17 y 18. Cell aparece como la amenaza definitiva. Gohan despierta su poder oculto y derrota a Cell como Super Saiyajin 2.",
    color: "hsl(250 60% 55%)",
    icon: "⚔️",
    image: imgCell,
  },
  {
    year: "Año 774",
    saga: "Dragon Ball Z",
    title: "Saga de Majin Buu",
    description: "El mago Babidi libera a Majin Buu. Vegeta se sacrifica. Goku alcanza el Super Saiyajin 3. La fusión y el Genkidama definitivo salvan al universo.",
    color: "hsl(330 70% 55%)",
    icon: "💥",
    image: imgBuu,
  },
  {
    year: "Año 778",
    saga: "Dragon Ball Super",
    title: "Saga de Bills y Whis",
    description: "Bills, el Dios de la Destrucción, despierta buscando al Super Saiyajin Dios. Goku alcanza esta transformación con la ayuda de sus amigos Saiyajins.",
    color: "hsl(0 80% 55%)",
    icon: "🔴",
    image: imgBills,
  },
  {
    year: "Año 779",
    saga: "Dragon Ball Super",
    title: "Resurrección de Freezer",
    description: "Freezer es revivido y entrena por primera vez, alcanzando su forma Golden. Goku y Vegeta dominan el Super Saiyajin Blue con el entrenamiento de Whis.",
    color: "hsl(200 90% 50%)",
    icon: "🧊",
    image: imgGoldenFreezer,
  },
  {
    year: "Año 780",
    saga: "Dragon Ball Super",
    title: "Torneo del Poder",
    description: "Zeno-sama organiza un torneo entre universos donde el perdedor es borrado de la existencia. Goku despierta el Ultra Instinto y salva al Universo 7.",
    color: "hsl(210 20% 60%)",
    icon: "✨",
    image: imgTournament,
  },
];

const sagaColors: Record<string, string> = {
  "Dragon Ball": "hsl(20 94% 54%)",
  "Dragon Ball Z": "hsl(215 100% 34%)",
  "Dragon Ball Super": "hsl(0 80% 55%)",
};

const Story = () => {
  const navigate = useNavigate();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background halftone-bg px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <button
            onClick={() => navigate("/")}
            className="manga-btn bg-muted text-foreground text-sm mb-6 px-4 py-2"
          >
            ← VOLVER
          </button>
          <h1 className="font-display text-4xl md:text-6xl text-foreground text-manga-shadow mb-2">
            HISTORIA <span className="text-primary">Z</span>
          </h1>
          <p className="font-body text-muted-foreground text-base md:text-lg">
            La cronología completa de la saga más épica del anime
          </p>
        </div>

        {/* Saga legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.entries(sagaColors).map(([saga, color]) => (
            <div
              key={saga}
              className="flex items-center gap-2 border-2 border-foreground px-3 py-1"
              style={{ backgroundColor: color }}
            >
              <span className="font-display text-xs text-white tracking-wider">{saga.toUpperCase()}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-foreground md:-translate-x-0.5" />

          {timeline.map((event, index) => {
            const isExpanded = expandedIndex === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex mb-8 md:mb-12 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Node dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-5 h-5 border-4 border-foreground rounded-full z-10 md:-translate-x-2.5 -translate-x-2.5"
                  style={{ backgroundColor: event.color }}
                />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? "md:pr-0 md:mr-auto md:ml-0" : "md:pl-0 md:ml-auto md:mr-0"
                  }`}
                >
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="manga-card p-0 w-full text-left cursor-pointer group overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative w-full h-32 md:h-40 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        width={768}
                        height={512}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      {/* Year badge on image */}
                      <div
                        className="absolute top-3 left-3 px-3 py-1 border-2 border-foreground text-xs font-display tracking-wider"
                        style={{ backgroundColor: event.color, color: "#fff" }}
                      >
                        {event.year}
                      </div>
                    </div>

                    {/* Text content */}
                    <div className="p-4 md:p-5">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl md:text-3xl shrink-0">{event.icon}</span>
                        <div className="flex-1">
                          <div className="font-display text-xs text-muted-foreground tracking-wider mb-1">
                            {event.saga.toUpperCase()}
                          </div>
                          <h3 className="font-display text-lg md:text-xl text-foreground leading-tight">
                            {event.title}
                          </h3>

                          <div
                            className={`overflow-hidden transition-all duration-300 ${
                              isExpanded ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <p className="font-body text-sm text-muted-foreground leading-relaxed">
                              {event.description}
                            </p>
                          </div>

                          <div className="font-display text-xs text-primary mt-2">
                            {isExpanded ? "▲ CERRAR" : "▼ LEER MÁS"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}

          {/* End marker */}
          <div className="absolute left-6 md:left-1/2 bottom-0 w-5 h-5 border-4 border-foreground bg-primary rounded-full md:-translate-x-2.5 -translate-x-2.5" />
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12">
          <div className="speech-bubble max-w-sm mx-auto mb-8">
            <p className="text-base">
              ¿Cuánto sabes de esta historia? ¡Ponlo a prueba!
            </p>
          </div>
          <button
            onClick={() => navigate("/select")}
            className="manga-btn bg-primary text-primary-foreground text-xl px-8 py-4"
          >
            🥊 ¡JUGAR TRIVIA!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Story;
