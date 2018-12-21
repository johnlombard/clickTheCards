import React from "react";
import "./Navbar.css";


const Navbar = props => (
  <nav className="navbar ">
    <ul>
      <li className="brand"  onClick={props.handleIncrement}>Clicky Game</li>
      <li class="">You guessed correctly!</li>
      <li>{"Hello " + props.CurrentScore}</li>
    </ul>
  </nav>
);

export default Navbar;