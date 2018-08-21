import React, { Component } from 'react';

const Weather = props => {
    return ( 
        <div className="weather__info">
            {props.country && props.city && <p className="weather__key"><span>Place: {props.country}, city: {props.city}</span></p>}
            {props.temperature && <p className="weather__key"><span>Temperature: {props.temperature}</span></p>}
            {props.humidity && <p className="weather__key"><span>Humidity: {props.humidity}</span></p>}
            {props.pressure && <p className="weather__key"><span>Pressure: {props.pressure}</span></p>}
            {props.description && <p className="weather__key"><span>Description: {props.description}</span></p>}
            {props.error && <p className="weather__key"><span>{props.error}</span></p>}
        </div>
    );
}
 
export default Weather;