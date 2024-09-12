import {React, useState} from "react";
import './landingpage.css';
import Products from './productlisting';
import Header from './h&f/header';
import Footer from './h&f/footer';
import Cart from './cart';
import { useSelector } from 'react-redux';


function Landing() {

    const {items, total, tq} = useSelector(state => state.cart)


    const [show, setShow] = useState(false);
    const [C, setC] = useState(false);


    const toggleOn = () => {
        setShow(true);
        setC(false)
    }

    const toggleOff = () => {
        setShow(false); 
        setC(false);
    }

    const cartPage = () => {
        setC(true);
        setShow(false);
    }

    
    const cartOff = () => {
        setC(false); 
        setShow(false);
    }


    return (
        <>
        <Header />
        <button onClick={cartPage} className="Cstyle">
            <img className="Istyle" src="assets/cart.png" />
            <p className="tqicon">{tq}</p>
        </button>
        <img className="bg" src="/assets/bg.jpeg" />
        { (!show && !C) &&
        <>
        <div className="main">
            <div className="abtus1">
                <h3 className="mtitle">Welcome To</h3>
                <h3 className="mtitle">Paradise Nursery</h3>
                <p className="line">________________________________________________</p>
                <p className="quote">Where Green Meets Serenity</p>
                <button className="getStarted" onClick={toggleOn}>Get Started</button>
            </div>

            <div className="abtus2">
                <h3>
                    Welcome to <span>Paradise Nursery</span>, Where Green Meets Serenity
                </h3>
                <p>
                    At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of 
                    high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and 
                    more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every 
                    plant enthusiast.
                </p>
                <p>
                    Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
                    Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
                    the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
                    home or office.
                </p>
                <p>
                    Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today and experience the 
                    beauty of nature right at your doorstep.
                </p>
            </div>
        </div>
        </>
        }
        {
            (show) && (
                <>
                <div className="shop">
                    <button className="close-btn" onClick={toggleOff}>CLOSE</button>
                    <Products />
                </div>
                </>
            )
        }

        {
            (C && !show) && (
                <>
                <div className="cartPage">
                    <button className="close-btn" onClick={cartOff}>CLOSE</button>
                    <button className="cntn-btn" onClick={toggleOn}>CONTINUE SHOPPING</button>
                    <Cart />
                </div>
                </>
            )
        }

        <Footer />
        </>
    )
}

export default Landing;