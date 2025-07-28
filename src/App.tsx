import { Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import About from "./pages/info/About"
import Cart from "./pages/cart/Cart"
import Favorites from "./pages/favorites/Favorites"
import LoginForm from "./auth/LoginForm"
import WithHeader from "./layouts/WithHeader"
import WithoutHeader from "./layouts/WithoutHeader"
import ProductsPage from "./pages/products/ProductsPage"
import SingleProduct from "./pages/products/SingleProduct"
import Auth from "./auth/Auth"
import Terms from "./pages/info/Terms"
import Contact from "./pages/info/Contact"
import Help from "./pages/info/Help"
import Shops from "./pages/info/Shops"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<WithHeader/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
          <Route path="/productsPage" element={<ProductsPage/>}/>
          <Route path="/productsPage/:category/:itemId" element={<SingleProduct />} /> {/* Add this */}
          <Route path="/category/:category/item/:itemId" element={<SingleProduct />} />
          <Route path="/product/:itemId" element={<SingleProduct />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/shops" element={<Shops/>}/>
        </Route>
        <Route element={<WithoutHeader/>}>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/terms" element={<Terms/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
