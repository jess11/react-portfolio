import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../styles/Navigation.scss'

export default class Navigation extends Component {
  componentDidMount() {
    if ($(window).width() > 780) {

    let navClasses = document.getElementsByClassName('nav')[0].classList;
    function downAction() {
      navClasses.remove('open-desktop');
      navClasses.add('collapse-desktop');
    }

    function upAction() {
      navClasses.remove('collapse-desktop');
      navClasses.add('open-desktop');
    }

  let scrollTop = function() {
    	return window.scrollY;
  };
  let scrollState = 0;
  let scrollDetect = function(down, up) {
    // Current scroll position
    let currentScroll = scrollTop();
    if (scrollTop() === 0) {
    } else if (currentScroll > scrollState) {
      down();
    } else {
      up();
    }
    // Set previous scroll position
    scrollState = scrollTop();
  };

  window.addEventListener("scroll", function() {
    scrollDetect(downAction, upAction);
  });
}

  let navigationLinks = document.getElementsByClassName("nav-link");


for(var i = 0; i < navigationLinks.length; i++) {
            let navigationLink = navigationLinks[i];
            let navigationHref = navigationLinks[i].getAttribute("href");
            navigationLink.addEventListener('click', function(e){
              e.preventDefault();
                TweenLite.to(window, 1, {scrollTo:{y:navigationHref, offsetY:50, autoKill:false}});
          })
        }


  }



  render() {

    return (
      <div >

      </div>
    );
  }
}
