import React, { Component } from 'react';
import './App.css';
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
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    console.log(data);
    if(data.cod != 404) {
      this.setState({
        temperature: data.main.temp,
        city:  data.name,
        country:  data.sys.country,
        humedity:  data.main.humedity,
        description:  data.weather[0].description,
        error:  ''
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Titles/>
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
    )
  }
}

export default App;
