// src/config/routesConfig.js
// optionnel, Dans certains projets ou configurations, il peut survenir un
// avertissement ou une erreur si l'on n'importe pas React explicitement,
// même si celui-ci n'est pas nécessaire dans un fichier js.
import React from "react";
import Home from "../pages/home/Home";
import Lexique from "../pages/lexique/Lexique";
import Timeline from "../pages/timeline/Timeline";
import Portfolio from "../pages/portfolio/Portfolio";
import Games from "../pages/games/Games";
import Acteurs from "../pages/articles/A/acteurs/Acteurs";
import Adam from "../pages/articles/A/Adam/Adam";
import AdventureComics from "../pages/articles/A/Adventure_Comics/AdventureComics";
import Aitken from "../pages/articles/A/Aitken/Aitken";
import AigleMecha from "../pages/articles/A/Aigle_Mecha/AigleMecha";
import Albert from "../pages/articles/A/Albert/Albert";
import Andar from "../pages/articles/A/Andar/Andar";
import Ankh from "../pages/articles/A/Ankh/Ankh";
import Arcade from "../pages/articles/A/Arcade/Arcade";
import Argos from "../pages/articles/A/Argos/Argos";
import Baleine from "../pages/articles/B/Baleine/Baleine";
import Ballard from "../pages/articles/B/Ballard/Ballard";
import Baxter from "../pages/articles/B/Baxter/Baxter";
import BluewaterComics from "../pages/articles/B/Bluewater_Comics/BluewaterComics";
import BorgiaRiders from "../pages/articles/B/Borgia_Riders/BorgiaRiders";
import BoutiqueDuSommeil from "../pages/articles/B/boutique_du_sommeil/BoutiqueDuSommeil";
import Box from "../pages/articles/B/Box/Box";
import Bradley from "../pages/articles/B/Bradley/Bradley";
import CaissonDeRememoration from "../pages/articles/C/caisson_de_remémoration/CaissonDeRememoration";
import CapeSteinbeck from "../pages/articles/C/Cape_Steinbeck/CapeSteinbeck";
import Cathedrale from "../pages/articles/C/Cathedrale/Cathedrale";
import Carrousel from "../pages/articles/C/Carrousel/Carrousel";
import CharmingBilly from "../pages/articles/C/Charming_Billy/CharmingBilly";
import ChirurgienMarkJ from "../pages/articles/C/Chirurgien_Mark_J/ChirurgienMarkJ";
import LesCharognards from "../pages/articles/C/les_Charognards/LesCharognards";
import LeCircuit from "../pages/articles/C/le_Circuit/LeCircuit";
import ComplexeCity from "../pages/articles/C/Complexe_City/ComplexeCity";
import CrazyHorse from "../pages/articles/C/Crazy_Horse/CrazyHorse";
import CrecheIndustrielle from "../pages/articles/C/Creche_Industrielle/CrecheIndustrielle";
import TheCubs from "../pages/articles/C/the_Cubs/TheCubs";
import Dakk from "../pages/articles/D/Dakk/Dakk";
import Detoxique from "../pages/articles/D/Detoxique/Detoxique";
import LeDedale from "../pages/articles/D/le_Dedale/LeDedale";
import LeDernierHommeVivant from "../pages/articles/D/le_Dernier_Homme_Vivant/LeDernierHommeVivant";
import Dia from "../pages/articles/D/Dia/Dia";
import LaCiteeDesDomes from "../pages/articles/D/la_Citee_Des_Domes/LaCiteeDesDomes";
import LeDoc from "../pages/articles/D/le_Doc/LeDoc";
import Doyle from "../pages/articles/D/Doyle/Doyle";
import Evans from "../pages/articles/E/Evans/Evans";
import Fennister from "../pages/articles/F/Fennister/Fennister";
import LeFilmLogansRun from "../pages/articles/F/le_Film_Logans_run/LeFilmLogansRun";
import Flamegun from "../pages/articles/F/Flamegun/Flamegun";
import FleurDeVie from "../pages/articles/F/Fleur_De_Vie/FleurDeVie";
import Francis from "../pages/articles/F/Francis/Francis";
import Fugitif from "../pages/articles/F/Fugitif/Fugitif";
import Gant from "../pages/articles/G/Gant/Gant";
import LesGitansLibres from "../pages/articles/G/Les_Gitans_Libres/LesGitansLibres";
import LeGrandSommeil from "../pages/articles/G/le_Grand_Sommeil/LeGrandSommeil";
import Hallucinusine from "../pages/articles/H/Hallucinusine/Hallucinusine";
import Harry from "../pages/articles/H/Harry_7/Harry";
import Hologramme from "../pages/articles/H/Hologramme/Hologramme";
import Homer from "../pages/articles/H/Homer/Homer";
import Holly from "../pages/articles/H/Holly/Holly";
import Hoverstick from "../pages/articles/H/Hoverstick/Hoverstick";
import HypnoProfesseur from "../pages/articles/H/Hypno_Professeur/HypnoProfesseur";
import Illustrateurs from "../pages/articles/I/les_Illustrateurs/Illustrateurs";
import Illustration from "../pages/articles/I/Illustration/Illustration";
import Jaq from "../pages/articles/J/Jaq/Jaq";
import Jessica from "../pages/articles/J/Jessica/Jessica";
import JohnsonGeorgeClayton from "../pages/articles/J/Johnson_George_Clayton/JohnsonGeorgeClayton";
import Jonath from "../pages/articles/J/Jonath/Jonath";
import Judee from "../pages/articles/J/Judee/Judee";
import Kelly from "../pages/articles/K/Kelly/Kelly";
import Karenya from "../pages/articles/K/Karenya/Karenya";
import Lacy from "../pages/articles/L/Lacy/Lacy";
import Lilith from "../pages/articles/L/Lilith/Lilith";
import Logan from "../pages/articles/L/Logan/Logan";
import LogansRunRoman from "../pages/articles/L/Logans_run_roman/LogansRunRoman";
import LogansWorld from "../pages/articles/L/Logans_World/LogansWorld";
import Louveteau from "../pages/articles/L/louveteau/Louveteau";
import Lucrece from "../pages/articles/L/Lucrece/Lucrece";
import Machines from "../pages/articles/M/Machines/Machines";
import MarvelComics from "../pages/articles/M/Marvel_Comics/MarvelComics";
import Mary from "../pages/articles/M/Mary/Mary";
import Madison from "../pages/articles/M/Madison/Madison";
import MaisonDeVerre from "../pages/articles/M/maison_de_verre/MaisonDeVerre";
import MazeCar from "../pages/articles/M/Maze_Car/MazeCar";
import Modar from "../pages/articles/M/Modar/Modar";
import Molly from "../pages/articles/M/Molly/Molly";
import MotorCycle from "../pages/articles/M/motorcycle/MotorCycle";
import Needler from "../pages/articles/N/Needler/Needler";
import Ngc from "../pages/articles/N/NGC/Ngc";
import Nitro from "../pages/articles/N/Nitro/Nitro";
import NolanWilliamF from "../pages/articles/N/Nolan_William_F/NolanWilliamF";
import OldWashington from "../pages/articles/O/Old_Washington/OldWashington";
import Omnite from "../pages/articles/O/Omnite/Omnite";
import Paralax from "../pages/articles/P/Paralax/Paralax";
import Paravane from "../pages/articles/P/Paravane/Paravane";
import PeauNeuve from "../pages/articles/P/Peau_Neuve/PeauNeuve";
import Protagonistes from "../pages/articles/P/Les_Protagonistes/Protagonistes";
import PetiteGuerre from "../pages/articles/P/petite_Guerre/PetiteGuerre";
import Pisteur from "../pages/articles/P/Pisteur/Pisteur";
import PoupeeParlante from "../pages/articles/P/poupée_parlante/PoupeeParlante";
import Prince from "../pages/articles/P/Prince/Prince";
import QuartierGeneral from "../pages/articles/Q/Quartier_general_du_G.S/QuartierGeneral";
import ROnze from "../pages/articles/R/R11/ROnze";
import Regulateur from "../pages/articles/R/Régulateur/Regulateur";
import RevolverLimier from "../pages/articles/R/revolver_Limier/RevolverLimier";
import Ripper from "../pages/articles/R/Ripper/Ripper";
import Ritter from "../pages/articles/R/Ritter/Ritter";
import Rawls from "../pages/articles/R/Rawls/Rawls";
import Roebler from "../pages/articles/R/Roebler/Roebler";
import Rutago from "../pages/articles/R/Rutago/Rutago";
import Sanctuaire from "../pages/articles/S/Sanctuaire/Sanctuaire";
import Sandman from "../pages/articles/S/Sandman/Sandman";
import Sanson from "../pages/articles/S/Sanson/Sanson";
import Sawyer from "../pages/articles/S/Sawyer/Sawyer";
import Stanhope from "../pages/articles/S/Stanhope/Stanhope";
import Sterozine from "../pages/articles/S/Sterozine/Sterozine";
import Tangler from "../pages/articles/T/Tangler/Tangler";
import Tara from "../pages/articles/T/Tara/Tara";
import Thinker from "../pages/articles/T/Thinker/Thinker";
import TrottoirMecanique from "../pages/articles/T/Trottoir mécanique/TrottoirMecanique";
import TriDi from "../pages/articles/T/TriDi/TriDi";
import Titan from "../pages/articles/T/Titan/Titan";
import UniteDeVie from "../pages/articles/U/Unite de vie/UniteDeVie";
import Vapor from "../pages/articles/V/Vapor/Vapor";
import Vibrolame from "../pages/articles/V/Vibrolame/Vibrolame";
import Warden from "../pages/articles/W/Warden/Warden";
import Watchman from "../pages/articles/W/Watchman/Watchman";
import Webster from "../pages/articles/W/Webster/Webster";
import Wilson from "../pages/articles/W/Wilson/Wilson";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const routesConfig = [
  { path: "/", element: Home, exact: true },
  { path: "/lexique", element: Lexique },
  { path: "/timelines", element: Timeline },
  { path: "games", element: Games },
  { path: "portfolio", element: Portfolio },
  { path: "*", element: ErrorPage }, // Capture toutes les routes non définies
  // ------------------------------A----------------------------------------------
  { path: "les-acteurs-du-film", element: Acteurs },
  { path: "adam-1", element: Adam },
  { path: "adventure-comics", element: AdventureComics },
  { path: "aitken", element: Aitken },
  { path: "aigle-mécanique", element: AigleMecha },
  { path: "albert", element: Albert },
  { path: "andar", element: Andar },
  { path: "ankh", element: Ankh },
  { path: "arcade", element: Arcade },
  { path: "argos", element: Argos },
  // ----------------------------------B-----------------------------------------
  { path: "baleine", element: Baleine },
  { path: "ballard", element: Ballard },
  { path: "baxter", element: Baxter },
  { path: "bluewater-comics", element: BluewaterComics },
  { path: "borgia-riders", element: BorgiaRiders },
  { path: "boutique-du-sommeil", element: BoutiqueDuSommeil },
  { path: "box", element: Box },
  { path: "bradley", element: Bradley },
  // ----------------------------------C-----------------------------------------
  { path: "caisson-de-remémoration", element: CaissonDeRememoration },
  { path: "cape-steinbeck", element: CapeSteinbeck },
  { path: "cathedrale", element: Cathedrale },
  { path: "carrousel", element: Carrousel },
  { path: "charming-billy", element: CharmingBilly },
  { path: "chirurgien-mark.j", element: ChirurgienMarkJ },
  { path: "les-charognards", element: LesCharognards },
  { path: "le-circuit", element: LeCircuit },
  { path: "complexe-city", element: ComplexeCity },
  { path: "crazy-horse", element: CrazyHorse },
  { path: "crèche", element: CrecheIndustrielle },
  { path: "the-cubs", element: TheCubs },
  // ----------------------------------D---------------------------------------
  { path: "dakk", element: Dakk },
  { path: "détoxique", element: Detoxique },
  { path: "le-dédale", element: LeDedale },
  { path: "le-dernier-homme-vivant-sur-terre", element: LeDernierHommeVivant },
  { path: "dia", element: Dia },
  { path: "dômes", element: LaCiteeDesDomes },
  { path: "le-doc", element: LeDoc },
  { path: "doyle", element: Doyle },
  // ----------------------------------E---------------------------------------
  { path: "evans", element: Evans },
  // ----------------------------------F---------------------------------------
  { path: "fennister", element: Fennister },
  { path: "film-logan's-run", element: LeFilmLogansRun },
  { path: "flamegun", element: Flamegun },
  { path: "fleur-de-vie", element: FleurDeVie },
  { path: "francis", element: Francis },
  { path: "francis", element: Francis },
  { path: "fugitif", element: Fugitif },
  // ----------------------------------G---------------------------------------
  { path: "gant", element: Gant },
  { path: "les-gitans-libres", element: LesGitansLibres },
  { path: "deep-sleep", element: LeGrandSommeil },
  // ----------------------------------H--------------------------------------
  { path: "hallucinusine", element: Hallucinusine },
  { path: "harry-7", element: Harry },
  { path: "hologramme", element: Hologramme },
  { path: "homer", element: Homer },
  { path: "holly", element: Holly },
  { path: "the-hoverstick", element: Hoverstick },
  { path: "hypno-professeur", element: HypnoProfesseur },
  // ----------------------------------I---------------------------------------
  { path: "les-illustrateurs", element: Illustrateurs },
  { path: "illustration", element: Illustration },
  // ----------------------------------J---------------------------------------
  { path: "jaq", element: Jaq },
  { path: "jessica", element: Jessica },
  { path: "george-clayton-johnson", element: JohnsonGeorgeClayton },
  { path: "jonath", element: Jonath },
  { path: "judee-3", element: Judee },
  // ----------------------------------K---------------------------------------
  { path: "kelly-4", element: Kelly },
  { path: "karenya", element: Karenya },
  // ----------------------------------L---------------------------------------
  { path: "lacy-14", element: Lacy },
  { path: "lilith-14", element: Lilith },
  { path: "logan", element: Logan },
  { path: "logan's-run-roman", element: LogansRunRoman },
  { path: "logan's-world", element: LogansWorld },
  { path: "louveteau", element: Louveteau },
  { path: "lucrèce", element: Lucrece },
  // ----------------------------------M---------------------------------------
  { path: "les-machines", element: Machines },
  { path: "marvel-comics", element: MarvelComics },
  { path: "mary", element: Mary },
  { path: "madison", element: Madison },
  { path: "maison-de-verre", element: MaisonDeVerre },
  { path: "maze-car", element: MazeCar },
  { path: "modar", element: Modar },
  { path: "molly", element: Molly },
  { path: "motorcycle", element: MotorCycle },
  // ----------------------------------N---------------------------------------
  { path: "needler", element: Needler },
  { path: "ngc", element: Ngc },
  { path: "nitro", element: Nitro },
  { path: "william-f-nolan", element: NolanWilliamF },
  // ----------------------------------O---------------------------------------
  { path: "old-washington", element: OldWashington },
  { path: "omnite", element: Omnite },
  // ----------------------------------P---------------------------------------
  { path: "paralax", element: Paralax },
  { path: "paravane-de-police", element: Paravane },
  { path: "peau-neuve", element: PeauNeuve },
  { path: "(les)-protagonistes", element: Protagonistes },
  { path: "(les)-protagonistes", element: Protagonistes },
  { path: "la-petite-guerre", element: PetiteGuerre },
  { path: "pisteur", element: Pisteur },
  { path: "poupée-parlante", element: PoupeeParlante },
  { path: "prince", element: Prince },
  // ----------------------------------Q---------------------------------------
  { path: "quartier-général-du-g.s", element: QuartierGeneral },
  //-----------------------------------R---------------------------------------
  { path: "r-11", element: ROnze },
  { path: "régulateur", element: Regulateur },
  { path: "revolver-limier", element: RevolverLimier },
  { path: "ripper", element: Ripper },
  { path: "ritter", element: Ritter },
  { path: "rawls", element: Rawls },
  { path: "roebler", element: Roebler },
  { path: "rutago", element: Rutago },
  //-----------------------------------S---------------------------------------
  { path: "sanctuaire", element: Sanctuaire },
  { path: "sandman", element: Sandman },
  { path: "sanson", element: Sanson },
  { path: "sawyer", element: Sawyer },
  { path: "stanhope", element: Stanhope },
  { path: "sterozine", element: Sterozine },
  //-----------------------------------T---------------------------------------
  { path: "tangler", element: Tangler },
  { path: "tara", element: Tara },
  { path: "the-thinker", element: Thinker },
  { path: "trottoir-mécanique", element: TrottoirMecanique },
  { path: "tri-di", element: TriDi },
  { path: "spacecraft-titan", element: Titan },
  //-----------------------------------U---------------------------------------
  { path: "unité-de-vie", element: UniteDeVie },
  //-----------------------------------V---------------------------------------
  { path: "vapor", element: Vapor },
  { path: "vibrolame", element: Vibrolame },
  //-----------------------------------W---------------------------------------
  { path: "warden", element: Warden },
  { path: "watchman", element: Watchman },
  { path: "webster", element: Webster },
  { path: "wilson", element: Wilson },
];

export default routesConfig;
