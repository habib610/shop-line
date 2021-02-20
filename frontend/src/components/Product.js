import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';


const Product = (props) => {
    const {name, image, price, rating, numReviews, _id} = props.product
    return (
        <Card className="my-3 p-3">
           <Link to={`/product/${_id}`}><CardImg src={image} variant='top'></CardImg></Link> 
            <Card.Body>
              <Link to={`/product/${_id}`}>
              <Card.Title as="div">
                    <strong>{name}</strong>
                </Card.Title>
                </Link> 
                <Card.Text as="div">
                <div className="my-3"> {rating} from {numReviews} reviews  </div>    
                </Card.Text> 
                <Card.Text as="h3">${price}</Card.Text>
                <Card.Text as="div">
                    <Rating rating={rating} numReviews={`${numReviews} reviews`} />
                </Card.Text>

            </Card.Body>
        </Card>
    );
};

export default Product;