import React, { Component } from 'react';
import { Link } from 'react-scroll';
import HomePage from './HomePage';
import '../styles/forecast.css';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  // Function that will filter out the date and return it in the format that I want it
  filteredDate(index) {
    const date = this.props.data[index].date;

    const newDate = date.split(' ');

    const relDate = newDate[0];
    const finalDate = relDate.split('-');

    const ourDate = finalDate[1] + '/' + finalDate[2] + '/' + finalDate[0];

    return ourDate;
  }

  onClick = e => {
    this.setState({ loaded: false });
  };

  render() {
    if (this.state.loaded === false) {
      return <HomePage />;
    }
    return (
      <div>
        <div className='forecast-overlay'>
          <h1 className='forecast-header'>{this.props.data[0].city}</h1>

          <p className='large-temp mt-3'>
            {Math.round(this.props.data[0].expectedTemp)}°
          </p>
          <p className='large-desc mt-3'>{this.props.data[0].description}</p>
        </div>
        <div className='reset'>
          <button type='icon' className='button' onClick={this.onClick}>
            <span>
              CHECK A DIFFERENT CITY
              <i className='fas fa-redo reset-icon ml-1' />
            </span>
          </button>
        </div>
        <div className='five-day'>
          <button type='icon' className='button'>
            <Link
              activeClass='active'
              to='fiveDay'
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <span>
                5 DAY FORECAST
                <i className='fas fa-angle-double-down down-icon' />
              </span>
            </Link>
          </button>
        </div>
        <div id='fiveDay' className='container-fluid cards-container'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col'>
                <div className='card text-center mx-auto'>
                  <p className='left ml-4 top-temp'>
                    Min: {Math.floor(this.props.data[0].minTemp)}°{' '}
                  </p>
                  <p className='right mr-4 top-temp'>
                    {' '}
                    <i className='fas fa-wind' /> wind:{' '}
                    {Math.floor(this.props.data[0].wind)}MPH{' '}
                  </p>
                  <div className='card-header'>
                    {' '}
                    <span
                      className={`owf owf-${
                        this.props.data[0].id
                      } weather-icon`}
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'> {this.filteredDate(0)}</h5>
                    <p className='card-temp'>
                      {Math.round(this.props.data[0].expectedTemp)}°
                    </p>
                    <p className='card-description'>
                      {this.props.data[0].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col'>
                <div className='card text-center mx-auto'>
                  <p className='left ml-4 top-temp'>
                    Min: {Math.floor(this.props.data[1].minTemp)}°{' '}
                  </p>
                  <p className='right mr-4 top-temp'>
                    {' '}
                    <i className='fas fa-wind' /> wind:{' '}
                    {Math.floor(this.props.data[1].wind)}MPH{' '}
                  </p>
                  <div className='card-header'>
                    {' '}
                    <span
                      className={`owf owf-${
                        this.props.data[1].id
                      } weather-icon`}
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'> {this.filteredDate(1)}</h5>
                    <p className='card-temp'>
                      {Math.round(this.props.data[1].expectedTemp)}°
                    </p>
                    <p className='card-description'>
                      {this.props.data[1].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col'>
                {' '}
                <div className='card text-center mx-auto'>
                  <p className='left ml-4 top-temp'>
                    Min: {Math.floor(this.props.data[2].minTemp)}°{' '}
                  </p>
                  <p className='right mr-4 top-temp'>
                    {' '}
                    <i className='fas fa-wind' /> wind:{' '}
                    {Math.floor(this.props.data[2].wind)}MPH{' '}
                  </p>
                  <div className='card-header'>
                    {' '}
                    <span
                      className={`owf owf-${
                        this.props.data[2].id
                      } weather-icon`}
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'> {this.filteredDate(2)}</h5>
                    <p className='card-temp'>
                      {Math.round(this.props.data[2].expectedTemp)}°
                    </p>
                    <p className='card-description'>
                      {this.props.data[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col'>
                {' '}
                <div className='card text-center mx-auto'>
                  <p className='left ml-4 top-temp'>
                    Min: {Math.floor(this.props.data[3].minTemp)}°{' '}
                  </p>
                  <p className='right mr-4 top-temp'>
                    {' '}
                    M <i className='fas fa-wind' /> wind:{' '}
                    {Math.floor(this.props.data[3].wind)}MPH{' '}
                  </p>
                  <div className='card-header'>
                    {' '}
                    <span
                      className={`owf owf-${
                        this.props.data[3].id
                      } weather-icon`}
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'> {this.filteredDate(3)}</h5>
                    <p className='card-temp'>
                      {Math.round(this.props.data[3].expectedTemp)}°
                    </p>
                    <p className='card-description'>
                      {this.props.data[3].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-12 col mb-5'>
                {' '}
                <div className='card text-center mx-auto'>
                  <p className='left ml-4 top-temp'>
                    Min: {Math.floor(this.props.data[4].minTemp)}°{' '}
                  </p>
                  <p className='right mr-4 top-temp'>
                    {' '}
                    <i className='fas fa-wind' /> wind:{' '}
                    {Math.floor(this.props.data[4].wind)}MPH{' '}
                  </p>
                  <div className='card-header'>
                    {' '}
                    <span
                      className={`owf owf-${
                        this.props.data[4].id
                      } weather-icon`}
                    />
                  </div>
                  <div className='card-body'>
                    <h5 className='card-title'> {this.filteredDate(4)}</h5>
                    <p className='card-temp'>
                      {Math.round(this.props.data[4].expectedTemp)}°
                    </p>
                    <p className='card-description'>
                      {this.props.data[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
