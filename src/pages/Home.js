import React from 'react' ;

import { LinkContainer } from 'react-router-bootstrap';
import "../pages/Home.css";

import data from './data';

import Card from '../components/Cards';


import Topp from '../components/Topp';
import About from './About';



function Home() {

  const cards = data.map(item => {
    return(
    <Card
          key={item.id}
          img = {item.img}
          name = {item.name}
          spa ={item.spa}
          paragraph ={item.paragraph}
          open={item.open}
          location = {item.location}
          />
        )
     })
 
  



  return (
    <div className='Container'>
    <br></br>
    <section class="link ">
    <a href="#"> Hello and welcome to my portfolio website! My name is Ngawang Pelden lama and I am a web developer with 2 years of experience. I have a passion for creating beautiful web applications</a>
    </section>
    <br></br>
  <Topp/>
  <section className="card-list">
    {cards}
  </section>
   <About/>

   
  
   
   
  

   
 
   </div>
  
  )
}

export default Home
