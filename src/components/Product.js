import PropTypes from 'prop-types'

const Product = ({title, price, inventory}) => (
    <div>
        {title} : ${price} x {inventory}
    </div>
)

Product.propTypes = {
    price: PropTypes.number,
    inventory: PropTypes.number,
    title: PropTypes.string
  }

export default Product;