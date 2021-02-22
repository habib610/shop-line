import Footer from "./components/Footer";
import Header from "./components/Header";
import "./bootstrap.min.css"

import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
function App() {
  return (
    <Router>
    <Header/>
    <main>
    <Container className="my-3">
      <Route exact path="/" component={HomeScreen} />
      <Route  path="/product/:id" component ={ProductScreen} />
      <Route  path="/cart/:id?" component ={CartScreen} />
    </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
