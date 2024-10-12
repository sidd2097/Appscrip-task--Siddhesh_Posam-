import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css'; 

const ProductGrid = ({ products }) => (
  <section className="product-grid">
    <h1>Discover Our Products</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit...</p>
    <div className="grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
