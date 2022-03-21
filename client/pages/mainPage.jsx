import { TopBar } from "../components/topBar";
import React from "react";
import { PersonaCard } from "../components/personaCard";
import { LanguagesAndToolsCard } from "../components/languagesAndToolsCards";

export function MainPage() {
  return (
    <div>
      <TopBar title={"About Me"} />
      <div className={"content app-width"}>
        <br />
        <LanguagesAndToolsCard />
        <br />
        <PersonaCard />
      </div>
    </div>
  );
}
