  import React from 'react';
  import products from '../data/productsData'; // Adjust the path based on your folder structure
  import './Home.css'; // Optional for styling
  
  function Home() {
    return (
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  }
  
  export default Home;
   /*src/pages/Home.js
Purpose: Represents the Home Page.

Usage: Displays a simple UI with product cards using the fake JSON data from productsData.js. */