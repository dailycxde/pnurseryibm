import React from "react";
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, increment, decrement } from '../features/cart/cartSlice';

const cart = [

]


function Cart() {

    const { items, total, tq } = useSelector((state) => state.cart);
    const dispatch = useDispatch()


    const handleIncrement = (item) => {
        dispatch(increment(item));
    }

    const handleDecrement = (item) => {
        dispatch(decrement(item));
    }

    const handleRemove = (item) => {
        dispatch(removeItem(item));
    }

    return (
        <>
            <h2 className="header">Cart</h2>
            <div className="body">
                <div className="container">
                    <div>
                    <ol className="cartItems">
                        {(items || []).map(item => {
                            return (
                                <li className="cartItem" key={item.id}>
                                    <button className="remove" onClick={() => handleRemove(item)}>x</button>
                                    <img src={item.src} />
                                    <p>{item.name}</p>
                                    <div className="stat">
                                        <p class="price">Price ${item.price}</p>
                                        <p className="q">
                                            Quantity<div className="quantity">{item.quantity}</div>
                                        </p>
                                        <div className="incdec">
                                            <button onClick={() => handleIncrement(item)}>+</button>
                                            <button onClick={() => handleDecrement(item)}>-</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ol>
                    </div>
                    <div className="details">
                        <h2 className="total">Total: ${total}</h2>
                        <button className="chck-btn">Checkout to Payment</button>
                    </div>
                </div>
            </div>
        </>
    )
};



export default Cart;