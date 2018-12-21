import React from "react";
import "./Card.css";


const Card = props => (
  <div className="cover">
    <img src={props.image} alt={props.name} onClick={()=> props.handleIncrement(props.id)} />
    
  </div>
);

export default Card;


