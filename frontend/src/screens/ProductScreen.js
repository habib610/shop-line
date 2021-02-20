import React, {useEffect} from "react";
import { Col, Row, Image, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { detailsProductAction } from "../Actions/ListProductActions";
import Rating from "../components/Rating";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"
const ProductDetails = ({ match }) => {

  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
console.log(loading, error, product)
    useEffect(() => {
      dispatch(detailsProductAction(match.params.id))
    }, [match, dispatch])
  return (
    <div>
      <Link className="btn btn-primary my-3" to="/">
        Go Back
      </Link>
      <h1 className="text-uppercase">Product Details</h1>
     {
        loading ? <Loader /> : error ? <Message variant="danger" >{error}</Message> : (
          <Row >
        <Col md={6}>
          <Image style={{border: '2px solid'}} className="border-primary" src={product.image} fluid></Image>
        </Col>
        <Col md={3} >
          <ListGroup>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>
            <ListGroup.Item className="border">{product.description}</ListGroup.Item>
            <ListGroup.Item >
              <Rating
                rating={product.rating}
                numReviews={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item className="border">
              <h4>Price: ${product.price}</h4>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <ListGroup variant="flush">
          <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item >
              <Row className={product.countInStock ? "bg-success py-2" : 'bg-danger py-2'}>
                <Col>Status</Col>
                <Col > {product.countInStock ? "Available" : 'Unavailable'}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border">
                <Button disabled={!product.countInStock} className="btn btn-block ">Add to Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
        )
      } 
      
    </div>
  );
};

export default ProductDetails;
