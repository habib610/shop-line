import {createStore,combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { cartReducer } from './Reducers/cartReducers';
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer } from './Reducers/OrderReducers';
import { productListReducers, productDetailsReducers } from './Reducers/ProductListReducers';
import { userLoginReducers, userRegisterReducer,  userDetailsReducer,
    userUpdateProfileReducer, userListReducer,  userDeleteReducer,} from './Reducers/UserReducers';


const middleware = [thunk]

const cartItemsFromLocalStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingInfoFromLocalStorage = localStorage.getItem('shippingInfo') ? JSON.parse(localStorage.getItem('shippingInfo')) : {}

const initialState = {
    cart: {
        cartItems: cartItemsFromLocalStorage,
        shippingInfo: shippingInfoFromLocalStorage
    },
    userLogin: {
        userInfo: userInfoFromLocalStorage
    },
}

const reducer= combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer,
    userLogin: userLoginReducers,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer
})


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;