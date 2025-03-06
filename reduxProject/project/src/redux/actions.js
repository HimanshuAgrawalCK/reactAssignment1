// Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADDQUANTITY = 'ADDQUANTITY';
export const REMOVEQUANTITY = 'REMOVEQUANTITY';


// Action Creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const addQuantity = (productId) =>({
  type: ADDQUANTITY,
  payload: productId,
})

export const removeQuantity = (productId) =>({
  type: REMOVEQUANTITY,
  payload: productId,
})

