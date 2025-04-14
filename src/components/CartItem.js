import React from 'react';
import { Button } from 'react-bootstrap';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="d-flex justify-content-between align-items-center mb-3 p-3 border rounded-3">
      <div>
        <h5>{item.name}</h5>
        <p>₹{item.price} x {item.quantity}</p>
        <div className="d-flex align-items-center gap-2">
          <Button size="sm" onClick={() => onQuantityChange(item.id, item.quantity - 1)}>-</Button>
          <span>{item.quantity}</span>
          <Button size="sm" onClick={() => onQuantityChange(item.id, item.quantity + 1)}>+</Button>
        </div>
      </div>
      <div>
        <Button variant="danger" size="sm" onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </div>
  );
};

export default CartItem;
