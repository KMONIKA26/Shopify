import React, { useState } from 'react';
import { db } from '../firebase'; // Import the firebase db instance
import { collection, addDoc } from 'firebase/firestore'; 

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), product);
      alert('Product added successfully');
    } catch (error) {
      console.error("Error adding product: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={product.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Product Description"
        value={product.description}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={product.price}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddProduct;
