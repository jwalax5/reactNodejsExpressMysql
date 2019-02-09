import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container">
            <a className="navbar-brand" href="/"> <img src="http://placehold.it/300x60?text=Logo" width="150" height="30" alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <span className="iconStyle"><Link to="/" className="nav-link"><i className="fa fa-2x fa-home"></i>Home</Link></span>
                    </li>
                    <li className="nav-item">
                        <span className="iconStyle"><Link to="/shoppingCart" className="nav-link"><i className="fa fa-2x fa-shopping-cart"></i>Cart</Link></span>
                    </li>
                    <li className="nav-item">
                        <span className="iconStyle"><Link to="/auth" className="nav-link"><i className="fa fa-2x fa-user-secret"></i>Auth</Link></span>
                    </li>
                    <li className="nav-item">
                        <span className="iconStyle"><Link to="/login" className="nav-link"><i className="fa fa-2x fa-user"></i>Login</Link></span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);