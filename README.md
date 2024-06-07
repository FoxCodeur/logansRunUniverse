# React + Vite
Comment créer la structure d'une application REACT
Les instructions à taper dans le terminal

npm create vite@latest
nom du projet
npm install
npm install sass
code .
npm run dev

---

BrowserRouter permet de gérer la navigation entre les différentes pages de l'application.

    Il gère l'historique du navigateur: ce qui permet aux utilisateurs de naviguer en avant et en arrière entre les pages de l'application en utilisant les boutons du navigateur.
    Mettre à jour l'URL du navigateur: Lorsque l'utilisateur navigue entre les pages, BrowserRouter met à jour l'URL du navigateur en conséquence. Cela permet aux utilisateurs de copier et de partager l'URL d'une page spécifique de l'application.
    Fournir des composants pour la navigation: BrowserRouter fournit des composants tels que Link et NavLink qui permettent aux utilisateurs de naviguer entre les pages de votre application.

    pour l'installer dans le terminal
    npm install react-router-dom

---

createRoot est une fonction de React qui permet de créer une "racine" pour votre application React. Une racine est un élément DOM dans lequel votre application React sera rendue.

---
npm i axios (permet de faire des fetch)
-------------------------------------------------------------------------------

<!-- composant searchbar -->
On crée une div container searchBar
à l'intèrieur une autre div qui va contenir l'input ainsi qu'un bouton de validation.
-------------------------------------------------------------------------------
<!-- Migration des routes dans un fichier spécifique -->
Etape 1: Créer un fichier de configuration pour les routes

1. Créer un nouveau fichier appelé routesConfig.js dans un dossier approprié, par exemple src/config.
2. Dans ce fichier, importe les composants de tes différentes pages :
    // src/config/routesConfig.js
    import Home from "../../pages/home/Home";
    import Lexique from "../../pages/lexique/Lexique";
    import Timeline from "../../pages/timeline/Timeline";
    import Games from "../../pages/games/Games";
3.  Déclare un tableau d'objets qui représente la configuration de tes routes. Chaque objet doit contenir les propriétés path, element, et éventuellement exact si tu veux que la route soit exactement correspondante :
    const routesConfig = [
  { path: "/", element: Home, exact: true },
  { path: "/lexique", element: Lexique },
  { path: "/timelines", element: Timeline },
  { path: "/games", element: Games }
];

export default routesConfig;
Etape 2:  Mettre à jour le composant App
1. Importe routesConfig depuis le fichier de configuration que tu viens de créer :
import routesConfig from '../../config/routesConfig';
2. Utilise map pour parcourir routesConfig et générer dynamiquement tes routes :
 <Routes>
        {routesConfig.map((route, index) => (
          <Route 
            key={index} 
            path={route.path} 
            element={route.element} 
            exact={route.exact} 
          />
        ))}
      </Routes>

    Conclusion:
En suivant ces étapes, on migre la configuration des routes dans un fichier distinct, ce qui rend le code modulaire, donc plus facile à gérer. Maintenant, lorsque on aura besoin d'ajouter, supprimer ou de modifier des routes, ça se passe dans routesConfig.js, sans toucher au composant App. Ne pas surcharger App améliore la maintenabilité de l'application et permet de mieux organiser le code.
-------------------------------------------------------------------------------
Nav.jsx
Ce composant gère la barre de navigation de l'application. Il inclut les fonctionnalités suivantes :
Afficher ou masquer les liens de navigation en fonction de l'état showLinks.(en mode mobile)
Afficher le composant HomeNav lorsque l'utilisateur se trouve sur la page d'accueil ("/").
L'utilisation du hook useLocation qui permet d'accéder à l'objet de localisation de React Router.

{location.pathname === "/" && <HomeNav />}
Cette ligne utilise une expression JavaScript pour rendre conditionnellement le composant HomeNav.
=== "/" : Ceci vérifie si le chemin actuel de l'URL est exactement "/", ce qui correspond à la page d'accueil.
&& <HomeNav /> : L'opérateur && est utilisé pour rendre conditionnellement le composant HomeNav. Si la condition à gauche de && est vraie (location.pathname === "/"), alors HomeNav est rendu.
Cette ligne vérifie si l'utilisateur se trouve actuellement sur la page d'accueil ("/"). Si c'est le cas, le composant HomeNav est rendu à l'intérieur du div avec la classe home_nav_container. Si l'utilisateur n'est pas sur la page d'accueil, rien n'est rendu dans ce div. En effet, le rendu de la nav diffère selon que l'on se trouve sur la page d'accueil ou sur les autres pages.

--------------------------------------------------------------------------------

 Voici une check-list avec les étapes pour itérer sur les données (objet data) :

1. Importer les bibliothèques :
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
2. Déclarer le composant fonctionnel SectionDataList prenant data comme seul argument.

3. On crée un tableau vide titles afin d'y stocker les titres extraits des données.

4. Itérer sur les clés de l'objet data à l'aide de Object.keys(data).forEach((key) => { ... }) Pour chaque clé, extraire la valeur correspondante de data et la stocker dans une variable items.
5. À l'intérieur de la boucle précédente, itérer sur les clés de items à l'aide de Object.keys(items).forEach((itemKey) => { ... }) Pour chaque clé, accéder au champ titre de l'objet correspondant à cette clé dans items, puis ajouter ce titre à titles.
6. Afficher le contenu de data et les titres extraits dans la console à des fins de débogage.
7. Vérifier si des titres ont été extraits ou s'il y a une erreur. Si titles est vide, la chaîne "les définitions ne sont pas disponibles" indique à l'utilisateur leur indisponibilités.
8. Utiliser map pour itérer sur chaque titre extrait et créer des éléments <li> avec des liens <NavLink> correspondants. Chaque lien pointe vers une URL générée à partir du titre en minuscules avec les espaces remplacés par des tirets.
9. Assigner une clé unique à chaque élément de liste pour aider React à identifier les éléments lors de leur mise à jour.
10. Définir les types des props attendus par le composant à l'aide de propTypes.

--------------------------------------------------------------------------------

                Les animations qui se déclenchent au scroll (avec du CSS, librairies, jsx).
--------------------------------------------------------------------------------
Exclusivement avec le CSS

La propriété animation-timeline est une nouveauté en CSS qui permet de créer des animations de défilement sophistiquées, telles que l'apparition et le défilement de texte, sans avoir recours à JavaScript. Cette propriété permet de synchroniser les animations avec la position de défilement de la page, offrant une expérience utilisateur fluide et performante.

Dans notre exemple, la classe .scroll-reveal span utilise cette propriété pour contrôler l'apparition progressive et le défilement du texte lorsque l'utilisateur fait défiler la page d'accueil.

------------------------------------------------------------------------------
avec JSX: IntersectionObserver

L'animation d'apparition de l'image Carrousel (du composant HomeSectionDeux.jsx) qui utilise IntersectionObserver, fonctionne en surveillant la position d'un élément par rapport à la fenêtre d'affichage (viewport). Lorsqu'un élément entre ou sort de la vue, des actions spécifiques se déclenchent, telles que l'application de classes CSS pour animer l'élément.
1. Initialisation de l'Observer.
2. surveillance de l'élément.
3. mise en place dur référentiel.
4. effet de réaction au changement d'intersection.
5. application des styles de l'animation.
se référer aux commentaires sur le composant HomeSectionDeux.jsx


<!-- Utilisation de React.Lazy. Cette fonction permet de charger dynamiquement des composants React.Cela signifie que le chargement d'un composant ne se fait pas au moment où l'application est chargée initialement, mais seulement lorsque ce composant devient nécessaire, par exemple lorsqu'une route est atteinte, ce qui nécessite ce composant. -->
------------------------------------------------------------------------------

React Scroll Parallax tuto (JSX)

Pour installer le package dans le terminal on tape la commande suivante:
npm install react-scroll-parallax
1. on place l'import dans App.jsx
2. On encapsule App, ce qui va premettre d'étendre les fonctionnalités à tous les composants enfants qui veulent rendre sur leur page un effet parallax.

<Parallax speed={70}>
        <img
          className="coverBarillet"
          src={afficheBarilletcover}
          alt="six way to die cover"
        />
</Parallax>
Liste des propriétés qui permettent d'interagir avec une image, ou texte.
scaleX : applique une transformation d'échelle sur l'axe X.
scaleY : applique une transformation d'échelle sur l'axe Y.
scale : applique une transformation d'échelle uniforme sur les axes X et Y.
rotate : rotation.
rotateX : rotation sur l'axe X.
rotateY : rotation sur l'axe Y.
rotateZ : rotation sur l'axe Z.
translateX : translation sur l'axe X.
translateY : translation sur l'axe Y.
opacity : Pour ajuster l'opacité.
easing : Pour spécifier une fonction d'assouplissement (easing function) pour les animations.
startScroll : Pour définir le point de départ du scroll pour l'effet de parallaxe.
endScroll : Pour définir le point de fin du scroll pour l'effet de parallaxe.
disabled : Pour désactiver l'effet de parallaxe.
--------------------------------------------------------------------------------------
Mise en place du LEXIQUE
Le lexique comprend trois composants:
    1. LexiqueSearchBar (la barre de recherche qui va nous permettre d'effectuer des recherches de définitions spécifiques dans le composant SectionDatalist.)
    2. SectionDatalist, qui comprend la liste des définition avec le routage approprié lorsqu'on clique sur l'un de ses mots.
    3. SectionLexique. Ce lexique classé par ordre alphabétique contient l'ensemble des définitions toutes basées sur l'univers de Logan's run.
                                -------