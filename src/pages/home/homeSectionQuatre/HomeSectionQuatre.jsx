import React from "react";
import "./HomeSectionQuatre.scss";
import "../Home.scss";
import concept1 from "../../../assets/images/images-générales/titre1.png";
import concept2 from "../../../assets/images/images-générales/titre2.png";

const HomeSectionQuatre = () => {
  return (
    <div className="sectionQuatreContainer">
      <h2 className="fancy-undeline">Le projet</h2>
      <div className="scroll-reveal">
        <p>
          <span>
            Au départ lorsque William F. Nolan jette sur le papier le concept de
            l’Âge de Cristal, ce dernier envisage juste de l'écrire en simple
            nouvelle. Enthousiaste il fait aussitôt part de l'idée à son ami et
            écrivain, George Clayton Johnson, qui à la simple lecture du script,
            voit matière à un bon scénario de film. Donc, convaincus par le
            potentiel du projet, le duo se met aussitôt au travail. Le roman
            achevé à l’été 65 est proposé dès le mois de février 1966 à
            plusieurs grands éditeurs, puis mis en vente sur la scène
            hollywoodienne. En octobre de la même année, alors que le livre
            n’est pas encore publié, un producteur indépendant du nom de Stan
            Canter se dit intéressé par les droits cinématographiques. Canter
            accepte le prix fixé par Nolan et Johnson : une avance de 10000
            dollars + 90000 devant être réglés dans les douze mois… (Budget
            colossal pour l’époque). La transaction mettra cependant plus d’un
            an à se concrétiser, jusqu’à ce jour où Canter leur annonce qu’il
            tient le restant de la somme à leur disposition… Ce dernier leur
            rend ainsi visite chez l’éditeur où il agite devant leurs yeux un
            chèque de 40000 dollars. Nolan fait remarquer au producteur que la
            somme ne correspond pas au montant initial négocié, Canter rétorque
            ne pas pouvoir faire mieux. Face à l’entêtement de Nolan et Johnson
            qui refusent de brader leur œuvre, Canter déchire le chèque de rage,
            il leur exhibe alors le morceau de papier sur lequel figure sa
            signature, puis l’avale ! L’histoire aurait pu s’arrêter là, mais
            non, en novembre 1967, Nolan et Johnson apprennent que la MGM
            souhaite acquérir les droits cinématographiques du roman. Les deux
            auteurs reçoivent un vendredi matin l’offre suivante: 10000 dollars
            d’avance, 60000 restants à régler Nolan et Johnson s’obstinent et
            refusent : ils veulent une avance de 15000 dollars, pour un montant
            total de 100 000 dollars: à prendre ou à laisser. La MGM s’accorde
            un délai de réflexion. Le studio assure qu’il donnera sa réponse
            lundi matin à la première heure. Un très long week-end s’ensuit pour
            les deux auteurs, fort heureusement l’attente n’aura pas été vaine,
            car la réponse de la MGM arrive en temps et en heure : l’Âge de
            Cristal sera bien adapté à l’écran, et ce en accord total avec le
            montant que ses créateurs ont fixé.{" "}
          </span>
        </p>
      </div>
      <div className="conceptart">
        <img
          className="conceptartWidth"
          src={concept1}
          alt="concept de logo titre francisé l'age de cristal version cercle rouge"
        />
        <img
          className="conceptartWidth"
          src={concept2}
          alt="concept de logo titre francisé l'age de cristal version cristal rouge"
        />
      </div>
    </div>
  );
};

export default HomeSectionQuatre;
