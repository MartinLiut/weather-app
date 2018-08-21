import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import Footer from './components/footer';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);
    
      this.setState({
        temperature: data.main.temp,
        city:  data.name,
        country:  data.sys.country,
        humidity:  data.main.humidity,
        pressure:  data.main.pressure,
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 col-md-5 title-container">
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={5500}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <Titles />
                </ReactCSSTransitionGroup>
              </div>
              <div className="col-xs-12 col-md-7 form-container">
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={5500}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <Form getWeather={this.getWeather}/>
                </ReactCSSTransitionGroup>
                <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={10500}
                  transitionEnter={false}
                  transitionLeave={false}
                >
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </ReactCSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App;
