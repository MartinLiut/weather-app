import React, { Component } from 'react';

class Weather extends Component {
    state = {  }
    render() { 
        return ( 
            <div>{this.props.temperature && <p>Temperature: {this.props.temperature}</p>}</div>
         );
    }
}
 
export default Weather;