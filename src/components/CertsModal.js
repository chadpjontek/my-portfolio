import React from 'react';
import { Spring } from 'react-spring';
import mwsImg from '../images/MWS.png';
import dataVisImg from '../images/DataVis.png';
import frontEndImg from '../images/Frontend.png';
import algoImg from '../images/Algorithms.png';

/**
 * A class component that shows my certifications
 * @param {string} id - The id of the component
 * @param {fn} toggle - Function to toggle this component
 */
export default function CertsModal(props) {
  const { id, toggle } = props;
  return (
    <div id={id} className='modal certs-modal'>
      <Spring
        from={{
          transform: 'translate3d(0,-100px,0)'
        }}
        to={{
          transform: 'translate3d(0,0,0)'
        }}
        config={{ delay: 200, tension: 600, friction: 50, clamp: true }}
      >
        {props => (
          <div
            style={props}
            role='heading'
            aria-level={1}
            className='certs-modal__header'
          >
            Certifications
          </div>
        )}
      </Spring>
      <div className='certs-modal__content'>
        <Spring
          from={{
            transform: `translate3d(-${window.innerWidth}px,0,0)`
          }}
          to={{
            transform: 'translate3d(0,0,0)'
          }}
          config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
        >
          {props => (
            <a
              style={props}
              className='certs-modal__content__link'
              href={'https://confirm.udacity.com/PQPKPWKC'}>
              <img
                className='certs-modal__content__img lazyload'
                data-srcset={mwsImg.srcSet}
                data-src={mwsImg.src}
                alt='A certificate of completion of the Mobile Web Specialist Nanodegree from Udacity.'
              />
            </a>
          )}
        </Spring>
        <Spring
          from={{
            transform: `translate3d(${window.innerWidth}px,0,0)`
          }}
          to={{
            transform: 'translate3d(0,0,0)'
          }}
          config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
        >
          {props => (
            <a
              style={props}
              className='certs-modal__content__link'
              href={'https://www.freecodecamp.org/chadpjontek'}>
              <img
                className='certs-modal__content__img lazyload'
                data-srcset={dataVisImg.srcSet}
                data-src={dataVisImg.src}
                alt='A certificate of completion of the Data Visualization Projects from freeCodeCamp.'
              />
            </a>
          )}
        </Spring>
        <Spring
          from={{
            transform: `translate3d(-${window.innerWidth}px,0,0)`
          }}
          to={{
            transform: 'translate3d(0,0,0)'
          }}
          config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
        >
          {props => (
            <a
              style={props}
              className='certs-modal__content__link'
              href={'https://www.freecodecamp.org/chadpjontek'}>
              <img
                className='certs-modal__content__img lazyload'
                data-srcset={frontEndImg.srcSet}
                data-src={frontEndImg.src}
                alt='A certificate of completion of the Front End Development Projects from freeCodeCamp.'
              />
            </a>
          )}
        </Spring>
        <Spring
          from={{
            transform: `translate3d(${window.innerWidth}px,0,0)`
          }}
          to={{
            transform: 'translate3d(0,0,0)'
          }}
          config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
        >
          {props => (
            <a
              style={props}
              className='certs-modal__content__link'
              href={'https://www.freecodecamp.org/chadpjontek'}>
              <img
                className='certs-modal__content__img lazyload'
                data-srcset={algoImg.srcSet}
                data-src={algoImg.src}
                alt='A certificate of completion of the JavaScript Algorithms and Data Structures from freeCodeCamp.'
              />
            </a>
          )}
        </Spring>
      </div>
      <div id={`${id}-close`} className="btn btn--close" role='button' onClick={toggle}>X</div>
    </div>
  );
}
