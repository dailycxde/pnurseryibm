import React from "react";

const Style = {
    display: 'flex',
    height: 40,
    backgroundColor: '#3b5703',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    boxShadow: '0px -10px 10px rgba(128,182,34, 0.1)',
}

const Pstyle = {
    fontSize: '15px',
    fontWeight: 'bolder',
    color: '#80b622',
    fontFamily: "cursive",
}

function Footer() {
    return (
    <>
        <div style={Style}><p style={Pstyle}>All Right Reserved <b>Paradise Nursery 2025</b></p></div>
    </>
    
)}


export default Footer; 