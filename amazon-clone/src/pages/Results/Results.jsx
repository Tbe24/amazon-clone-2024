import React, { useState, useEffect } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { productUrl } from "../../Api/endpoint";
import axios from "axios";
import classes from "./Results.module.css";
import ProductCard from "../../components/product/ProductCard";

function Results() {
  const [results, setresults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();
  console.log("Category Name:", categoryName);

useEffect(() => {
  setLoading(true);
  axios
    .get(`${productUrl}/products/category/${categoryName}`)
    .then((res) => {
      console.log("API Response:", res.data); // Check the response
      setresults(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("API Error:", err); // Log errors
      setError("Failed to fetch products. Please try again later.");
      setLoading(false);
    });
}, [categoryName]);


  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category /{categoryName}</p>
        <hr />
        {error && <p className={classes.error}>{error}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => {
              console.log("Product:", product); // Debugging the product object
              return <ProductCard key={product?.id} product={product} />;
            })}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;
