import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import AddUser from "./components/AddUser";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import './index.css'

function App() {

   return (
    <>
    <Router>
      <Navbar />
      <Home/>
      <div className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
