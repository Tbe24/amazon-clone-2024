import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat"
import { Link } from "react-router-dom";
import classes from "./Product.module.css"

// function ProductCard({ Product }) {
//   console.log(Product); // Debugging
//   const { image, title, id, rating, price } = Product;

//   return (
//     <div className={classes.card_container}>
//       <Link to="">
//         <img src={image} alt={title || "Product Image"} />
//       </Link>
//       {/* Other code remains unchanged */}
//       <div>
//         <h3>{title}</h3>
//         <div className={classes.rating}>
//           {/* rating */}
//           <Rating value={rating.rate} precision={0.1} />
//           {/* count */}
//           <small>{rating.count}</small>
//         </div>
//         <div>
//           {/* price */}
//           <CurrencyFormat amount={price} />
//         </div>
//         <button className={classes.button}>add to cart</button>
//       </div>
//     </div>
//   );
// }
function ProductCard({ product }) {
  if (!product) {
    return <div>No product data available</div>;
  }

  const { image, title, id, rating, price } = product;

  return (
    <div className={classes.card_container}>
      <Link to="">
        <img src={image} alt={title} />
      </Link>
      <div>
        <h3>{title}</h3>
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
