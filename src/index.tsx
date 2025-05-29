import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MeicaExpo } from "./screens/MeicaExpo/MeicaExpo";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <MeicaExpo />
  </StrictMode>,
);
