import React from 'react';
// install react-icons and find the proper icon 
import { GoTelescopeFill } from "react-icons/go";
import nasaImage from '../model/data';

// Define a functional component named Nasa which takes props as its argument
const Nasa = ({id, image, title, subtitle, description, jamesIndex, index}) => {

// Initialize a variable named position with the value 'nextSlide'
    let position = "nextSlide";

// Check if jamesIndex is equal to index, if true, set position to 'activeSlide'
    if(jamesIndex === index){
        position = 'activeSlide'
    }

// Check if jamesIndex is equal to index - 1 or (index is 0 and jamesIndex is equal to length of nasaImage - 1), if true, set position to 'lastSlide'
    if(jamesIndex === index - 1 || (index === 0 && jamesIndex === nasaImage.length - 1)){
        position = 'lastSlide'
    }

// Return the JSX code for the Nasa component
    return(
        <article className={position} key={id}>
                <img src={image} alt={image} className="nasa-img" />
                <h4>{title}</h4>
                <p className="title">{subtitle}</p>
                <p className="text">{description}</p>
                <GoTelescopeFill className="icon" />
        </article>
        )
}

export default Nasa;