

## Plan: Chatbot de Dragon Ball Trivia Z

### Resumen
Crear un chatbot flotante (estilo widget) con la estética manga del sitio que responda **exclusivamente** sobre el contenido de la web: personajes, preguntas de trivia, cronología/historia, mecánicas del juego y navegación. Usará Lovable AI (edge function) con un system prompt estricto que incluya todo el contenido del sitio como contexto.

### Arquitectura

```text
┌─────────────────────┐
│  ChatBot Widget     │  ← Botón flotante + panel desplegable
│  (React component)  │
└────────┬────────────┘
         │ fetch (streaming SSE)
         ▼
┌─────────────────────┐
│  Edge Function      │  ← System prompt con TODO el contenido
│  supabase/functions  │     del sitio embebido
│  /v1/dbz-chat       │
└────────┬────────────┘
         │
         ▼
   Lovable AI Gateway
   (gemini-3-flash)
```

### Pasos de implementación

1. **Habilitar Lovable Cloud** si no está activo, para tener acceso a `LOVABLE_API_KEY`.

2. **Crear edge function `supabase/functions/dbz-chat/index.ts`**
   - System prompt extenso que incluya:
     - Los 6 personajes (nombre, descripción, frases, poder)
     - Las 12 preguntas de trivia con respuestas correctas
     - Los 11 eventos de la cronología (año, saga, título, descripción)
     - Secciones de la web (Inicio, Selección de Personaje, Trivia, Resultados, Historia, Galería)
     - Instrucción estricta: "Solo responde sobre el contenido de esta web. Si preguntan algo fuera de contexto, indica amablemente que solo puedes hablar sobre Dragon Ball Trivia Z."
   - Streaming SSE hacia el cliente
   - Manejo de errores 429/402

3. **Crear componente `src/components/ChatBot.tsx`**
   - Botón flotante (esquina inferior derecha) con estética manga (border-4, sombra plana, emoji 🐉)
   - Panel desplegable con:
     - Header con título "ASISTENTE Z" y botón cerrar
     - Área de mensajes con scroll (burbujas estilo `speech-bubble`)
     - Input + botón enviar
   - Streaming token-by-token con `react-markdown` para renderizar respuestas
   - Historial de conversación en memoria (sin persistencia)

4. **Integrar en `src/App.tsx`**
   - Añadir `<ChatBot />` como componente global fuera de las rutas para que esté disponible en todas las páginas.

### Detalles de diseño
- Botón flotante: `manga-btn` con colores primarios, `fixed bottom-6 right-6 z-50`
- Panel: `manga-card` con ancho ~350px, altura ~500px, animación de entrada
- Mensajes del usuario: fondo primario, texto blanco
- Mensajes del bot: estilo `speech-bubble` existente
- Responsive: en móvil el panel ocupa casi todo el ancho

### Dependencia
- Instalar `react-markdown` para renderizar las respuestas del bot con formato.

