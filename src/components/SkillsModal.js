import React, { Component } from 'react';
import { Spring } from 'react-spring';

// Get the button that opens the modal
let openBtn = document.activeElement;

/**
 * A class component that shows my skills
 * @param {string} id - The id of the component
 * @param {fn} toggle - Function to toggle this component
 */
export default class SkillsModal extends Component {
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
        className='modal skills-modal'
        onKeyDown={this.onKeyDown}
        tabIndex='0'>
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
              className='skills-modal__header'
            >
              Skills
            </div>
          )}
        </Spring>
        <div className='skills-modal__content'>
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
              <div
                style={props}
                role='heading'
                aria-level={2}
                className='skills-modal__content__header languages-header'
              >
                Languages and databases
              </div>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'top'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'top'
            }}
            config={{ delay: 800, tension: 600, friction: 40, clamp: true }}
          >
            {props => (
              <p
                style={props}
                className='skills-modal__content__skills languages-paragraph'
              >
                HTML<br />
                CSS<br />
                JavaScript<br />
                MongoDB<br />
                SQL
              </p>
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
              <div
                style={props}
                role='heading'
                aria-level={2}
                className='skills-modal__content__header libraries-header'
              >
                Libraries and frameworks
              </div>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'top'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'top'
            }}
            config={{ delay: 800, tension: 600, friction: 40, clamp: true }}
          >
            {props => (
              <p
                style={props}
                className='skills-modal__content__skills libraries-paragraph'
              >
                React<br />
                Node<br />
                Express<br />
                D3<br />
                Phaser<br />
                Bootstrap<br />
                JQuery
              </p>
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
              <div
                style={props}
                role='heading'
                aria-level={2}
                className='skills-modal__content__header automation-header'
              >
                Automation and web tooling
              </div>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'top'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'top'
            }}
            config={{ delay: 800, tension: 600, friction: 40, clamp: true }}
          >
            {props => (
              <p
                style={props}
                className='skills-modal__content__skills automation-paragraph'
              >
                webpack<br />
                Gulp<br />
                Grunt
              </p>
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
              <div
                style={props}
                role='heading'
                aria-level={2}
                className='skills-modal__content__header colaboration-header'
              >
                Version control and colaboration
              </div>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'top'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'top'
            }}
            config={{ delay: 800, tension: 600, friction: 40, clamp: true }}
          >
            {props => (
              <p
                style={props}
                className='skills-modal__content__skills colaboration-paragraph'
              >
                Git<br />
                Github
              </p>
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
              <div
                style={props}
                role='heading'
                aria-level={2}
                className='skills-modal__content__header design-header'
              >
                Design and animation tools
              </div>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'top'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'top'
            }}
            config={{ delay: 800, tension: 600, friction: 40, clamp: true }}
          >
            {props => (
              <p
                style={props}
                className='skills-modal__content__skills design-paragraph'
              >
                Figma<br />
                Gimp<br />
                Inkscape<br />
                Blender
              </p>
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
              <div
                style={props}
                role='heading'
                aria-level={2}
                className='skills-modal__content__header production-header'
              >
                Audio and video production
              </div>
            )}
          </Spring>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'top'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'top'
            }}
            config={{ delay: 800, tension: 600, friction: 40, clamp: true }}
          >
            {props => (
              <p
                style={props}
                className='skills-modal__content__skills production-paragraph'
              >
                FL Studio<br />
                Sony Vegas
              </p>
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