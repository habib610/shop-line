import {createStore,combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/cartReducers';
import { productListReducers, productDetailsReducers } from './Reducers/ProductListReducers';


const middleware = [thunk]

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    }
}

const reducer= combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer
})


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;