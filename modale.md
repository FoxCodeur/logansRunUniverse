Contexte de la Modale

C'est une fenêtre contextuelle qui s'affiche au click d'un bouton. On demande à l'utilisateur de cliquer sur sur un bouton et lorsque celui-ci a lu l'information il clique sur un autre bouton (ou croix) qui ferme la modale.


1.1 Installation des Dépendances
Tout d'abord on installe Material-UI et les icônes.
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

1.2 Importation dans ResumeTimeline.js
import { Button, Modal, Box, Typography } from "@mui/material"; //c'est le bouton de départ.
import CloseIcon from "@mui/icons-material/Close"; // Icône de fermeture

Étape 2: Gestion de l'État de la Modale
2.1 Définir les États
On utilise useState pour gérer l'état d'ouverture de la modale :
const [open, setOpen] = useState(false);

2.2 Fonctions pour Ouvrir et Fermer la Modale
A cet effet on définit deux fonctions :
    handleOpen : qui ouvre la modale en mettant open à true.
    handleClose : qui ferme la modale en mettant open à false.

        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);


Material-UI vous permet de passer des styles directement en utilisant les props du composant. Vous pouvez utiliser les propriétés sx pour appliquer des styles en direct sans passer par un fichier de style.





