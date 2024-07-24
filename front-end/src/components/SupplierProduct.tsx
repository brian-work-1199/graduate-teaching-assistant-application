import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ProductSupplier } from '../types/Types';
import '../styles/App.css';

const SupplierProduct: React.FC<{ supplierId: number }> = ({ supplierId }) => {
  const [products, setProducts] = useState<ProductSupplier[]>([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/get/supplier/${supplierId}`)
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [supplierId]);

  return (
    <div>
      <h2>Products by Supplier {supplierId}</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Date Supplied</th>
            <th>Supplier Name</th>
            <th>Contact Phone</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.unitPrice}</td>
              <td>{product.quantityInStock}</td>
              <td>{new Date(product.dateSupplied).toLocaleDateString()}</td>
              <td>{product.supplierName}</td>
              <td>{product.contactPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierProduct;