import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div 
                className="aboutTop"
                style={{ backgroundImage: `url(${MultiplePizzas})` }}
            ></div>
            <div className="aboutBottom">
                <h1> About US </h1>
                <p> Lorem, ipsum dolor sit
                    amet consectetur adipisicing elit.
                    Ullam at quos cumque commodi laborum
                    non repudiandae minima quis nulla
                    blanditiis, quasi, repellat doloribus
                    officiis aliquid placeat dolor. 
                    Veniam, repudiandae incidunt?</p>
            </div>

        </div>
    )
}

export default About
