import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
function App() {
  return (
    <div>
      <header>
        <h1>Welcome to My ECommerce Store</h1>
        <NavBar />  <h1>Welcome to My eCommerce Store!</h1>
      </header>
      <main>
        <section>
          <h2>Featured Products</h2>
          {/* Placeholder for products */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            <div style={{ border: '1px solid #ddd', padding: '10px' }}>Product 1</div>
            <div style={{ border: '1px solid #ddd', padding: '10px' }}>Product 2</div>
            <div style={{ border: '1px solid #ddd', padding: '10px' }}>Product 3</div>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2025 My eCommerce Store</p>
      </footer>
    </div>
  );
}

export default App;

/*
In the above code, we have a simple React component that renders a header, main section, and footer. The header contains a navigation bar with links to the home page, products page, and cart page. The main section contains a list of featured products displayed in a grid layout. The footer contains a copyright notice.
 */