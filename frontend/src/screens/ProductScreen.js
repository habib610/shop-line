import React, {useEffect, useState} from "react";
import { Col, Row, Image, ListGroup, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { detailsProductAction } from "../Actions/ListProductActions";
import Rating from "../components/Rating";
import {useDispatch, useSelector} from 'react-redux'
import Loader from "../components/Loader"
import Message from "../components/Message"


const ProductDetails = ({ match, history }) => {

  const [qty, setQty] = useState(1)
  const dispatch = useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const {loading, error, product} = productDetails
    useEffect(() => {
      dispatch(detailsProductAction(match.params.id))
    }, [match, dispatch])

    const handleAddToCart =()=> {
          history.push(`/cart/${match.params.id}?qty=${qty}`)
    }
    
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
          <ListGroup.Item >
              <Row>
                <Col>Price</Col>
                <Col>${product.price}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="border">
              <Row className={product.countInStock ? "bg-success py-2" : 'bg-danger py-2'}>
                <Col>Status</Col>
                <Col > {product.countInStock ? "Available" : 'Unavailable'}</Col>
              </Row>
            </ListGroup.Item>
            {
              product.countInStock 
              && <ListGroup.Item > 
              <Row>
                <Col>Qty</Col>
                <Col > 
                <Form.Control as="select" value={qty} onChange={(e)=> setQty(e.target.value)}>
                  {
                    [...Array(product.countInStock).keys()].map(pd=> <option key={pd+ 1} value={pd + 1}>{pd + 1}</option> )
                  }
                </Form.Control>
                 </Col>
              </Row>
            </ListGroup.Item>
            }

            <ListGroup.Item className="border">
                <Button disabled={!product.countInStock} className="btn btn-block" onClick={handleAddToCart} >Add to Cart</Button>
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
