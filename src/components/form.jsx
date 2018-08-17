import React, { Component } from 'react';

class Form extends Component {
    state = {  }
    render() { 
        return ( 
            <form onSubmit={this.props.getWeather}>
                <input type="text" placeholder="City" name="city"/>
                <input type="text" placeholder="Country" name="country"/>
                <button>get weather</button>
            </form>
         );
    }
}
 
export default Form;