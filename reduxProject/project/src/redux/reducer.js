import { act } from "react";
import {
  INCREMENT,
  DECREMENT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADDQUANTITY,
  REMOVEQUANTITY,
} from "./actions";

const initialState = {
  count: 0,
  cart: [],
  products: [
    { id: 1, name: "Laptop", price: 999.99, quantity: 1 },
    { id: 2, name: "Headphones", price: 99.99, quantity: 1 },
    { id: 3, name: "Mouse", price: 29.99, quantity: 1 },
    { id: 4, name: "Headphones", price: 55.99, quantity: 1 },
    { id: 5, name: "Keyboard", price: 20.0, quantity: 1 },
    { id: 6, name: 'Laptop', price: 1499.99, quantity:1},
    { id: 7, name: "Mousepad", price: 15.00, quantity: 1 },
    { id: 8, name: "HeadMassager", price: 250.25, quantity: 1},
  ],
};

const counterReducer = (state = initialState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
        products:state.products.map((item)=>item.id===action.payload ? {...item,quantity:1}:item)
      };

    case ADDQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case REMOVEQUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
        products: state.products.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    default:
      console.log(state);
      return state;
  }
};

export default counterReducer;
