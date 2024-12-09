import axios from 'axios';
import React, { useState, useEffect } from "react";
import ProductCard from './ProductCard';
import Loader from '../Loader/Loader';
import classes from "./Product.module.css"

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <section className={classes.products_container}>
      {loading ? (
        <Loader /> // Replace with a skeleton loader component
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </section>
  );
}


export default Product