import React from 'react';
import laptopSvg from '../assets/laptop.svg'

const Heading = () => {
    return ( 
        <div className="heading">
            <img className="heading__img" src={ laptopSvg } alt='laptop_image' />
            <h1 className="heading__title">To-Do List</h1>
        </div>
    );
}
 
export default Heading;