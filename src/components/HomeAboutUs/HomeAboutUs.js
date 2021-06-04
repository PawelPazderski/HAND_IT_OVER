import React, {useState, useEffect} from 'react'
import Heading from '../Heading'
import {Link} from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';


const About = () => {

    return (
    <>
        <div id="o-nas" className="about-container">
           
           <div className="about-left">
               <div className="about-details">
                    <Heading title="O nas"/>
                    <h2 className="h2-about">Nori grape silver beet broccoli kombu 
                        beet greens fava potato quandong celery. 
                        Bunya nuts black-eyed pea prairie turnip leek 
                        lentil turnip greens parsnip.
                        </h2>
                    <div className="about-signature"></div>
               </div>
                

           </div>
           <div className="about-right">
                
           </div>
        </div>
    </>)
}
    
export default About