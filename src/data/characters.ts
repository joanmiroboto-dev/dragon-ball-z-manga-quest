import gokuImg from "@/assets/characters/goku.png";
import vegetaImg from "@/assets/characters/vegeta.png";
import piccoloImg from "@/assets/characters/piccolo.png";
import gohanImg from "@/assets/characters/gohan.png";
import trunksImg from "@/assets/characters/trunks.png";
import krillinImg from "@/assets/characters/krillin.png";

export interface Character {
  id: string;
  name: string;
  image: string;
  color: string;
  bgClass: string;
  description: string;
  correctPhrase: string;
  wrongPhrase: string;
  finalPhrase: string;
  powerLevel: string;
}

export const characters: Character[] = [
  {
    id: "goku",
    name: "Goku",
    image: gokuImg,
    color: "hsl(20 94% 54%)",
    bgClass: "bg-primary",
    description: "El guerrero Saiyajin más poderoso del universo",
    correctPhrase: "¡Genial! ¡Eso fue increíble!",
    wrongPhrase: "¡No te preocupes! ¡Sigamos entrenando!",
    finalPhrase: "¡Fue una gran pelea de conocimiento!",
    powerLevel: "9,001+",
  },
  {
    id: "vegeta",
    name: "Vegeta",
    image: vegetaImg,
    color: "hsl(215 100% 34%)",
    bgClass: "bg-secondary",
    description: "El Príncipe de los Saiyajins",
    correctPhrase: "¡Hmph! Era obvio para alguien de la realeza.",
    wrongPhrase: "¡Insecto! ¿Cómo puedes fallar eso?",
    finalPhrase: "No estuvo mal... para un terrícola.",
    powerLevel: "8,500+",
  },
  {
    id: "piccolo",
    name: "Piccolo",
    image: piccoloImg,
    color: "hsl(140 60% 35%)",
    bgClass: "bg-emerald-700",
    description: "El guerrero Namekiano, mentor de Gohan",
    correctPhrase: "Bien pensado. Gohan estaría orgulloso.",
    wrongPhrase: "Concéntrate. Necesitas más entrenamiento.",
    finalPhrase: "Has demostrado tu valor, guerrero.",
    powerLevel: "3,500+",
  },
  {
    id: "gohan",
    name: "Gohan",
    image: gohanImg,
    color: "hsl(280 60% 50%)",
    bgClass: "bg-purple-600",
    description: "Hijo de Goku, guerrero y estudioso",
    correctPhrase: "¡Excelente! ¡Estudiaste bien!",
    wrongPhrase: "No pasa nada, hay que repasar más.",
    finalPhrase: "¡Gran trabajo! El conocimiento es poder.",
    powerLevel: "Oculto",
  },
  {
    id: "trunks",
    name: "Trunks",
    image: trunksImg,
    color: "hsl(250 60% 55%)",
    bgClass: "bg-indigo-500",
    description: "El guerrero del futuro, hijo de Vegeta",
    correctPhrase: "¡Así se hace! ¡El futuro es nuestro!",
    wrongPhrase: "En mi línea temporal, eso se sabía...",
    finalPhrase: "¡Juntos podemos cambiar el destino!",
    powerLevel: "7,000+",
  },
  {
    id: "krillin",
    name: "Krillin",
    image: krillinImg,
    color: "hsl(35 90% 55%)",
    bgClass: "bg-amber-500",
    description: "El humano más fuerte de la Tierra",
    correctPhrase: "¡Sí! ¡Toma eso! ¡Kienzan mental!",
    wrongPhrase: "Ay no... ¿otra vez me eliminan primero?",
    finalPhrase: "¡No estuvo mal para un humano!",
    powerLevel: "1,770",
  },
];
