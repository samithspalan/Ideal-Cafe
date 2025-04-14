import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart = [], updateQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container my-5">
      <h2>Your Cart</h2>
      <div className="my-4">
        {cart.length === 0 ? <p>Your cart is empty.</p> : cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={updateQuantity}
            onRemove={removeFromCart}
          />
        ))}
      </div>
      <h4>Total: ₹{total}</h4>
      <Link to="/checkout" className="btn btn-success mt-3">Proceed to Checkout</Link>
    </div>
  );
};

export default Cart;
