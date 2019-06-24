import React, { Component } from 'react';
import axios from 'axios';
import '../styles/HomePage.css';
import Forecast from './Forecast';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fiveDayForecast: null,
      zip: '',
      loaded: false,
      error: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const providedZip = this.state.zip;
    const apiKey = require('../../config/Keys').APIKEY;
    //Make initial API CALL
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${providedZip}&APPID=${apiKey}&units=imperial`
      )
      .then(res => {
        var data = res.data;
        var city = res.data.city.name;
        // Initializing array to store data into
        var myArray = [];
        // Loop to filter out and only get the data that we need for every 8th object. Because the call returns every 3 hour forecast that we dont need right now
        for (var i = 0; i < data.list.length; i += 8) {
          const filteredData = {
            city,
            date: data.list[i].dt_txt,
            expectedTemp: data.list[i].main.temp,
            minTemp: data.list[i].main.temp_min,
            maxTemp: data.list[i].main.temp_max,
            description: data.list[i].weather[0].main,
            icon: data.list[i].weather[0].icon,
            id: data.list[i].weather[0].id
          };
          // Push filtered data into the array
          myArray.push(filteredData);
          // Set array into state so we can use when needed
          this.setState({ fiveDayForecast: myArray });
        }
        // Set loading to false so that the UI doesnt start rendering until after all the data is loaded
        this.setState({ loaded: true });
      })
      .catch(err => {
        const error =
          'Oops, Something went wrong! Please check that the ZIP code is valid and try again!';
        this.setState({ error: error });
      });
  };
  render() {
    if (this.state.loaded === true) {
      return <Forecast data={this.state.fiveDayForecast} />;
    }
    return (
      <div className='homepage-overlay'>
        <div>
          <h1 className='header'>Local Weather</h1>
          {this.state.error ? (
            <p className='text-danger'>{this.state.error}</p>
          ) : (
            ''
          )}
          <p className='secondary-header mt-3'>
            Please enter the 5 digit zip code of your city
          </p>
          <br />
          <form
            className='form-inline d-flex justify-content-center'
            onSubmit={this.onSubmit}
          >
            <div className='form-group mb-2 ml-5'>
              <input
                type='text'
                name='zip'
                pattern='\d*'
                className='form-control-plaintext my-input'
                placeholder='5 Digit Zip Code Here'
                maxLength='5'
                onChange={this.onChange}
                value={this.state.zip}
              />
            </div>
            <button type='submit' className='btn mb-2 my-button'>
              GO!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HomePage;
