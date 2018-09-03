import React, {Component} from 'react';
import ReactDOM from 'react-dom';


import AOS from 'aos';
import 'aos/src/sass/aos.scss';
import '../styles/vendor-trunk.scss';
import '../assets/fonts/_flaticon.scss';
import '../styles/App.scss';
import printMe from './print.js';

import Intro from './Intro';
import Navigation from './Navigation'
import HeroTile from './HeroTile';

import AboutMe from './AboutMe';
import TechStack from './TechStack';
import Contact from './Contact';
// import MapContainer from './MapContainer';
// import ImageBlock from './ImageBlock';
import Work from './Work';


if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV !== 'production') {
  //  console.log('Looks like we are in development mode!');
 }


//PWAs
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
          console.log('registered')
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

class App extends Component {
  componentDidMount() {
    AOS.init();
    $(function() {
        //gsap
        let homeSection = document.getElementById('home');
        let aboutSection = document.getElementById('about');
        let aboutBox = document.getElementById('about-block');

        let ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave'
            }
        });

        var t1 = new TimelineLite();
        t1.from("#about-block", 2, {
          y:100,
          backgroundColor:"#ffc371"
        })
        .from("#about-image", 1, {
          y:100,
        })



        new ScrollMagic.Scene({
            triggerElement: homeSection,
            duration: 900,
            offset:100
        })
        .setTween(t1)
        .addTo(ctrl);

        var t2 = new TimelineLite();
        t2.from("#tech-block", 3, {
          y:30,
          backgroundColor:"#ffc371",
          scale:0.1
        })

        new ScrollMagic.Scene({
            triggerElement: aboutSection,
            duration: 900,
            offset:100
        })
        .setTween(t2)
        .addTo(ctrl);

      //navigation
        function mobilecheck() {
            var check = false;
            (function(a) {
                if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    check = true;
                }
            })(navigator.userAgent || navigator.vendor || window.opera);
            return check;
        }
        var clickevent = mobilecheck() ? 'touchstart' : 'click';

        var items = $('.slide');
        var links = $('.slide a');
        var content = $('.content');

        function open() {
            $(items).removeClass('close').addClass('open');
        }

        function close() {
            $(items).removeClass('open').addClass('close');
        }

        $('#navToggle').on(clickevent, function(event) {
            event.stopPropagation();
            event.preventDefault();
            if (content.hasClass('open')) {
                close();
            } else {
                open();
            }
        });
        content.click(function() {
            if (content.hasClass('open')) {
                close();
            }
        });
        links.click(function() {
            if (content.hasClass('open')) {
                close();
            }
        });

    });

  }

  render() {
    return (
      <div className="container">
        <Navigation/>
        <a id='home'></a>
        <HeroTile/>
        <a id='about'></a>
        <AboutMe/>
        <a id='stack'></a>
        <TechStack/>
        <a id='work'></a>
        <Work/>
        <a id='contact'></a>
        <Contact/>


      </div>
    );
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
