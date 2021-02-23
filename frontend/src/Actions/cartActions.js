import axios from 'axios';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../Constants/CartConstants';

export const cartAddAction = (id, qty) => async(dispatch, getState) => {
    const {data} =  await axios.get(`/api/products/${id}`)

    dispatch({
        type: ADD_TO_CART, 
        payload: {
            product: data._id,
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
export const cartRemoveAction = (id) =>(dispatch, getState) => {

    dispatch({
        type: REMOVE_FROM_CART, 
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}