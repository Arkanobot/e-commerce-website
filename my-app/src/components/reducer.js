import {
  ADD_TO_BASKET,
  REM_FROM_BASKET,
  SET_USER,
} from "./constants/constants";

export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, value) => value.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case REM_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        // found the item inside the basket
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as it is not in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    //... return state, basket:state.basket.filter(item=> item.id != action.id)

    default:
      return state;
  }
};

export default reducer;
