/*src/components/NavBar.js
Purpose: Contains the navigation bar for your app. It's a reusable component and appears on every page.

Usage: Includes links like Home, Products, Cart, etc. Can be styled using the accompanying NavBar.css.*/
import React from 'react';

function NavBar() {
  return (
    <nav>
      <h1>My eCommerce Store</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
