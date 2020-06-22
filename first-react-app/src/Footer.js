import React from 'react';
import './App.css';

const Footer = () => {
  return(
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <ul className='list-unstyled'>
              <li><a href='https://github.com/ghc92831'>GitHub</a></li>
              <li><a href='http://linkedin.com/in/grace-c-b177a1bb'>Linkedin</a></li>
              <li><a href='https://gifted-rosalind-0ba6e2.netlify.app/'>Portfolio</a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <p className='col-sm'>
            &copy;{new Date().getFullYear()} Grace Chung | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
