import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper } from 'google-maps-react';
import ReactResizeDetector from 'react-resize-detector';



import '../styles/TextBlock.scss'
import '../styles/Contact.scss'


export class Contact extends Component {



  componentDidMount() {
    this.loadMap(); // call loadMap function to load the google map

  }

  loadMap() {
    if (this.props && this.props.google) { // checks to make sure that props have been passed

      const {google} = this.props; // sets props equal to google
      const maps = google.maps; // sets maps to google maps props

      const mapRef = this.refs.map; // looks for HTML div ref 'map'. Returned in render below.
      const node = ReactDOM.findDOMNode(mapRef); // finds the 'map' div in the React DOM, names it node

      const mapConfig = Object.assign({}, {
        center: {lat: -33.866363,  lng: 151.21}, // sets center of google map to NYC.
        zoom: 11, // sets zoom. Lower numbers are zoomed further out.
        mapTypeId: 'roadmap', // optional main map layer. Terrain, satellite, hybrid or roadmap--if unspecified, defaults to roadmap.
        disableDefaultUI: true,
        draggable: false,
        styles:[
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e9e9e9"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f5f5f5"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#dedede"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#333333"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#f2f2f2"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#fefefe"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    }
]
      })

      this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node (ref='map') with the specified configuration set above.

    }
  }


  render() {
    const onResize = () => {
        const googleMap = this.map;
       const center = {lat: -33.866363,  lng: 151.21};
        google.maps.event.trigger(googleMap, "resize");
        googleMap.setCenter(center);
    }

    return (
      <div>
      <div className='contact textblock' data-aos="fade-up" data-aos-duration="600">
      <div>
          <h2 className = 'textblock-title'>
            <span className='word-animate-wrapper'>
              Contact
            </span>
          </h2>
          <ul className='textblock-bodytext'>
              <li>
                <a href="tel:+61405620208"><span className="flaticon-phone-call contact-icon"></span>0405 620 208</a>
              </li>
              <li>
                  <a href="mailto:jtran040@gmail.com"><span className="flaticon-envelope contact-icon"></span>jtran040@gmail.com</a>
              </li>
              <li>
                  <a href="http://www.linkedin.com/in/jess11" target="_blank" rel="noopener"><span className="flaticon-linkedin contact-icon"></span>linkedin.com/in/jess11</a>
              </li>
              <li>
                  <a href="http://www.github.com/jess11" target="_blank" rel="noopener"><span className="flaticon-github contact-icon"></span>github.com/jess11</a>
              </li>
              <li>
                  <a href="https://drive.google.com/open?id=1EBvxtABV6itMxKGZiLUTmVrd1W0kx1We" target="_blank" rel="noopener"><span className="flaticon-resume contact-icon"></span>Resume</a>
              </li>

          </ul>
          </div>
          <div ref="map" id="google-maps">
            loading map...
            <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
          </div>

      </div>
      <p className="textblock-small">Handcrafted with ♥ by Jess 2018</p>
      <div className="license">
        <p>Font generated by <a href="http://www.flaticon.com">flaticon.com</a>.</p>
        <p>Under <a href="http://creativecommons.org/licenses/by/3.0/">CC</a>: <a data-file="004-placeholder" href="https://www.flaticon.com/authors/gregor-cresnar">Gregor Cresnar</a>, <a data-file="003-resume" href="https://www.flaticon.com/authors/smashicons">Smashicons</a>, <a data-file="002-linkedin" href="http://www.freepik.com">Freepik</a>, <a data-file="001-github" href="https://www.flaticon.com/authors/swifticons">Swifticons</a></p>
      </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqnSoJNyatXpX6eRvDeGYMevN6V2HnwbE',
})(Contact)
