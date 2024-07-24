// import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import SupplierProduct from './components/SupplierProduct';
import './App.css';
import SupplierList from './components/SupplierList';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/srm/home" element={<Home />} />
          <Route path="/srm/secured/product/browse" element={<ProductList />} />
          <Route path="/srm/secured/supplier/browse" element={<SupplierList />} />
          <Route path="/srmweb/api/product/get/supplier/1" element={<SupplierProduct supplierId={1}/>} />
          <Route path="/srmweb/api/product/get/supplier/2" element={<SupplierProduct supplierId={2}/>} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
