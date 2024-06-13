// src/config/routesConfig.js
// optionnel, Dans certains projets ou configurations, il peut survenir un
// avertissement ou une erreur si l'on n'importe pas React explicitement,
// même si celui-ci n'est pas nécessaire dans un fichier js.
import React from "react";
import Home from "../pages/home/Home";
import Lexique from "../pages/lexique/Lexique";
import Timeline from "../pages/timeline/Timeline";
import Games from "../pages/games/Games";
import Acteurs from "../pages/articles/A/acteurs/Acteurs";
import Adam from "../pages/articles/A/Adam/Adam";
import AdventureComics from "../pages/articles/A/Adventure_Comics/AdventureComics";
import Aitken from "../pages/articles/A/Aitken/Aitken";

const routesConfig = [
  { path: "/", element: Home, exact: true },
  { path: "/lexique", element: Lexique },
  { path: "/timelines", element: Timeline },
  { path: "games", element: Games },
  { path: "les-acteurs-du-film", element: Acteurs },
  { path: "adam-1", element: Adam },
  { path: "adventure-comics", element: AdventureComics },
  { path: "aitken", element: Aitken },
];

export default routesConfig;
