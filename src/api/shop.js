import _products from './products.json'

const getProducts = (cb) => setTimeout(() => cb(_products), 100)

export default getProducts