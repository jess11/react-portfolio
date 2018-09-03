import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../styles/Work.scss';
import getfashion from '../assets/images/project-getfashion.jpg';
import twitterclone from '../assets/images/project-twitterclone.jpg';
import imagemaker from '../assets/images/project-imagemaker.jpg';


export default class Work extends Component {

  render() {
    return (
      <div className='textblock work'  data-aos="fade-up" data-aos-duration="600">
          <h2 className = 'textblock-title'>
            <span className='word-animate-wrapper'>
              Work
            </span>
          </h2>
          <div className="work-live">

            <h3>Live Projects</h3>
            <div className='textblock-bodytext'>
              <p>Worked on the following projects: </p>
              <ul>
                <li>
                  <a href="https://www.digital.nsw.gov.au/" target="_blank" rel="noopener">Digital NSW</a>
                </li>
                <li>
                  <p>Charter Hall Offices</p>
                  <ul>
                    <li>
                      <a href="https://www.360queen.com.au/" target="_blank" rel="noopener">- 360 Queen Street</a>
                    </li>
                    <li>
                      <a href="https://www.wesleyplace.com.au/" target="_blank" rel="noopener">- Wesley Place</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="https://www.pacificsquare.com.au/" target="_blank" rel="noopener">Charter Hall Retail</a>
                </li>
                <li>
                  <a href="https://www.tisnational.gov.au/" target="_blank" rel="noopener">TIS National</a>
                </li>
                <li>
                  <a href="https://tisonline.tisnational.gov.au/" target="_blank" rel="noopener">TIS Online</a>
                </li>
                <li>
                  <a href="https://www.ses.nsw.gov.au/" target="_blank" rel="noopener">SES</a>
                </li>
              </ul>
            </div>

          </div>
          <div className="work-project">
            <div>
              <h3>Get Fashion</h3>
              <p className='textblock-bodytext'>
                  E-commerce fashion website, with a payment system and chat bot. This was a group project where I worked on parts of the front-end and back-end (product listing/ Stripe api).
                  Created with HTML, CSS, Javascript, Bootstrap, Ruby on Rails, Stripe api, API.ai, Cloudinary
              </p>
              <a className="work-github-link" aria-label="View Github Code for Go Girls Website"  href="https://github.com/jess11/GoGirls_Fashions" target="_blank" rel="noopener"><span className="flaticon-github work-icon"></span>View Code</a>
            </div>
            <div className="work-image-wrapper">
              <a href="https://gogirls-fashions.herokuapp.com" target="_blank" rel="noopener" aria-label="View Go Girls fashion website" >
                <img src={getfashion} alt="Get Fashion" className="work-image" data-aos="fade-left" data-aos-duration="600"/>
                <div className="work-overlay"></div>
                <span className="flaticon-link work-icon-overlay"></span>
              </a>
            </div>
          </div>
          <div className="work-project">

            <div className="work-image-wrapper">
              <a href="https://twitter-clone11.herokuapp.com/" aria-label="View Twitter Clone Website"  target="_blank" rel="noopener">
                <img src={twitterclone} alt="Twitter Clone" className="work-image" data-aos="fade-right" data-aos-duration="600"/>
                <div className="work-overlay"></div>
                <span className="flaticon-link work-icon-overlay"></span>
              </a>
            </div>
            <div>
              <h3>Twitter Simplified</h3>
              <p className='textblock-bodytext'>
                A web app similar to Twitter where people can sign up, share posts and follow each other.
                Created with HTML, CSS, Javascript, Bootstrap, Ruby on Rails, Cloudinary, Google Maps api
              </p>
              <a className="work-github-link" aria-label="View Github Code for Twitter Clone website"  href="https://github.com/jess11/project1" target="_blank" rel="noopener"><span className="flaticon-github work-icon"></span>View Code</a>
            </div>
          </div>
          <div className="work-project">
            <div>
              <h3>Image Maker</h3>
              <p className='textblock-bodytext'>
                A web app where people can take photos of themselves, edit them and then publish them onto the web. It includes the application of mask filters using a face detection library. Currently, not working on iOS mobile devices as webRTC is not supported.
                Created with HTML, CSS, Javascript, jQuery, webRTC,  Bootstrap, Ruby on Rails, Cloudinary, CCV.js/face.js, ajax.

              </p>
              <a className="work-github-link" aria-label="View Github Code for Image Maker website" href="https://github.com/jess11/img" target="_blank" rel="noopener"><span className="flaticon-github work-icon"></span>View Code</a>


            </div>
            <div className="work-image-wrapper">
              <a href="https://img-maker.herokuapp.com" target="_blank" rel="noopener" aria-label="View Image Maker Website" >
                <img src={imagemaker} alt="Image Maker" className="work-image" data-aos="fade-left" data-aos-duration="600"/>
                <div className="work-overlay"></div>
                <span className="flaticon-link work-icon-overlay"></span>
              </a>
            </div>
          </div>
    </div>
    );
  }
}
