import { ADD_TO_CART } from "../Constants/CartConstants";

export const cartReducer = (state={cartItems: []}, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const exitingItem = state.cartItems.find(x => x.product === item.product)
            if(exitingItem) {
                return { 
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === item.product ? item : x )
                }
            } else {
                return { 
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        default:
            return state
    }
}