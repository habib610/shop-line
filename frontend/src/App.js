import Footer from "./components/Footer";
import Header from "./components/Header";
import "./bootstrap.min.css"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymetScreen";
import PlaceOrderScreen from "./screens/OrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
function App() {
  return (
    <Router>
    <Header/>
    <main>
    <Container className="my-3">
      <Route exact path="/" component={HomeScreen} />
      <Route  path="/product/:id" component ={ProductScreen} />
      <Route  path="/cart/:id?" component ={CartScreen} />
      <Route  path="/login" component ={LoginScreen} />
      <Route  path="/register" component ={RegisterScreen} />
      <Route  path="/profile" component ={ProfileScreen} />
      <Route  path="/shipping" component ={ShippingScreen} />
      <Route  path="/payment" component ={PaymentScreen} />
      <Route  path="/placeorder" component ={PlaceOrderScreen} />
      <Route  path="/order/:id" component ={OrderScreen} />
      <Route path='/admin/userlist' component={UserListScreen} />
      <Route path='/admin/user/:id/edit' component={UserEditScreen} />
      <Route path='/admin/productlist' component={ProductListScreen} />
      <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
      <Route path='/admin/orderlist' component={OrderListScreen} />
      <Route path='/search/:keyword' component={HomeScreen} />
    </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
