import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import CharacterSelect from "./pages/CharacterSelect.tsx";
import CharacterGallery from "./pages/CharacterGallery.tsx";
import TriviaGame from "./pages/TriviaGame.tsx";
import Results from "./pages/Results.tsx";
import Story from "./pages/Story.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/select" element={<CharacterSelect />} />
          <Route path="/characters" element={<CharacterGallery />} />
          <Route path="/trivia/:characterId" element={<TriviaGame />} />
          <Route path="/story" element={<Story />} />
          <Route path="/results/:characterId/:score" element={<Results />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
