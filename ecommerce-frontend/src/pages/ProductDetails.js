import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/productsData'; // Adjust the path based on your folder structure

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetails;
/*src/pages/ProductDetails.js
Purpose: Represents the Product Details Page.

Usage: Dynamically fetches a product’s details using useParams() from React Router to extract the product ID from the URL. */