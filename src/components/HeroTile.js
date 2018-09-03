import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import '../styles/HeroTile.scss';

// import heroImage2 from '../assets/images/heroImage5.jpeg';

export default class HeroTile extends Component {
  componentDidMount() {


    // let words;
    // let $rawText;
    //
    // function separateWords(anchorTag){
    //   $rawText = document.getElementById(anchorTag).getElementsByClassName('word-animate-wrapper');
    //   [].forEach.call($rawText, function ($rawText) {
    //     let rawText = $rawText.innerHTML;
    //     words =  rawText.split(' ');
    //     let html = '';
    //
    //     for (var i = 0; i < words.length; i++) {
    //         html += `<span class='word-animate'><span>${words[i]}</span></span>`;
    //     };
    //     $rawText.innerHTML = html;
    //   })
    // }
    //
    // const animateWords = async (anchorTag) => {
    //   await separateWords(anchorTag);
    //   let $word = document.getElementById(anchorTag).getElementsByClassName('word-animate');
    //   [].forEach.call($word , function (word, i) {
    //     setTimeout(function(){
    //       word.classList.add('word-animate-finished');
    //     }, 250*i );
    //
    //   })
    //
    //   var animateHTML = function () {
    //       var elems,
    //         windowHeight
    //       var init = function () {
    //         elems = document.getElementsByClassName('word-animate')
    //         windowHeight = window.innerHeight
    //         _addEventHandlers()
    //       }
    //       var _addEventHandlers = function () {
    //         window.addEventListener('scroll', _checkPosition)
    //         window.addEventListener('resize', init)
    //       }
    //       var _checkPosition = function () {
    //         [].forEach.call(elems, function (elem, i) {
    //           var posFromTop = elem.getBoundingClientRect().top
    //           if (posFromTop - windowHeight <= 0) {
    //             setTimeout(function(){
    //               elem.classList.add('word-animate-finished');
    //             }, 250*i );
    //           }
    //         })
    //       }
    //       return {
    //         init: init
    //       }
    //     }
    //     animateHTML().init()
    //
    //
    // }
    //
    // animateWords('home');
    // animateWords('about');
    // animateWords('stack');
    // const animateSentence = function(){
    //   let $sentence = document.getElementsByClassName('sentence-animate');
    //   [].forEach.call($sentence , function (sentence, i) {
    //     setTimeout(function(){
    //       sentence.classList.add('sentence-animate-finished');
    //     }, 500 );
    //
    //   })
    // }
    //
    // animateSentence();
    //







  }

  render() {
    return (
      <div className='herotile'>
          <div className='herotile-text'>
              <div>
                <h1>
                  <span>
                    Jessica Tran
                  </span>
                </h1>
                <h2>
                  <span>
                    <span>
                    Front-End Web Developer
                    </span>
                  </span>
                </h2>
              </div>
          </div>
      </div>
    );
  }
}
