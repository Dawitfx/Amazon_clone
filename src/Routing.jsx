// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Auth/SignUp";
import Payment from "./pages/Payement/Payment";
import Orders from "./pages/Orders/Orders";
import Cart from "./pages/Cart/Cart";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Routing;
