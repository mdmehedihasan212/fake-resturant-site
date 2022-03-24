import React from 'react';
import './Navbar.css';
import logo from '../../logo/logo.jpg';

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <div>
                <a href="./menu">Our Menu</a>
                <a href="./deal">Exclusive Deals</a>
                <a href="./location">Location</a>
                <a href="./contact">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;