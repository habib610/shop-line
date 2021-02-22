import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAddAction } from "../Actions/cartActions";
import { Row, Form, Col, ListGroup, Image, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../components/Message";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const CartScreen = ({ location, match, history }) => {
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const productId = match.params.id;

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  useEffect(() => {
    if (productId) {
      dispatch(cartAddAction(productId, qty));
    }
  }, [productId, dispatch, qty]);

  const handleRemoveFromCart = (id) => {
    console.log("Removing id", id)
  }
  const handleProceedCheckout = () => {
      history.push(`/login?redirect=shipping`)
  }
  return (
    <Row>
      <Col md={8}>
        <h1 className="text-uppercase">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            Your cart has no items. <Link to="/">Back to Shopping</Link>{" "}
          </Message>
        ) : (
          <ListGroup >
            {cartItems.map((item) => (
              <ListGroup.Item  variant="light" key={item.product} className="border">
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={4}>
                    <Link to={`/product/${item.product}`}><h5>{item.name}</h5></Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          cartAddAction(productId, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((pd) => (
                        <option key={pd + 1} value={pd + 1}>
                          {pd + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                      <Button type="button" variant="light" onClick={()=> handleRemoveFromCart(item.product)}>
                          <FontAwesomeIcon icon={faTrash}/>
                      </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
          <Card>
              <ListGroup.Item >
                  <h3>Subtotal ({cartItems.reduce((acc, item)=> acc + item.qty, 0)}) items</h3>
                  ${cartItems.reduce((acc, item)=> acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                  <Button variant="warning" disabled={cartItems.length === 0} className="btn-block" onClick={handleProceedCheckout} >Proceed To Checkout</Button>
              </ListGroup.Item>
          </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
