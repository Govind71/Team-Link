import React from "react";

function MenuItem(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.dish} />
      <h2>{props.dish}</h2>
      <p>₹{props.price}</p>
      <p>{props.category}</p>
      <p>⭐ {props.rating}</p>
    </div>
  );
}

export default MenuItem;