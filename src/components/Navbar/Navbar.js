import React from "react";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar ">
    <ul>
      <li className="brand"  onClick={props.handleIncrement}>John's Book Shelf!</li>
      <li>{` ${props.Guess} `}</li>
      <li>{`Books Read: ${props.CurrentScore} `}</li>
    </ul>
  </nav>
);

export default Navbar;