import React from "react";

function ProductCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>Price: ₹{props.price}</p>
      <p>Category: {props.category}</p>
      <p>Status: {props.stock}</p>
      <button className="btn">Buy Now</button>
    </div>
  );
}

export default ProductCard;