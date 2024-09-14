// src/components/ModifyProduct.js
import React, { useState } from 'react';
import { firestore } from '../firebase';

const ModifyProduct = () => {
  const [productId, setProductId] = useState('');
  const [newValues, setNewValues] = useState({
    name: '',
    description: '',
    price: ''
  });

  const handleInputChange = (e) => {
    setNewValues({ ...newValues, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (productId) {
      try {
        await firestore.collection('products').doc(productId).update(newValues);
        alert('Product updated successfully');
      } catch (error) {
        console.error('Error updating product:', error);
        alert('Failed to update product. Please try again.');
      }
    } else {
      alert('Please enter a valid product ID');
    }
  };

  return (
    <div>
      <h2>Modify Product</h2>
      <input type="text" placeholder="Enter product ID" value={productId} onChange={(e) => setProductId(e.target.value)} />
      <input type="text" placeholder="New name" name="name" value={newValues.name} onChange={handleInputChange} />
      <input type="text" placeholder="New description" name="description" value={newValues.description} onChange={handleInputChange} />
      <input type="number" placeholder="New price" name="price" value={newValues.price} onChange={handleInputChange} />
      <button onClick={handleUpdate}>Update Product</button>
    </div>
  );
};

export default ModifyProduct;
