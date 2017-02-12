import React, {PropTypes, Component} from 'react';
import moment from 'moment';
import WeatherCard from '../weatherCard';
import './style.scss';

class City extends Component {

  render() {
    const {weatherForecast, weatherCurr} = this.props;
    let content;

    if (Object.keys(weatherForecast).length === 0 || Object.keys(weatherCurr).length === 0) {
      content = (
        <h2>loading</h2>
      );
    } else {

      const forecasts = weatherForecast.list
        .filter((forecast) => {
          const date = moment(forecast.dt_txt).format('h:mm a');
          return date === '12:00 pm';
        })
        .map((forecast, i) => {
          const date = moment(forecast.dt_txt).format('dddd');
          return (
            <WeatherCard
              weather={forecast}
              date={date}
              key={i} />
          );
        });

      content = (
        <div>
          <h2>Weather in {weatherCurr.name}</h2>
          <WeatherCard weather={weatherCurr} date={'Today'}/>
          {forecasts}
        </div>
      );
    }
    return (
      <div className='card'>
        {content}
      </div>
    );
  }
}

City.propTypes = {
  weatherForecast: PropTypes.object.isRequired,
  weatherCurr: PropTypes.object.isRequired
};

export default City;
