

Les donnnées se trouvent dans le Data.json
Le but consiste à récupérer une valeure dans l'objet et la comparer avec ce que l'on tape dans la barre de recherche. Avec l'autocomplétion le composant est censé se mettre à jour.
IL faut donc gérer l'état du composant 

1.On enregistre la variable en utilisant la gestion d'état, (la modification de celle-ci s'effectue via setValue) (usestate est le hook qui permet de gérer les états ) cela signifit que chaque fois que la valeur change
const [value, setValue] = useState();

2.Il faut maintenant informer l'input que la value correspond a ce qui est tapé dans le champ.

<input type="text" placeholder="type to Search" value={value} />
On ne peut écouter l'évènement qu'avec onChange
<input type="text" placeholder="type to Search" value={value} onChange=""/>
A chaque que le formulaire va changer je veux exécuter une fonction, ici handleChange. Je crée donc ma fonction et je la renseigne dans l'input.

const handleChange = (event) => {
    setValue(event.target.value); 
  };

<input
            type="text"
            placeholder="type to Search"
            value={value}
            onChange={handleChange}
          />









Implémentation de l'autocomplétiondans un champ de recherche React.

Étape 1: Configuration des États et Références

1. Définir les États

    value : Stocke la valeur actuelle du champ de recherche.
    isActive : Détermine si les suggestions doivent être affichées.

      const [value, setValue] = useState("");
      const [isActive, setIsActive] = useState(false);

2. Créer une Référence pour l'Input

inputRef : Utilisé pour vérifier si un clic se fait à l'intérieur ou à l'extérieur du champ de recherche.

      const inputRef = useRef(null);

Étape 2: Extraction des Titres pour l'Autocomplétion
1. Utiliser useMemo pour Extraire les Titres
titles : Un tableau de tous les titres extraits des données JSON. useMemo optimise la performance en évitant les recalculs inutiles.

      const titles = useMemo(() => {
  return Object.values(data).flatMap(category =>
    Object.values(category).map(item => item.titre)
  );
}, []); // Pas de dépendances car data est constante

Étape 3: Gérer les Changements dans le Champ de Recherche
1. Mettre à Jour la Valeur du Champ de Recherche

handleChange : Fonction qui met à jour l'état value chaque fois que l'utilisateur tape dans le champ de recherche.

      const handleChange = (event) => {
  setValue(event.target.value);
};

Étape 4: Afficher/Masquer les Suggestions

1. Gérer le Clic sur l'Input
handleClickOutside : Masque les suggestions lorsque l'utilisateur clique en dehors du champ de recherche.

      const handleClickOutside = (event) => {
  if (inputRef.current && !inputRef.current.contains(event.target)) {
    setIsActive(false); // Cache les suggestions
  }
};

// Ajouter et supprimer l'écouteur d'événements
React.useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

Étape 5: Filtrer et Afficher les Suggestions

1.Filtrer les Titres
filteredTitles : Un tableau contenant uniquement les titres qui incluent la valeur du champ de recherche.

const filteredTitles = titles.filter(title =>
  title.toLowerCase().includes(value.toLowerCase())
);

2.Afficher les Suggestions
suggestionsList : Un div qui affiche la liste des titres filtrés lorsque isActive est true et qu'il y a des titres filtrés.

      {isActive && filteredTitles.length > 0 && (
  <div className="suggestionsList">
    {filteredTitles.map((title, index) => (
      <div key={index} className="suggestionItem">
        {title}
      </div>
    ))}
  </div>
)}


Résumé

    Configurer les états et références pour gérer la valeur et l'affichage des suggestions.
    Utiliser useMemo pour extraire les titres à partir des données statiques.
    Gérer les événements de changement et de clic pour mettre à jour l'état et afficher les suggestions.
    Filtrer les titres en fonction de la saisie et afficher les suggestions filtrées.
    Appliquer les styles pour afficher les suggestions correctement sous le champ de recherche.

En suivant ces étapes, vous devriez pouvoir implémenter une autocomplétion efficace dans votre champ de recherche React.
