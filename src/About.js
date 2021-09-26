import React from 'react';
import web from "../src/images/about.jpg";
import Common from './Common';


const About = () => {
    return (
        <div>
            <Common 
            name='Welcome to About page' 
            imgsrc={web} 
            visit="/contact" 
            btname="contact now" />

        </div>
    )
}

export default About;