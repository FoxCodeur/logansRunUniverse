// utils.js
// Ce code est une fonction utilitaire en JSX qui formate du texte pour inclure
// des sauts de ligne.
import React from "react";
// Cette ligne déclare et exporte une fonction nommée formatTextWithLineBreaks.
// Elle prend un paramètre text, qui est une chaîne de caractères.
export const formatTextWithLineBreaks = (text) => {
  // text.split("\n") : La méthode split divise la chaîne text en un tableau
  // de sous-chaînes, en utilisant le caractère de nouvelle ligne \n comme délimiteur.
  //map((line, index) => (...)) : La méthode map crée un nouveau tableau en appliquant
  // une fonction à chaque élément du tableau résultant de split. Cette fonction prend
  // deux arguments : line (le texte de la ligne actuelle) et index (l'index de cette
  // ligne dans le tableau).
  return text.split("\n").map((line, index) => (
    //<React.Fragment key={index}> : React.Fragment est un composant spécial de React
    // qui permet de regrouper plusieurs éléments sans ajouter de nœud supplémentaire
    // au DOM. Le key={index} est une propriété requise pour les listes d'éléments
    // dans React afin d'aider React à identifier quels éléments ont changé, ont été
    // ajoutés ou supprimés.
    <React.Fragment key={index}>
      {/* {line} : Ceci insère le contenu de la ligne actuelle dans le fragment. */}
      {line}
      <br />
    </React.Fragment>
  ));
};
