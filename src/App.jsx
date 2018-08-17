import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY = "c1b9236ae770a2e2e69121ccaac0eea3";

class App extends Component {
  state = {
    temperature: null,
    city: null,
    country: null,
    humedity: null,
    description: null,
    error: null
  }

  getWeather = async (e) => {
    e.preventDefault();
    console.log(e);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country) {
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);
    
      this.setState({
        temperature: data.main.temp,
        city:  data.name,
        country:  data.sys.country,
        humedity:  data.main.humedity,
        description:  data.weather[0].description,
        error:  ''
      });
    }
    else 
      this.setState({error: 'Please complete the fields...'});
    
  }

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Titles/>
              </div>
              <div className="col-xs-7 form-container">
                <Form getWeather={this.getWeather}/>
                <Weather
                temperature={this.state.temperature}
                city={this.state.city}
                country={this.state.country}
                humedity={this.state.humedity}
                description={this.state.description}
                error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
