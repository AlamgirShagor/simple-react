import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Course from '../Course/Course'

const Card = (props) => {
    const cart = props.course;
    console.log(cart);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;

        
        
    }
    return (
        <div className="container bg-light border">
            <div className="pt-3 mx-4">
                <h5>Order Summary</h5>
                <h6>Course Items Orders: {cart.length}</h6>
                <h6>Product Price: {total}</h6>
            </div>
        </div>
    );
};

export default Card;