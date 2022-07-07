import * as types from '../constants/ActionTypes'

const initialState = {
    addedIds: [],
    quantityIds: []
  }

const addedIds = (state = initialState.addedIds, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            if (state.indexOf(action.productId) !== -1) {
                return state
              }
            return [
                ...state,
                action.productId
            ]
        default :
            return state
    }
}

const quantityIds = (state = initialState.quantityIds, action) => {
    switch(action.type){
        case types.ADD_TO_CART:
            return {
                ...state,
                [action.productId]: (state[action.productId] || 0) + 1
            }
        default :
            return state
    }
}

const cart = (state = initialState, action) => {
    switch(action.type){
        case types.CHECKOUT_REQUEST:
            return initialState
        case types.CHECKOUT_FAILURE:
            return action.cart
        default:
            return {
                addedIds: addedIds(state.addedIds, action),
                quantityIds: quantityIds(state.quantityIds, action)
              }
    }
}

export default cart

const getProduct = (state, id) => {
    return {
        id: id,
        title: state.products.byId[id].title,
        price: state.products.byId[id].price
    }
}

export const getCartProducts = state => {
    const aaa = state.cart.addedIds.map(id => ({
        ...getProduct(state, id),
        quantity: state.cart.quantityIds[id]
    }))

    console.log(aaa)
    return aaa;
}
    
export const getTotal = state => {
    const qqq = state.cart.addedIds
    const price = qqq.reduce((total, id) => {
        return total + state.cart.quantityIds[id] * state.products.byId[id].price
    }, 0).toFixed(2)
    console.log(price)
}
