import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, area, population, flags} = props.country;
    return (
        <div className='country'>
            {/* <h3>Name: {props.name}</h3>
            <h4>Area: {props.area} sq.km</h4>
            <h4>Population: {props.population}</h4>
            <img src={props.flags} alt="" /> */}
            <h3>Name: {name.common}</h3>
            <h4>Area: {area} sq.km</h4>
            <h4>Population: {population}</h4>
            <img src={flags.svg} alt="" />
        </div>
    );
};

export default Country;