import React from 'react';

const Country = (props) => {
    // console.log(props);
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <h4>Area: {props.area} sq.km</h4>
            <h4>Population: {props.population}</h4>
            <img src="{props.flags}" alt="" />
        </div>
    );
};

export default Country;