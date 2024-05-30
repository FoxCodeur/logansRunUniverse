import React, { useEffect, useState } from "react";
import "./HomeSectionDbMovies.scss";
import "../Home.scss";
import axios from "axios";

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
          <div className="dbMoviesHome_sectionGauche">
            {data.poster_path && (
              <img
                className="posterLogansRun"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                alt={data.title}
              />
            )}
          </div>
          <div className="dbMoviesHome_sectionDroite">
            <h1>{data.title}</h1>
            <p>
              <span className="badge">Date de sortie</span> {data.release_date}{" "}
              {/* Afficher la date de sortie */}
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
            <p>
              {votePercentage && (
                <p>
                  <span className="badge">User Rating</span> {votePercentage}%
                </p>
              )}
              <p className="tagline">{data.tagline}</p>
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
            {/* Afficher les écrivains */}
            <p>
              <span className="badge">Écrivains et scénaristes</span>{" "}
              {/* On veux s'assurer d'accéder aux données de data.credits.crew
                (data.credits est-il nul ou non défini?) */}
              {data.credits &&
                data.credits.crew
                  //On filtre data.credits.crew pour obtenir les membres de l'équipe
                  //du département "Writing", à savoir les écrivains ou scénaristes
                  .filter((crewMember) => crewMember.department === "Writing")
                  //Après le nom de chaque écrivain, nous avons une expression conditionnelle
                  // ({index !== array.length - 1 && ", "}) qui vérifie si l'écrivain actuel
                  //n'est pas le dernier élément du tableau. Si ce n'est pas le cas, une virgule
                  // suivie d'un espace est ajoutée après le nom de l'écrivain. Cela garantit que
                  // les noms d'écrivains sont séparés par des virgules.
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
