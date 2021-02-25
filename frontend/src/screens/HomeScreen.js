import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row } from 'react-bootstrap';
import { listProductAction } from '../Actions/ListProductActions';
import Product from './../components/Product'
import Loader from '../components/Loader';
import Message from '../components/Message';
const HomeScreen = () => {
    
    const dispatch = useDispatch()
    
    const productList = useSelector(state => state.productList)
    const {loading, error, products} = productList
 
    useEffect(() => {
     dispatch(listProductAction())
    }, [dispatch])

    
    return (
        <div>
      <h1 className="text-uppercase">Latest Product</h1>
  {
          loading ? <Loader/> : error ? <Message variant="danger">{error}</Message> : <Row>
          {
               products.map(product => (
                   <Col key={product._id} xs={12} sm = {12} md={6} lg={4} xl = {3} >
                       <Product  product={product} />
                   </Col>
               ))
           }
          </Row>
      } 
           
        </div>
    );
};

export default HomeScreen;