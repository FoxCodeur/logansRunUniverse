import React from "react";
import { NavLink } from "react-router-dom";
import "./SectionLexique.scss";
import data from "../../../data.json";

const SectionLexique = () => {
  const sectionAData = data.A;
  const sectionBData = data.B;
  const sectionCData = data.C;
  const sectionDData = data.D;
  const sectionEData = data.E;
  const sectionFData = data.F;
  const sectionGData = data.G;
  const sectionHData = data.H;
  const sectionIData = data.I;
  const sectionJData = data.J;
  const sectionKData = data.K;
  const sectionLData = data.L;
  const sectionMData = data.M;
  const sectionNData = data.N;
  const sectionOData = data.O;
  const sectionPData = data.P;
  const sectionQData = data.Q;
  const sectionRData = data.R;
  const sectionSData = data.S;
  const sectionTData = data.T;
  const sectionUData = data.U;
  const sectionVData = data.V;
  const sectionWData = data.W;

  return (
    <div className="lexique">
      {/* ------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="A" className="letter">
          A
          <span className="chevron-up-down">
            <a href="#B">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#B">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ---------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionAData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionAData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionAData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionAData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run"></div>
              <div className="les_medias_logans_run">
                {sectionAData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                    onError={(e) =>
                      console.error("Erreur de chargement de l'image", e)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
          {/* -------------------------------------------------------------- */}
          {/* -------------------------------------------------------------- */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="B" className="letter">
          B
          <span className="chevron-up-down">
            <a href="#C">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#A">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* --------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionBData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionBData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionBData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionBData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionBData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                    onError={(e) =>
                      console.error("Erreur de chargement de l'image", e)
                    }
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ---------------------------------------------------------------- */}
          {/* ---------------------------------------------------------------- */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="C" className="letter">
          C{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#D">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#B">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ----------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionCData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionCData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionCData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionCData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="D" className="letter">
          D{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#E">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#C">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ----------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionDData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionDData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionDData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionDData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* --------------------------------------------------------------- */}
          {/* --------------------------------------------------------------- */}
        </ul>
      </div>
      {/* --------------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="E" className="letter">
          E{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#F">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#D">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ----------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionEData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionEData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionEData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionEData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* -------------------------------------------------------------- */}
          {/* -------------------------------------------------------------- */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="F" className="letter">
          F{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#G">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#E">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ---------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionFData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionFData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionFData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionFData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ---------------------------------------------------------------- */}
          <div className="spoiler">
            <div className="les_medias_logans_run"></div>
          </div>
          {/* ---------------------------------------------------------------- */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="G" className="letter">
          G{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#H">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#F">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ---------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionGData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionGData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionGData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionGData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="H" className="letter">
          H{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#I">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#G">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ---------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionHData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionHData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionHData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionHData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="I" className="letter">
          I{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#J">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#H">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ---------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionIData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionIData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionIData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionIData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="J" className="letter">
          J{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#K">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#I">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* ---------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionJData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionJData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionJData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionJData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ------------------------------------------------------------------------------ */}
      <div className="set">
        <h2 id="K" className="letter">
          K{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#L">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#J">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionKData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionKData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionKData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionKData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="L" className="letter">
          L{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#M">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#K">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionLData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionLData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionLData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionLData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="M" className="letter">
          M{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#N">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#L">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionMData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionMData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionMData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionMData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="N" className="letter">
          N{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#O">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#L">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionNData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionNData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionNData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionNData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="O" className="letter">
          O{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#P">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#N">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionOData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionOData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionOData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionOData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="P" className="letter">
          P{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#Q">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#O">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionPData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionPData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionPData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionPData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="Q" className="letter">
          Q{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#R">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#P">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionQData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionQData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionQData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionQData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="R" className="letter">
          R{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#S">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#Q">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionRData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionRData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionRData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionRData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="S" className="letter">
          S{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#T">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#R">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionSData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionSData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionSData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionSData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="T" className="letter">
          T{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#U">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#S">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionTData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionTData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionTData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionTData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="U" className="letter">
          U{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#V">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#T">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionUData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionUData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionUData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionUData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="V" className="letter">
          V{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#W">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#U">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionVData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionVData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionVData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionVData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="W" className="letter">
          W{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#X">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#V">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
        <ul className="spoilerContainer">
          {/* Object.keys(sectionCData) récupère les clés de l'objet sectionAData. */}
          {/* .map((key, index) => { ... }) applique une fonction à chaque clé de l'objet,
           générant une liste d'éléments. */}
          {Object.keys(sectionWData).map((key, index) => (
            <div className="spoiler" key={index}>
              <NavLink
                className="teaser"
                to={`/${sectionWData[key].titre
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
              >
                {sectionWData[key].titre}
              </NavLink>
              <div className="les_medias_logans_run">
                {sectionWData[key].imageMedia.map((image, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={image}
                    alt="icon"
                    className="icon-image"
                  />
                ))}
              </div>
            </div>
          ))}
          {/* ------------------------------------------------------------------ */}
          {/* ------------------------------------------------------------------ */}
        </ul>
      </div>
      {/* ---------------------------------------------------------------------- */}
      <div className="set">
        <h2 id="X" className="letter">
          X{/* emplacement de l'initiale */}
          <span className="chevron-up-down">
            <a href="#Y">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 416c-8.188 0-16.38-3.125-22.62-9.375l-192-192c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L224 338.8l169.4-169.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-192 192C240.4 412.9 232.2 416 224 416z" />
              </svg>
            </a>
          </span>
          <span className="chevron-up-down">
            <a href="#W">
              <svg
                width="21px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M416 352c-8.188 0-16.38-3.125-22.62-9.375L224 173.3l-169.4 169.4c-12.5-12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l192-192c12.5-12.5 32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25C432.4 348.9 424.2 352 416 352z" />
              </svg>
            </a>
          </span>
        </h2>
        {/* -------------------------------------------------------------------- */}
      </div>
    </div>
  );
};

export default SectionLexique;
