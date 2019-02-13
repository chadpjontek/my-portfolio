/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Spring } from 'react-spring';
import tapeDriveImg from '../images/CommodoreTapeDrive.jpg';
import scholarshipImg from '../images/GrowWithGoogleDeveloperChallengeScholarship.jpg';

// Get the button that opens the modal
let openBtn = document.activeElement;

/**
 * A class component that shows about me
 * @param {string} id - The id of the component
 * @param {fn} toggle - Function to toggle this component
 */
export default class AboutModal extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // set the modal as focus
    document.getElementById(this.props.id).focus();
  }

  // Handle keyboard presses for a11y
  onKeyDown = (e) => {
    const firstTabStop = document.getElementById(this.props.id);
    const lastTabStop = document.getElementById(`${this.props.id}-close`);
    // Check to see if space or enter were pressed
    if (e.keyCode === 32 && document.activeElement === lastTabStop || e.keyCode === 13 && document.activeElement === lastTabStop) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      // Set focus back to the button that opened the modal
      openBtn.focus();
      // Toggle this modal off
      this.props.toggle();
    } else if (e.keyCode === 9) {

      // SHIFT + TAB
      if (e.shiftKey) {
        if (document.activeElement === firstTabStop) {
          e.preventDefault();
          lastTabStop.focus();
        }

        // TAB
      } else {
        if (document.activeElement === lastTabStop) {
          e.preventDefault();
          firstTabStop.focus();
        }
      }
    }

    // ESCAPE
    if (e.keyCode === 27) {
      // Set focus back to the button that opened the modal
      openBtn.focus();
      // Toggle this modal off
      this.props.toggle();
    }
  }

  render() {
    const { id, toggle } = this.props;
    return (
      <div
        id={id}
        className='modal about-modal'
        onKeyDown={this.onKeyDown}
        tabIndex='0'
      >
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
              aria-level={2}
              className='about-modal__header'
            >
              About me
            </div>
          )}
        </Spring>
        <div className='about-modal__content'>
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
              <p style={props} className='about-modal__content__p'>
                My name is Chad Pjontek and I am a developer, designer, producer, student, teacher, gamer, father, and friend to all mankind! I have a passion for technology, learning, solving problems, creating new things, and helping people.
                <br />
                <br />
                My interest in technology started at an early age and actually wrote my first program in BASIC on the Commodore Vic 20. It was a text adventure game and I saved it on this:
              </p>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scale(0)'
            }}
            to={{
              transform: 'scale(1)'
            }}
            config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
          >
            {props => (
              <img
                style={props}
                className='about-modal__content__img lazyload'
                data-srcset={tapeDriveImg.srcSet}
                data-src={tapeDriveImg.src}
                alt="A vintage Commodore Datasette" />
            )}
          </Spring>
          <Spring
            from={{
              transform: `translate3d(${window.innerWidth * 2}px,0,0)`
            }}
            to={{
              transform: 'translate3d(0,0,0)'
            }}
            config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
          >
            {props => (
              <p style={props} className='about-modal__content__p gwg-p'>
                It could easily take 30 minutes or longer to save, and another 30 to load, but it was highly rewarding when I had a finished product. I still get that thrill today when creating something new!
                <br />
                <br />
                My most recent accomplishment, however, is getting the chance to participate in the Grow with Google Developer Challenge Scholarship. By the end of the program, I was one of 1000 awarded a full scholarship to the Mobile Web Specialist Nanodegree where I became a student leader and mentor. It was an incredible learning experience that I'm grateful to have been a part of.
              </p>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scale(0)'
            }}
            to={{
              transform: 'scale(1)'
            }}
            config={{ delay: 500, tension: 600, friction: 50, clamp: true }}
          >
            {props => (
              <img
                style={props}
                className='about-modal__content__img gwg-img lazyload'
                data-srcset={scholarshipImg.srcSet}
                data-src={scholarshipImg.src}
                alt="Grow with Google Developer Challenge Scholarship recipient" />
            )}
          </Spring>
        </div>
        <div
          id={`${id}-close`}
          className="btn btn--close"
          role='button'
          onClick={toggle}
          tabIndex='0'
        >X</div>
      </div>
    );
  }
}