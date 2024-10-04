import React, { useEffect, useState } from "react";
import "./HomeSectionDbMovies.scss";
import "../Home.scss";
import axios from "axios";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HomeSectionDbMovies = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiKey = "1b023d964223701c40d5eafe769e7601";
    axios
      .get(
        `https://api.themoviedb.org/3/movie/10803?api_key=${apiKey}&language=fr&append_to_response=credits`
      )
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }, []);

  // Calculer le pourcentage d'évaluation
  const votePercentage = data ? data.vote_average * 10 : null;

  return (
    <div>
      {data ? (
        <div className="sectionContainer">
          <div className="dbMoviesHome_sectionGauche box_center">
            {data.poster_path && (
              <LazyLoadImage
                className="posterLogansRun"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
                loading="lazy"
              />
            )}
          </div>
          <div className="dbMoviesHome_sectionDroite">
            <h1>{data.title}</h1>
            <p>
              <span className="badge">Date de sortie</span> {data.release_date}
            </p>
            {data.genres && (
              <p>
                <span className="badge">Genre</span>{" "}
                {data.genres.map((genre, index) => (
                  <span key={genre.id}>
                    {genre.name}
                    {index < data.genres.length - 1 && ", "}
                  </span>
                ))}
              </p>
            )}
            <p>
              <span className="badge">Durée</span> {data.runtime} minutes
            </p>
            {votePercentage && (
              <p>
                <span className="badge">User Rating</span> {votePercentage}%
              </p>
            )}
            <p className="tagline">{data.tagline}</p>
            <p>
              <span className="badge">Synopsis </span>
              {data.overview}
            </p>
            <p>
              <span className="badge">Société de production</span>{" "}
              {data.production_companies.map((company) => (
                <span key={company.id}>{company.name} </span>
              ))}
            </p>
            <p>
              <span className="badge">Budget</span>{" "}
              {data.budget.toLocaleString()}
            </p>
            <p>
              <span className="badge">Recette</span>{" "}
              {data.revenue.toLocaleString()}
            </p>
            <p>
              <span className="badge">Écrivains et scénaristes</span>{" "}
              {data.credits &&
                data.credits.crew
                  .filter((crewMember) => crewMember.department === "Writing")
                  .map((writer, index, array) => (
                    <span key={writer.id}>
                      {writer.name}
                      {index !== array.length - 1 && ", "}
                    </span>
                  ))}
            </p>
            <p>
              <span className="badge">Réalisateur</span>{" "}
              {data.credits &&
                data.credits.crew
                  .filter((crewMember) => crewMember.department === "Directing")
                  .slice(0, 1)
                  .map((director) => (
                    <span key={director.id}>{director.name} </span>
                  ))}
            </p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomeSectionDbMovies;
