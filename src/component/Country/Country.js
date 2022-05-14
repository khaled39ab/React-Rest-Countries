import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    return (
        <div className='country'>
            <h3>Name: {props.name}</h3>
            <h4>Area: {props.area} sq.km</h4>
            <h4>Population: {props.population}</h4>
            <img src="{props.flags}" alt="" />
        </div>
    );
};

export default Country;