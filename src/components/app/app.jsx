import React, { Component } from 'react';
import axios from 'axios';
import City from '../city';
import './style.scss';

const APIKEY = 'd01b2c5449aaa2687f90bc71e092aaea';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      weatherCurr: {},
      weatherForecast: {}
    };

    this.getLocalWeather = this.getLocalWeather.bind(this);
    this.openWeatherRequest = this.openWeatherRequest.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getLocalWeather);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.setState({
      lat: position.coords.latitude,
      lon: position.coords.longitude
    })
  }

  getLocalWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    this.openWeatherRequest(lat, lon, 'forecast');
    this.openWeatherRequest(lat, lon, 'weather');    
  }

  openWeatherRequest(lat, lon, type) {
    const url = 'http://api.openweathermap.org/data/2.5/' + type;
    axios.get(url, {
      params: {
        lat,
        lon,
        mode: 'json',
        APPID: APIKEY
      }
    })
    .then((response) => {
      const weather = JSON.parse(response.request.response);
      if (type === 'forecast') {
        this.setState({
          weatherForecast: weather
        });
      } else if (type === 'weather'){
        this.setState({
          weatherCurr: weather
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    const {weatherCurr, weatherForecast} = this.state;
    return (
      <div className="app">
        <div className="app-intro">
          <h2>Your Local Weather</h2>
          <City 
            weatherForecast={weatherForecast}
            weatherCurr={weatherCurr}/>
        </div>
      </div>
    );
  }
}

export default App;
