import React, { useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductCard from "../../components/product/ProductCard";
import {productUrl} from "../../Api/endpoint"
import classes from "./ProductDetail.module.css";

function ProductDetail() {
  const { productId } = useParams(); // Extract productId from route params
  const [product, setProduct] = useState(null); // Initialize product as null
  const [loading, setLoading] = useState(true); // Track loading state
console.log(`Product ID: ${productId}`);

  useEffect(() => {
    setLoading(true);
    axios
        .get(`${productUrl}/products/${productId}`)// Fetch product by ID
        .then((res) => {
          setProduct(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching product:", err);
          setLoading(false);
        });
  }, [productId]);

  if (loading) {
    return (
      <LayOut>
        <p>Loading product details...</p>
      </LayOut>
    );
  }

  if (!product) {
    return (
      <LayOut>
        <p>Product not found.</p>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <section className={classes.product_detail}>
        <ProductCard product={product} />{" "}
        {/* Pass product data to ProductCard */}
      </section>
    </LayOut>
  );
}

export default ProductDetail;
