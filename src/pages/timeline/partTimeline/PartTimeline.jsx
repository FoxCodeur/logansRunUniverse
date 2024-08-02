import React from "react";
import "./PartTimeline.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import sphere from "../../../assets/images/images-générales/red_cristal.png";

const PartTimeline = () => {
  return (
    <>
      <div className="redtiretTimeline"></div>
      <div className="timeline-container">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="21ème siècle"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                L'humanité qui se lance dans la conquête spatiale, échoue dans
                ses tentatives de quitter le système solaire.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            // contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="6 mars 2078"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                La citée sous marine Molly est engloutie sous les eaux.
              </p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="7 dec 2095"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                la 3ème guerre mondiale débute avec les bombardements nucléaires
                des plus grandes capitales du monde. Nul ne sait quelle nation
                est a l'origine du conflit.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="31 jan 2096"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                Hiver nucléaire : les gens meurent par millions à cause des
                radiations et du manque de nourriture.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2112"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                Création de la N.G.C - New Global Confederacy{" "}
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2115"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                Naissance du quorum des penseurs
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2120"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                L'avènement des complexes : les derniers intellectuels qui se
                sont regroupés élaborent d'abord des plans puis créent une main
                d'œuvre robotique. Celle-ci va ériger pour eux plusieurs citées
                hautes de mille mètres.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2129"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                En l'espace de cinq ans, les citées complexes du monde entier
                ouvrent enfin leur porte. Hélas, il n'y a pas assez de place
                pour tous et ceux qui y sont admis sous certaines conditions
                doivent se faire une raison, car désormais ils deviennent la
                propriété exclusive des penseurs. Les survivants à l'agonie ceux
                qui préfèrent rester dehors ne survivront pas longtemps, car le
                monde contaminé n'est plus viable.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2142"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                Voici la date qui acte la fin de l'humanité. Les premières
                générations qui ont subi la guerre ont toutes péris du mal
                radioactif.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2154"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                L'humanité s'apprête à franchir un nouveau cap décisif, son
                extinction. En effet, dans le complexe de Londres, le tout
                dernier humain vient de succomber des suites du mal radioactif.
                Les Penseurs ont eux aussi succombé, remplacés par le
                superordinateur, THINKER.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="2230"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                la nouvelle ère se concrétise. La Terre panse peu à peu ses
                blessures, bien qu'une grand partie des continents soient encore
                dévastés les machines sont désormais prêtes, il est plus que
                temps de recréer la race humaine. Ces dernières années il y a eu
                de nombreuses avancées en génie génétique/clonage/cellules
                souches mais aussi dans le domaine de la nanotechnologie.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="19 juillet 2231"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">
                Un ovule fertile est prélevé de la réserve cryo puis placé dans
                la chambre d'incubation. Neuf mois plus tard le premier trans
                humain nait de ce système sans faille: Adam-1. Son numéro
                d'identification, 31597. Il est le premier fils du THINKER.
              </p>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element"
            contentArrowStyle={{ borderRight: "7px solid rgb(33, 150, 243)" }}
            date="24XX"
            dateClassName="vertical-timeline-element-date"
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          >
            <div className="timelineBoxContent">
              <p className="paragrapheStyleTimeline">Naissance de Logan 6</p>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            icon={
              <img
                src={sphere}
                alt="la sphère rouge représente le cristal de vie"
                style={{ width: "100%", height: "100%" }}
              />
            }
          />
        </VerticalTimeline>
      </div>
    </>
  );
};

export default PartTimeline;
