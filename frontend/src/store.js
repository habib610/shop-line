import {createStore,combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/cartReducers';
import { productListReducers, productDetailsReducers } from './Reducers/ProductListReducers';
import { userLoginReducers, userRegisterReducer  } from './Reducers/UserReducers';


const middleware = [thunk]

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}

const reducer= combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userLogin: userLoginReducers,
    userRegister: userRegisterReducer,
})


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;