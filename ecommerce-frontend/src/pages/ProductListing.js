  import React from 'react';
  import products from '../data/productsData'; // Adjust the path based on your folder structure
import './ProductListing.css'; // For styling

function ProductListing() {
  return (
    <div className="grid-container">
      {products.map((product) => (
        <div className="grid-card" key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
/*src/pages/ProductListing.js
Purpose: Represents the Product Listing Page.

Usage: Displays all products in a grid layout. Data is fetched dynamically from productsData.js or later from the backend. */
  