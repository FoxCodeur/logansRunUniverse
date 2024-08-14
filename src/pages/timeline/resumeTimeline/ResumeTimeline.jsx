// ResumeTimeline.js
import React, { useState } from "react";
import { Button, Modal, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Importer l'icône de fermeture
import "./ResumeTimeline.scss";

const ResumeTimeline = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="box_center">
      <p className="timelineTitleResume">
        La Terre, un jour, décida d'être seule...
      </p>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpen}
        //Material-UI vous permet de passer des styles directement en utilisant
        // les props du composant. Vous pouvez utiliser les propriétés sx pour
        // appliquer des styles directement au composant.
        sx={{
          borderRadius: "12px",
          padding: "2px 10px",
          fontSize: "14px",
          marginLeft: "5px",
          fontWeight: "bold",
          boxShadow: 3,
          border: "2px solid #fff",
          transition: "0.3s",
          "&:hover": {
            backgroundColor: "#0056b3",
            boxShadow: 6,
          },
          "&:active": {
            backgroundColor: "#003d7a",
          },
        }}
      >
        En savoir plus
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        // Les attributs aria-labelledby et aria-describedby sont utilisés pour
        // fournir des informations contextuelles supplémentaires sur le modal aux
        // technologies d'assistance.
        aria-labelledby="modal-title" //signifie que l'élément avec l'ID modal-title
        // (qui est un <Typography> avec le texte "Informations") sert de titre pour
        // le modal. Cela aide les lecteurs d'écran à lire le titre du modal aux
        // utilisateurs, leur donnant une idée claire de ce qu'ils sont sur le point
        // de voir.
        aria-describedby="modal-description" // signifie que l'élément avec l'ID
        // modal-description (qui est un <Typography> contenant une description
        // longue) fournit des détails supplémentaires sur le contenu ou le but du
        // modal.
      >
        <Box className="modalStyle">
          <div className="modalHeader">
            <Typography
              id="modal-title"
              variant="h6"
              component="h2"
              sx={{
                color: "#1976d2",
                fontWeight: "700",
                marginLeft: "2rem",
                marginBottom: "5px",
              }}
            >
              La dictature des Machines
            </Typography>
            <CloseIcon className="closeIcon" onClick={handleClose} />
          </div>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            Irrémédiablement. Chaque bébé, à la naissance, se voyait greffer
            dans la paume un cristal coloré rythmant le passage du temps. Jaune
            la petite enfance, vert, bleu, rouge la maturité, et enfin noir, la
            fin du voyage : le moment pour chacun, à vingt et un ans, de se
            livrer au Profond Sommeil, à la mort... Logan se sent à sa place en
            ce XXIIe siècle. Sans états d'âme dans le meilleur des mondes
            possibles. Il fait son boulot de flic. Traquer, liquider les
            Fugitifs, les réfractaires au Profond Sommeil. Et qu'importe la
            légende du mythique « Sanctuaire » où les rebelles au système
            mouraient de vieillesse. Logan n'en a que faire. Jusqu'à ce que son
            cristal commence à s'assombrir : il lui reste vingt-quatre heures à
            vivre.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ResumeTimeline;
