import getProducts from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveAllProducts = (products) => {
    return {
        type : types.RECEIVE_PRODUCTS,
        products
    }
}

export const getAllProducts = () => dispatch => {
    getProducts(products => {
        dispatch(receiveAllProducts(products))
    })    
}

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
  })

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}


export const checkout = () => (dispatch, getState) => {
  const {cart} = getState()
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  dispatch({
    type:types.CHECKOUT_SUCCESS,
    cart
  })
}