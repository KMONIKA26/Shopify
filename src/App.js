import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Use Routes and Route instead of Switch
import AddProduct from './components/AddProduct';
import ModifyProduct from './components/ModifyProduct';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Product Admin Page</h1>
      <Routes>  {/* Use Routes instead of Switch */}
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/modify-product/:id" element={<ModifyProduct />} />
      </Routes>
    </div>
  );
}

export default App;
