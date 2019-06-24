import React, { Component } from 'react';
import HomePage from './HomePage';
import '../styles/forecast.css';

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true
    };
  }

  componentDidMount() {
    console.log(this.state);
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
          <p className='secondary-header mt-3'>5 Day Forecast</p>
          <i className='fas fa-arrow-circle-down arrow' />
        </div>
        <div className='reset'>
          <button type='icon' className='button' onClick={this.onClick}>
            <span>Check different city</span>
          </button>
        </div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12 col-md-2 text-center'>
              <ul className='forecast-list mx-auto'>
                <li>
                  <i
                    className={`owf owf-${this.props.data[0].id} weather-icon`}
                  />
                </li>
                <li>
                  Date: <span className='result'>{this.filteredDate(0)} </span>
                </li>
                <li>
                  Description:{' '}
                  <span className='result'>
                    {this.props.data[0].description}
                  </span>
                </li>
                <li>
                  Temp:{' '}
                  <span className='result'>
                    {this.props.data[0].expectedTemp}°F
                  </span>
                </li>
                <li>
                  Min Temp:{' '}
                  <span className='result'>{this.props.data[0].minTemp}°F</span>
                </li>
                <li>
                  Max Temp:{' '}
                  <span className='result'>{this.props.data[0].maxTemp}°F</span>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-2 text-center'>
              <ul className='forecast-list mx-auto'>
                <li>
                  <i
                    className={`owf owf-${this.props.data[1].id} weather-icon`}
                  />
                </li>
                <li>
                  Date: <span className='result'>{this.filteredDate(1)} </span>
                </li>
                <li>
                  Description:{' '}
                  <span className='result'>
                    {this.props.data[1].description}
                  </span>
                </li>
                <li>
                  Temp:{' '}
                  <span className='result'>
                    {this.props.data[1].expectedTemp}°F
                  </span>
                </li>
                <li>
                  Min Temp:{' '}
                  <span className='result'>{this.props.data[1].minTemp}°F</span>
                </li>
                <li>
                  Max Temp:{' '}
                  <span className='result'>{this.props.data[1].maxTemp}°F</span>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-2 text-center'>
              <ul className='forecast-list mx-auto'>
                <li>
                  <i
                    className={`owf owf-${this.props.data[2].id} weather-icon`}
                  />
                </li>
                <li>
                  Date: <span className='result'>{this.filteredDate(2)} </span>
                </li>
                <li>
                  Description:{' '}
                  <span className='result'>
                    {this.props.data[2].description}
                  </span>
                </li>
                <li>
                  Temp:{' '}
                  <span className='result'>
                    {this.props.data[2].expectedTemp}°F
                  </span>
                </li>
                <li>
                  Min Temp:{' '}
                  <span className='result'>{this.props.data[2].minTemp}°F</span>
                </li>
                <li>
                  Max Temp:{' '}
                  <span className='result'>{this.props.data[2].maxTemp}°F</span>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-2 text-center'>
              <ul className='forecast-list mx-auto'>
                <li>
                  <i
                    className={`owf owf-${this.props.data[3].id} weather-icon`}
                  />
                </li>
                <li>
                  Date: <span className='result'>{this.filteredDate(3)} </span>
                </li>
                <li>
                  Description:{' '}
                  <span className='result'>
                    {this.props.data[3].description}
                  </span>
                </li>
                <li>
                  Temp:{' '}
                  <span className='result'>
                    {this.props.data[3].expectedTemp}°F
                  </span>
                </li>
                <li>
                  Min Temp:{' '}
                  <span className='result'>{this.props.data[3].minTemp}°F</span>
                </li>
                <li>
                  Max Temp:{' '}
                  <span className='result'>{this.props.data[3].maxTemp}°F</span>
                </li>
              </ul>
            </div>
            <div className='col-sm-12 col-md-2 text-center'>
              <ul className='forecast-list mx-auto'>
                <li>
                  <i
                    className={`owf owf-${this.props.data[4].id} weather-icon`}
                  />
                </li>
                <li>
                  Date: <span className='result'>{this.filteredDate(4)} </span>
                </li>
                <li>
                  Description:{' '}
                  <span className='result'>
                    {this.props.data[4].description}
                  </span>
                </li>
                <li>
                  Temp:{' '}
                  <span className='result'>
                    {this.props.data[4].expectedTemp}°F
                  </span>
                </li>
                <li>
                  Min Temp:{' '}
                  <span className='result'>{this.props.data[4].minTemp}°F</span>
                </li>
                <li>
                  Max Temp:{' '}
                  <span className='result'>{this.props.data[4].maxTemp}°F</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forecast;
