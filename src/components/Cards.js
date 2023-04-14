import React from "react";
import '../components/cards.css';
export default function Card(props){
    let badge 
    if(props.open === 1) {
        badge = ""
    } else if(props.location === "Online"){
        badge = "online"
    }
    
    return(
    <div className="card">
       { badge && <div className="card-badge">{badge}</div>}
        <img src={props.img} className="card-image"></img>
        <div className="card-stats">
        <span > 5.0 </span>
        <span className="gray">  (6)</span>
        <span className="gray"> {props.spa} </span>
        </div>
        <p className="card-title">{props.name}</p>
        <p className="card-name"> <span className="bold">{props.paragraph}</span></p>
    </div>
 )
}