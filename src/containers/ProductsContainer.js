import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import { connect } from 'react-redux'
import { getVisibleProducts } from '../reducers/products'
import { addToCart } from '../actions'
import PropTypes from 'prop-types'

const ProductsContainer = ({products, addToCart}) => (
    <ProductsList title="Our All Products">
        {
            products.map(product => 
                <ProductItem
                    key = {product.id}
                    product = {product}
                    onAddToCartClicked = {() => addToCart(product.id)} />
            )
        }
    </ProductsList>
)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired
    })).isRequired,
    addToCart: PropTypes.func.isRequired
  }

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductsContainer)