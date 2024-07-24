import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Supplier } from '../types/Types';

const SupplierList: React.FC = () => {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/suppliers')
      .then(response => setSuppliers(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Supplier List</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Supplier Name</th>
            <th>Contact Phone</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map(supplier => (
            <tr key={supplier.supplierId}>
              <td>{supplier.supplierId}</td>
              <td>{supplier.supplierName}</td>
              <td>{supplier.contactPhone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SupplierList;