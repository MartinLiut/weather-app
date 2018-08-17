import React, { Component } from 'react';

const Weather = props => {
    return ( 
        <div>
            {props.country && props.city && <p>country: {props.country}, city: {props.city}</p>}
            {props.temperature && <p>Temperature: {props.temperature}</p>}
            {props.humedity && <p>humedity: {props.humedity}</p>}
            {props.description && <p>description: {props.description}</p>}
            {props.error && <p>{props.error}</p>}
        </div>
    );
}
 
export default Weather;