export default function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // Tant qu'il reste des éléments à mélanger
  while (currentIndex > 0) {
    // Choisit un élément restant au hasard
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Et échange l'élément avec l'élément actuel
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array; // Retourne le tableau mélangé
}
