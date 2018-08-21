import React, { Component } from 'react';

const Weather = props => {
    return ( 
        <div className="weather__info">
            {props.data.country && props.data.city && <p className="weather__key"><span>Place: {props.data.country}, city: {props.data.city}</span></p>}
            {props.data.temperature && <p className="weather__key"><span>Temperature: {props.data.temperature}</span></p>}
            {props.data.humidity && <p className="weather__key"><span>Humidity: {props.data.humidity}</span></p>}
            {props.data.pressure && <p className="weather__key"><span>Pressure: {props.data.pressure}</span></p>}
            {props.data.description && <p className="weather__key"><span>Description: {props.data.description}</span></p>}
            {props.data.error && <p className="weather__key"><span>{props.data.error}</span></p>}
        </div>
    );
}
 
export default Weather;