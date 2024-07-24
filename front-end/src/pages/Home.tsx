import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the Supplier Relationship Management System (SRM)</h1>
      <nav>
        <ul>
          <li><Link to="/srm/secured/product/browse">Product List</Link></li>
          <li><Link to="/srm/secured/supplier/browse">Supplier List</Link></li>
          <li><Link to="/srmweb/api/product/get/supplier/1">Products by Supplier 1</Link></li>
          <li><Link to="/srmweb/api/product/get/supplier/2">Products by Supplier 2</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;