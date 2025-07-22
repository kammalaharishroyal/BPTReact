import { Route, Routes } from 'react-router-dom';
// import MainLayout from '../layouts/'
import MainLayout from '../layouts/MainLayout';
import PrivateRoute from '../auth/PrivateRoute';

import Login from '../pages/Login';
import Forbidden from '../pages/Forbidden';

import APIDashboard from '../pages/APITesting/Dashboard';
import APITestRunner from '../pages/APITesting/TestRunner';
import UIDashboard from '../pages/UITesting/Dashboard';
import UITestRunner from '../pages/UITesting/TestRunner';
import NotFound from '../pages/NotFound';
import TestNgTests from '../pages/UITesting/Application/JIVA/TestNgTests';
import DefaultDash from '../pages/UITesting/Application/JIVA/Default';
import ObjRepo from '../pages/UITesting/Application/JIVA/ObjRepo';
import Modules from '../pages/UITesting/Application/JIVA/Modules';
import Components from '../pages/UITesting/Application/JIVA/Components';
import GetSubComponent from '../pages/UITesting/Application/JIVA/GetSubComponent';
import JavaDashboard from '../pages/UITesting/Application/JIVA/JavaComonents/JavaDashboard/JavaDashboard'
import Cart from '../pages/UITesting/Application/Components/Cart';
import { useState } from 'react';

function MainRoutes() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    console.log("added item:"+item);
    
    if (!cartItems.some((i) => i.id === item.id)) {
     
      setCartItems([...cartItems, item]);
    }
  };
  console.log("total added:"+cartItems);
  
  return (
    <Routes>
      <Route path="/" index element={<Login />} />
      {/* <Route path="/forbidden" element={<Forbidden />} /> */}

      <Route path="/ui" element={<UIDashboard />}>
        <Route index element={<DefaultDash />} />
        <Route path="TestNgTests" element={<TestNgTests />} />
        <Route path="JavaComponents" element={<JavaDashboard />} />
        <Route path="Cart" element={<Cart  cartItems={cartItems}/>} />
        <Route path="ObjRepo" element={<ObjRepo />}>
          <Route path="Modules" element={<Modules />} />
          <Route path="Components" element={<Components onAddToCart={handleAddToCart} />} />
          <Route path="getAllSubcomponents" element={<GetSubComponent />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MainRoutes;