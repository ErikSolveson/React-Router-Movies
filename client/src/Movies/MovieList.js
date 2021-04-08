import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function MovieList(props) {
  console.log(props);
  return (
    <div className="movie-list">
      {props.props.map((movie) => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { id, title, director, metascore } = props.movie;
  const { url } = useRouteMatch();
  console.log(`this is the current url ${url}`);

  return (
    <Link to={`${url}/${id}`}>
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
      </div>
    </Link>
  );
}
