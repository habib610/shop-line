import {createStore,combineReducers, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productListReducers, productDetailsReducers } from './Reducers/ProductListReducers';


const middleware = [thunk]


const initialState = {}

const reducer= combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
})


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;