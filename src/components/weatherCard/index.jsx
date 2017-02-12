import React, {PropTypes, Component} from 'react';
import './style.scss';

class WeatherCard extends Component {

  kelvinToFahrenheit(kelvin) {
    return parseInt(kelvin, 10) * 9 / 5 - 459.67;
  };

  render() {
    const {weather, date} = this.props;
    const tempMax = this.kelvinToFahrenheit(weather.main.temp_max).toFixed(2);
    const tempMin = this.kelvinToFahrenheit(weather.main.temp_min).toFixed(2);

    return (
      <div className='card'>
        <h3>{date}</h3>
        <p>{weather.weather[0].description}</p>
        <p>High: {tempMax}</p>
        <p>Low: {tempMin}</p>
        <p>Humidity: {weather.main.humidity}</p>
      </div>
    );
  }
}

WeatherCard.propTypes = {
  weather: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired
};

export default WeatherCard;
