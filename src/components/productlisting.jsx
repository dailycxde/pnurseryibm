import React from "react";
import './productlisting.css'
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/cartSlice';
import { useState } from "react";

var products = [
    {id: 1, name: 'DANDELIONS', src: '/assets/1.jpg', price: 10, sale: false, cat:"flower"},
    {id: 2, name: 'LAVENDER', src: '/assets/2.jpg', price: 15, sale: true, cat:"flower"},
    {id: 3, name: 'ROSES', src: '/assets/3.jpeg', price: 20, sale: false, cat:"flower"},
    {id: 4, name: 'LILY', src: '/assets/4.jpeg', price: 15, sale: false, cat:"flower"},
    {id: 5, name: 'JASMINE', src: '/assets/5.jpeg', price: 5, sale: true, cat:"flower"},
    {id: 7, name: 'LILAC', src: '/assets/7.jpeg', price: 15, sale: false, cat:"flower"},
    {id: 8, name: 'CACTUS', src: '/assets/8.jpeg', price: 10, sale: true, cat:"plant"},
    {id: 9, name: 'ALOE VERA', src: '/assets/9.jpeg', price: 25, sale: false, cat:"plant"},
    {id: 10, name: 'LOTUS', src: '/assets/10.jpeg', price: 30, sale: false, cat:"flower"},
    {id: 11, name: 'LILY OF THE VALLEY', src: '/assets/11.jpeg', price: 10, sale: false, cat:"flower"},
    {id: 12, name: 'PEACE LILY', src: '/assets/12.jpeg', price: 15, sale: false, cat:"plant"},
    {id: 13, name: 'AVOCADO', src: '/assets/13.jpeg', price: 5, sale: true, cat:"plant"},
];


function Products() {

    const dispatch = useDispatch();
    const [Actions, setActions] = useState([]);
    const [Array, setArray] = useState([...products]);


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


    function handleSorting(a, type){
        let sortedArray = [...a];
        if (type === "l2h") {
            sortedArray.sort((a, b) => a.price - b.price);
        } else if (type === "h2l") {
            sortedArray.sort((a, b) => b.price - a.price);
        }
        return sortedArray;
    }

    function handleFiltering(a, cat){
        return a.filter(item => item.cat === cat)
    }

    function handleAction(e, action, value){

        const a = action;
        if(a === "sort"){
            if(e.target.checked){
                setActions([...Actions, {func: handleSorting, val: value}]);
            }
            else{
            setActions(prevActions => prevActions.filter(item => item.val !== value));
            }
        }
        else if(a === "filter"){
            if(e.target.checked){
                setActions([...Actions, {func: handleFiltering, val: value}]);
            }
            else{
                setActions(prevActions => prevActions.filter(item => item.val !== value));
            }
        }
    }


    function handleSave(){
        var updated = [...products];

        Actions.forEach(a => {
            const func = a.func;
            updated = func(updated, a.val)
        })

        setArray(updated);
        window.alert("products list updated")
    }
    

    return (
        <>
            <div className="prop">
            <button className="prop-btn">
                        SORT-FILTER
            </button>
                
                    <div className="window">
                        <button className="inner-btn">SORT-FILTER</button>
                        <p className="phead">Sort Prices</p>
                        <label>low to high</label><input onChange={(e) => handleAction(e, "sort", "l2h")} type="checkbox"/>
                        <br />
                        <label>high to low</label><input onChange={(e) => handleAction(e, "sort", "h2l")} type="checkbox"/>
            
                        <p className="phead">Filter</p>
                        <label>flowers</label><input onChange={(e) => handleAction(e, "filter", "flower")} type="checkbox"/>
                        <br />
                        <label>plants</label><input onChange={(e) => handleAction(e, "filter", "plant")} type="checkbox"/>

                        <button className="save-btn" onClick={handleSave}>Save Changes</button>
                    </div>
            </div>


            <div className="header">PLANTS</div>
            <div className="products">
            {
                Array.map((product) => {
                    return (
                    <>
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
                    </>
                )})
            }
            </div>
        </>
    )
}


export default Products