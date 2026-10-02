import React from 'react';

const Cart = () => {

    let Counter = 0
    const handleAddToCart = () =>{
        Counter = counter +1;
    }

    return (
        <div>
          <h3>Shoping Cart </h3>  
          <p>Items in The Cart : {Counter} </p>
          <button onClick={handleAddToCart}>Add </button>
        </div>
    );
};

export default Cart;