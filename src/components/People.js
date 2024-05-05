import React from 'react';
import { GoTelescopeFill } from "react-icons/go";
import people from '../model/data1';

const People = ({id, image, name, title, quote, personIndex, index}) => {
    
    let position = "nextSlide";
    if(personIndex === index){
        position = 'activeSlide'
    }
    if(personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)){
        position = 'lastSlide'
    }
    return(
        <article className={position} key={id}>
                <img src={image} alt={image} className="person-img" />
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <GoTelescopeFill className="icon" />
        </article>
        )
}

export default People;