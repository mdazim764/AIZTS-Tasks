import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
    const products = [
        { id: 1, name: "Laptop", price: 999, description: "High performance laptop" },
        { id: 2, name: "Smartphone", price: 799, description: "Latest model smartphone" },
        { id: 3, name: "Tablet", price: 499, description: "Lightweight tablet" }
    ]
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              {product.name} - ${product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Product