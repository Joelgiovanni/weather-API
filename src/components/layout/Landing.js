import background from '../../images/contrast.jpg';
import '../styles/landing.css';

import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <div>
        <img src={background} alt='Mountains' className='background' />{' '}
      </div>
    );
  }
}

export default Landing;
