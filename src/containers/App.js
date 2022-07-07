import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
  <div>
    <h1>My Reducer Project</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductsContainer />}></Route>
        <Route path='/cart' element={<CartContainer />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
)

export default App;
