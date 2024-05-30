import React from "react";
import "./HomeNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const HomeNav = () => {
  return (
    <div className="HomeNavContainer">
      <div className="faGlobe_container Icon_box_center">
        <FontAwesomeIcon icon={faGlobe} className="faGlobe" />
        <div className="faGlobe_Text">Flash d'informations</div>
      </div>

      <div className="content_flash_infos">
        <p>
          <time dateTime="2116-12-21">21 décembre 2116</time>. Le cycle de vie
          des SAGITTAIRES 17 s'achève aujourd'hui. Attention, les inscriptions
          au crématorium doivent s'effectuer trente minutes avant le départ du
          carrousel. Ne redoute pas tant l'épreuve citoyen, car comme tout un
          chacun tu renaîtras en tant que bébé dans une citées couveuses. La
          règle est ainsi faite: l'humain vit vingt et un ans, pas un jour de
          plus. Prétendre à plus contreviendrait à l'équilibre! Par ailleurs, ce
          genre de pensées déviantes doivent être systématiquement dénoncées à
          l'autorité. Nos protecteurs limiers ne tuent pas, ils terminent ceux
          qui contestent l'ordre, sans exception. Sache bien que la fleur de vie
          rouge clignotante implantée dans le creux de ta main ne virera jamais
          au noir, c'est juste impossible. La voici cette immortalité tant
          convoitée par le peuple: réincarnation! Le compte à rebours tourne
          Sagitaire 17, il ne te reste maintenant plus que trois heures vingt
          six minutes et sept seconde avant le prochain Carrousel. La ville de
          Bordeaux vous souhaite à tous et à toutes une agréable journée.
          Visiteurs, amis, concitoyens il reste encore des places assises à
          l'Arena, venez nombreux assister à la purification de vos frères et
          soeurs. En cette fin d’année 2116, le renouveau va bientôt débuter...
        </p>
      </div>
    </div>
  );
};

export default HomeNav;
