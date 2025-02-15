import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './Cart.css'; 

const Cart = () => {
  return (
    <div className="cart">
      <Navbar />
      <h1>Your Cart</h1>
      <div className="cart-items">
      </div>
      <button className="checkout-button">Checkout</button>
      <Footer />
    </div>
  );
};

export default Cart;
