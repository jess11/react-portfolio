import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import paint from '../assets/images/window.jpeg';
import '../styles/ImageBlock.scss';

export default class ImageBlock extends Component {

  render() {
    return (
      <div className='imageblock'>

        <img src={paint} alt='paint'/>
        <div className='imageblock-overlay'></div>

      </div>
    );
  }
}
