import React from 'react';
import CheckoutForm from '../components/CheckoutForm';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrderSubmit = (formData) => {
    console.log('Order Details:', { ...formData, cart });
    alert("Order placed successfully!");
  };

  return (
    <div className="container my-5">
      <h2>Checkout</h2>
      <div className="row mt-4">
        <div className="col-md-6">
          <CheckoutForm onSubmit={handleOrderSubmit} />
        </div>
        <div className="col-md-6">
          <h4>Order Summary</h4>
          <ul className="list-group mb-3">
            {cart.map(item => (
              <li key={item.id} className="list-group-item d-flex justify-content-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{item.price * item.quantity}</span>
              </li>
            ))}
          </ul>
          <h5>Total: ₹{total}</h5>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
