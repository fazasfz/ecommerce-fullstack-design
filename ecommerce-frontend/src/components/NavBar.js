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
