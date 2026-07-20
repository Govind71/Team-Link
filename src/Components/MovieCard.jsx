import React from "react";

function MovieCard(props) {
  return (
    <div className="card">
      <img src={props.poster} alt={props.name} />
      <h2>{props.name}</h2>
      <p>⭐ {props.rating}</p>
      <p>Release Year: {props.year}</p>
    </div>
  );
}

export default MovieCard;