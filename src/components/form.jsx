import React, { Component } from 'react';

const Form = props => {
    return ( 
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder="City" name="city"/>
            <input type="text" placeholder="Country" name="country"/>
            <button className="getWeather">get weather</button>
        </form>
    );
}
 
export default Form;