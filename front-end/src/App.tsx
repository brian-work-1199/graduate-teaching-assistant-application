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
          <Route path="/srmweb/api/product/get/supplier/:supplierId" element={<SupplierProductsWithParams />} />
        </Routes>
      </Router>
    </div>
  );
}

const SupplierProductsWithParams: React.FC = () => {
  const { supplierId } = useParams<{ supplierId: string }>();

  if (supplierId) {
    return <SupplierProduct supplierId={+supplierId} />;
  }
  return (<></>);
};


export default App;
