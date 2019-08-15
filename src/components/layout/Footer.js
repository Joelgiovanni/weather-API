import React, { Component } from 'react';
import '../styles/footer.css';

class Footer extends Component {
  render() {
    return (
      <div className='container-fluid container-fluid-footer'>
        <div className='footer'>
          <div className='footer-content'>
            Joel Godoy{' '}
            <span className='copyright'>
              {' '}
              &#169; {new Date().getFullYear()}{' '}
            </span>
            <a
              className='fab fa-github icon'
              href='https://github.com/Joelgiovanni'
              rel='noopener noreferrer'
              target='_blank'
            >
              {' '}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
