import { ADD_TO_CART, REM_FROM_CART, SET_USER } from "./constants/constants";

export const initialState = {
  cart: [],
  user: null,
};

//selector
export const getcartTotal = (cart) =>
  cart?.reduce((amount, value) => value.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case REM_FROM_CART:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newcart = [...state.cart];
      if (index >= 0) {
        // found the item inside the cart
        newcart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in the cart`
        );
      }

      return {
        ...state,
        cart: newcart,
      };

    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    //... return state, cart:state.cart.filter(item=> item.id != action.id)

    default:
      return state;
  }
};

export default reducer;
