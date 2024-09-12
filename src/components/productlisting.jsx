import React from "react";
import './productlisting.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';

function Products() {

    const dispatch = useDispatch();
    

    const addToCart = (id, name, src, price) => {

        const btn = document.getElementById(id);

        const changeBack = () => {
            btn.style.backgroundColor = "#80b622";
            btn.innerHTML = "Add to Cart"
        }

        btn.style.backgroundColor = "grey";
        btn.innerHTML = "ADDED TO CART"
        dispatch(addItem({id, name, src, price}))
        setTimeout(changeBack, 1500);
    }

    const products = [
        {id: 1, name: 'DANDELIONS', src: '/assets/1.jpg', price: 10, sale: false},
        {id: 2, name: 'LAVENDER', src: '/assets/2.jpg', price: 15, sale: true},
        {id: 3, name: 'ROSES', src: '/assets/3.jpeg', price: 20, sale: false},
       
    ]


    return (
        <>
            <div className="header">Air Purifying Products</div>
            <div className="products">
            {
                products.map((product) => {
                    return (
                    <div key={product.id} className="product">
                        <h2>{product.name}</h2>
                        {
                            product.sale && 
                            <div className="sale-box">SALE</div>
                        }
                        <img src={product.src}/>
                        <p>${product.price}</p>
                        <button id={product.id} onClick={() => addToCart(product.id, product.name, product.src, product.price)} className="getStarted">Add to Cart</button>
                    </div>
                )})
            }
            </div>
        </>
    )
}


export default Products