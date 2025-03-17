/*src/App.js
Purpose: The main application file that ties everything together.

Usage: Contains the React Router logic to navigate between pages (Home, ProductListing, ProductDetails, Cart) and includes the NavBar and Footer components.*/import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div>
        {/* Header Section */}
        <header>
          <NavBar />
          <h1>Welcome to My eCommerce Store!</h1>
        </header>
        
        {/* Main Content Section */}
        <main>
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={<Home />} />
            
            {/* Product Listing Page Route */}
            <Route path="/products" element={<ProductListing />} />
            
            {/* Product Details Page Route */}
            <Route path="/products/:id" element={<ProductDetails />} />
            
            {/* Cart Page Route */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        
        {/* Footer Section */}
        <footer>
          <p>© 2025 My eCommerce Store</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

/*
 How It Works:
When users navigate to /, the Home page is displayed.

When they visit /products, the Product Listing page is shown.

If they click on a product and are taken to /products/:id, the Product Details page appears with dynamic product information.

The Cart page is displayed when they navigate to /cart.
*/
