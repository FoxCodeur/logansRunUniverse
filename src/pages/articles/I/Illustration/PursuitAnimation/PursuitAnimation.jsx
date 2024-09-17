import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./PursuitAnimation.scss";
import pursuit0 from "../../../../../assets/images/images-générales/logo_000.png";
import pursuit01 from "../../../../../assets/images/images-générales/logo_001.png";
import pursuit02 from "../../../../../assets/images/images-générales/logo_002.png";
import pursuit03 from "../../../../../assets/images/images-générales/logo_003.png";
import pursuit04 from "../../../../../assets/images/images-générales/logo_004.png";
import pursuit05 from "../../../../../assets/images/images-générales/logo_005.png";
import pursuit06 from "../../../../../assets/images/images-générales/logo_006.png";
import pursuit07 from "../../../../../assets/images/images-générales/logo_007.png";
import pursuit08 from "../../../../../assets/images/images-générales/000_pursuit.png";
import pursuit09 from "../../../../../assets/images/images-générales/01_pursuit.png";
import pursuit10 from "../../../../../assets/images/images-générales/02_pursuit.png";
import pursuit11 from "../../../../../assets/images/images-générales/03_pursuit.png";
import pursuit12 from "../../../../../assets/images/images-générales/04_pursuit.png";
import pursuit13 from "../../../../../assets/images/images-générales/05_pursuit.png";
import pursuit14 from "../../../../../assets/images/images-générales/06_pursuit.png";
import pursuit15 from "../../../../../assets/images/images-générales/07_pursuit.png";
import pursuit16 from "../../../../../assets/images/images-générales/08_pursuit.png";
import pursuit17 from "../../../../../assets/images/images-générales/09_pursuit.png";

const PursuitAnimation = () => {
  return (
    <div className="pursuitContainer">
      <LazyLoadImage
        className="pursuit pursuitContainerImg"
        src={pursuit0}
        alt="première image animation avec bakground noir"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_1 pursuitContainerImg"
        src={pursuit01}
        alt="deuxième image animation avec titre Logan's run en blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_2 pursuitContainerImg"
        src={pursuit02}
        alt="dans l'ordre d'apparition des titres Logan's run du haut vers le bas jaune, blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_3 pursuitContainerImg"
        src={pursuit03}
        alt="dans l'ordre d'apparition des titres Logan's run du haut vers le bas rouge, jaune, blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_4 pursuitContainerImg"
        src={pursuit04}
        alt="dans l'ordre d'apparition des titres Logan's run du haut vers le bas rouge, rouge, jaune, blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_5 pursuitContainerImg"
        src={pursuit05}
        alt="dans l'ordre d'apparition des titres Logan's run du haut vers le bas bleu, rouge, rouge, jaune, blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_6 pursuitContainerImg"
        src={pursuit06}
        alt="dans l'ordre d'apparition des titres Logan's run du haut vers le bas bleu, bleu, rouge, rouge, jaune, blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_7 pursuitContainerImg"
        src={pursuit07}
        alt="dans l'ordre d'apparition des titres Logan's run du haut vers le bas bleu, bleu, bleu, rouge, rouge, jaune, blanc"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_8 pursuitContainerImg"
        src={pursuit08}
        alt="white background"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_9 pursuitContainerImg"
        src={pursuit09}
        alt="apparition limier"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_10 pursuitContainerImg"
        src={pursuit10}
        alt="apparition texte"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_11 pursuitContainerImg"
        src={pursuit11}
        alt="scène qui représente un fugitif vétu de rouge dans une ruelle"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_12 pursuitContainerImg"
        src={pursuit12}
        alt="plan de coupe du fugitif qui court dans la ruelle"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_13 pursuitContainerImg"
        src={pursuit13}
        alt="texte informatif sur le contexte"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_14 pursuitContainerImg"
        src={pursuit14}
        alt="apparition d'un limier tapi dans l'ombre avec son arme de service"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_15 pursuitContainerImg"
        src={pursuit15}
        alt="apparition d'un deuxième limier qui survient à l'arrière du fugitif"
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_16 pursuitContainerImg"
        src={pursuit08}
        alt=""
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_17 pursuitContainerImg"
        src={pursuit16}
        alt=""
        effect="blur"
      />
      <LazyLoadImage
        className="pursuit pursuit_18 pursuitContainerImg"
        src={pursuit17}
        alt=""
        effect="blur"
      />
    </div>
  );
};

export default PursuitAnimation;
