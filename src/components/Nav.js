import React from "react";
import { Link } from "react-router-dom";
import UWlogo from "../img/UW logo.png";

export function NavBar() {
    return (
        <div className="navBar">
            <div><Link to="/">Main menu</Link></div>
            <div><Link to="/About">About</Link></div>
            <div className="logo"><a href="https://www.washington.edu/"><img src={UWlogo} alt="UW logo" /></a></div>
        </div>
    );
}

export function Footer() {
    return (
        <footer>
            <div className="container">
                <p>&copy; INFO 340 Group 7 2022</p>
            </div>
        </footer>
    );

}
