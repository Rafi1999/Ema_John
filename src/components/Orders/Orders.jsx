import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart,setCart] = useState(savedCart);
    const handleRemoveCart =(id) => {
        const remaining = cart.filter(product=>product.id !==id );
        setCart(remaining);
        removeFromDb(id);
    }
    const handleClearCart  = ()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='review_container'>
            {
                cart.map(product=>
                    <ReviewItem key={product.id} product={product} handleRemoveCart={handleRemoveCart}></ReviewItem>
                )
            }
            </div>
            <div>
            <Cart cart={cart} handleClearCart={handleClearCart}></Cart>
            </div>
        </div>
    );
};

export default Orders;