import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import profileImage from '../assets/images/profile_photo.jpg';
import '../styles/TextBlock.scss'

export default class AboutMe extends Component {
  componentDidMount() {

    }
  render() {
    return (

      <div className='textblock about' data-aos="fade-up" data-aos-duration="600">
          <div className = 'about-block-wrapper'>

            <h2 id="about-title" className = 'textblock-title'>
              <span className='word-animate-wrapper'>
                About Me
              </span>
            </h2>
            <div id="about-block"></div>
          </div>
          <div className="about-body">
            <p id="about-body" className='textblock-bodytext'>I enjoy problem solving and bringing creative ideas to life. I'm a light-hearted girl from Sydney, Australia with a background in Physiotherapy. When I'm not coding, you can find me exercising or learning something new.</p>
            <div id="about-image"  className="about-image">
              <div className="about-image-inner"></div>
            </div>
          </div>
    </div>
    );
  }
}
