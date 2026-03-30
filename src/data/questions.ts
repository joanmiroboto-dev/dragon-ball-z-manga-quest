export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es el nombre Saiyajin de Goku?",
    options: ["Bardock", "Kakarot", "Raditz", "Turles"],
    correctIndex: 1,
    category: "Personajes",
  },
  {
    id: 2,
    question: "¿Cuántas esferas del dragón se necesitan para invocar a Shenlong?",
    options: ["5", "6", "7", "8"],
    correctIndex: 2,
    category: "General",
  },
  {
    id: 3,
    question: "¿Quién fue el primer Super Saiyajin en aparecer en la serie?",
    options: ["Vegeta", "Gohan", "Goku", "Trunks del Futuro"],
    correctIndex: 2,
    category: "Transformaciones",
  },
  {
    id: 4,
    question: "¿Cuál es la técnica insignia de Vegeta?",
    options: ["Kamehameha", "Makankosappo", "Final Flash", "Kienzan"],
    correctIndex: 2,
    category: "Técnicas",
  },
  {
    id: 5,
    question: "¿De qué planeta son originarios los Saiyajins?",
    options: ["Namek", "Vegeta", "Tierra", "Kaio"],
    correctIndex: 1,
    category: "Universo",
  },
  {
    id: 6,
    question: "¿Quién mató a Freezer por primera vez?",
    options: ["Goku", "Trunks del Futuro", "Vegeta", "Gohan"],
    correctIndex: 1,
    category: "Sagas",
  },
  {
    id: 7,
    question: "¿Cuál es el nombre del maestro que entrenó a Goku de niño?",
    options: ["Maestro Karin", "Maestro Roshi", "Rey Kai", "Kami-sama"],
    correctIndex: 1,
    category: "Personajes",
  },
  {
    id: 8,
    question: "¿Qué transformación alcanza Gohan para derrotar a Cell?",
    options: ["Super Saiyajin", "Super Saiyajin 2", "Super Saiyajin 3", "Místico"],
    correctIndex: 1,
    category: "Transformaciones",
  },
  {
    id: 9,
    question: "¿Cómo se llama la fusión de Goku y Vegeta con los Potara?",
    options: ["Gogeta", "Vegito", "Gotenks", "Vegeku"],
    correctIndex: 1,
    category: "Fusiones",
  },
  {
    id: 10,
    question: "¿Cuál es el nombre de la esposa de Goku?",
    options: ["Bulma", "Videl", "Chi-Chi", "Número 18"],
    correctIndex: 2,
    category: "Personajes",
  },
  {
    id: 11,
    question: "¿Qué deseo pidió Oolong para evitar que Pilaf deseara dominar el mundo?",
    options: ["Comida infinita", "Ropa interior de chica", "Ser más alto", "Un castillo"],
    correctIndex: 1,
    category: "General",
  },
  {
    id: 12,
    question: "¿Cuántas veces ha muerto Krillin en la serie?",
    options: ["1", "2", "3", "4"],
    correctIndex: 2,
    category: "Personajes",
  },
];

export function getRandomQuestions(count: number = 10): Question[] {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
