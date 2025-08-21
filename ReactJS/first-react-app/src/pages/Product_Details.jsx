import React from 'react'
import { useParams,
    Link, useLocation
 } from 'react-router-dom';
const Product_Details = () => {
    // console.log(useLocation())
        const products = [
        { id: 1, name: "Laptop", price: 999, description: "High performance laptop" },
        { id: 2, name: "Smartphone", price: 799, description: "Latest model smartphone" },
        { id: 3, name: "Tablet", price: 499, description: "Lightweight tablet" }
    ]

    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const location = useLocation();

  return (
    <>
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <p>Description: {product.description}</p>
          {location.pathname === `/product/3` && <p>You are viewing this product Tablets</p>}
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
    <Link to="/product" style={{ marginTop: '20px', display: 'inline-block', textDecoration: 'none', color: '#adcff4'}}>Back to Product List</Link>
    </>
  )
}

export default Product_Details