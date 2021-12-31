//Actions

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADD_TO_WHISLIST = 'ADD_TO_WHISLIST';

//Actions

//Reducers
const initialState = [];
const finalstate = [];

const cartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.payload.id);
    case ADD_TO_WHISLIST:
      let actions = state.slice(0);
      actions = state.map(wl => {
        if (wl.id === action.payload.id) {
          wl.whislist = true;
        }
        return wl;
      });
      return actions;
  }
  return state;
};
// export const whislistreducer = (states = finalstate, action) => {
//   switch (action.type) {
//     case ADD_TO_WHISLIST:
//       return [...states, action.payload];
//   }
//   return states;
// };
export default cartItemsReducer;
//Reducers

