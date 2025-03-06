import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addQuantity, removeQuantity} from '../redux/actions';
import { Trash2 } from 'lucide-react';

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price*item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
        
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <span>{item.name}</span>
                <div key="plusMinusBtn" className='plusMinusBtn'>
                  <button onClick={()=>dispatch(addQuantity(item.id))}>+</button>
                  <span>{item.quantity}</span>
                  <button onClick={()=>{item.quantity==1?dispatch(removeFromCart(item.id)):dispatch(removeQuantity(item.id))}}>-</button>
              </div>
                    <span>${item.price}</span>
                    <span>${(item.price*item.quantity).toFixed(2)}</span>
            
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="remove-item"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
