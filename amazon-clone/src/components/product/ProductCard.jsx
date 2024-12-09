import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import { Link } from "react-router-dom";
import classes from "./Product.module.css"

function ProductCard({ product, flex, renderDesc}) {
  if (!product) {
    return <div>No product data available</div>;
  }

  const { image, title, id, rating, price, description } = product;

  return (
    <div className={`${classes.card_container} ${flex?classes.product_flexed :''}`}>
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
        <div className={classes.rating}>
          <Rating value={rating.rate} precision={0.1} />
          <small>{rating.count}</small>
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>add to cart</button>
      </div>
    </div>
  );
}


export default ProductCard;
