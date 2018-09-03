import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../styles/TextBlock.scss'

export default class TechStack extends Component {

  render() {
    return (
      <div className='textblock textblock-tech__wrapper'>
          <div data-aos="fade-up" data-aos-duration="600">
            <div className="textblock-tech-left">
              <div className="tech-block-wrapper">
                <h2 className='textblock-title'>
                  <span className='word-animate-wrapper'>
                    Tech Stack
                  </span>
                </h2>
                <div id="tech-block"></div>
              </div>
              <ul className='textblock-tech'>

                  <li className='textblock-tech__item'>HTML</li>
                  <li className='textblock-tech__item '>Pug</li>
                  <li className='textblock-tech__item'>CSS</li>
                  <li className='textblock-tech__item'>Javascript</li>
                  <li className='textblock-tech__item'>jQuery</li>
                  <li className='textblock-tech__item'>Bootstrap</li>
                  <li className='textblock-tech__item'>Backbone</li>
                  <li className='textblock-tech__item'>Underscore</li>
                  <li className='textblock-tech__item'>Ajax</li>
                  <li className='textblock-tech__item'>Ruby</li>
                  <li className='textblock-tech__item'>Ruby on Rails</li>
                  <li className='textblock-tech__item'>Google Analytics</li>
                  <li className='textblock-tech__item'>Google Tag Manager</li>
                  <li className='textblock-tech__item '>Sass</li>
                  <li className='textblock-tech__item '>Google Maps</li>
                  <li className='textblock-tech__item'>Gulp</li>
                  <li className='textblock-tech__item'>Grunt</li>
                  <li className='textblock-tech__item'>Webpack</li>
                </ul>
              </div>

            <div data-aos="fade-up" data-aos-duration="600" className="textblock-tech-right">
              <div>
                <h3 className="textblock-tech-dabble">
                    Dabbled In
                </h3>
              </div>
              <ul className='textblock-tech'>
                <li className='textblock-tech__item'>React.js</li>
                <li className='textblock-tech__item'>Vue.js</li>
                <li className='textblock-tech__item'>Websockets</li>
                <li className='textblock-tech__item'>Phaser</li>
                <li className='textblock-tech__item'>Three.js</li>
                <li className='textblock-tech__item'>Angular</li>
                <li className='textblock-tech__item'>Node.js</li>
                <li className='textblock-tech__item'>Razor</li>
                <li className='textblock-tech__item'>PHP</li>
              </ul>
            </div>

          </div>
      </div>
    );
  }
}
