import { DELETE_DATA, GET_DATA, PUT_DATA } from "../Action/CartAction";

const initialState = {
  cart: [],
};

const cartData = (state = initialState, action) => {
  switch (action.type) {
    case PUT_DATA:
      return {
        cart: state.cart.concat(action.payload),
      };
    case GET_DATA:
      return {
        cart: action.payload,
      };
    case DELETE_DATA:
      const newData = state.cart.filter((a) => a.id !== action.payload);
      return {
        cart: newData,
      };
  }

  return state;
};

export default cartData;
