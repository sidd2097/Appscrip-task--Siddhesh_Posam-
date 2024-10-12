import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import ProductGrid from './Components/ProductGrid/ProductGrid';
import Footer from './Components/Footer/Footer';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetching products from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="container">
      {/* SEO Headings */}
      <Helmet>
        <title>Discover Our Products</title>
        <meta name="description" content="Browse through our wide collection of products." />
      </Helmet>
      
      <Header />
      
      <main className="main-content">
        <Sidebar />
        <ProductGrid products={products} />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
