// src/config/routesConfig.js
// optionnel, Dans certains projets ou configurations, il peut survenir un
// avertissement ou une erreur si l'on n'importe pas React explicitement,
// même si celui-ci n'est pas nécessaire dans un fichier js.
import React from "react";
import Home from "../pages/home/Home";
import Lexique from "../pages/lexique/Lexique";
import Timeline from "../pages/timeline/Timeline";
import Games from "../pages/games/Games";

const routesConfig = [
  { path: "/", element: Home, exact: true },
  { path: "/lexique", element: Lexique },
  { path: "/timelines", element: Timeline },
  { path: "games", element: Games },
];

export default routesConfig;
