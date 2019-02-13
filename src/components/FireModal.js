import React, { Component } from 'react';
import { Spring } from 'react-spring';

// Get the button that opens the modal
let openBtn = document.activeElement;

/**
 * A class component that renders a modal that scales in it's content
 * @param {string} id - The id of the component
 * @param {string} text - The innerText of this element
 * @param {fn} toggle - The toggle function to show/remove this component
 * @param {string} classList - The list of classes to add to this element
 */
export default class FireModal extends Component {
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
    if (e.keyCode === 32 &&  document.activeElement === lastTabStop|| e.keyCode === 13 && document.activeElement === lastTabStop) {
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
    const { id, text, toggle, classList } = this.props;
    return (
      <div
        id={id}
        className={`modal modal--fire ${classList}`}
        onKeyDown={this.onKeyDown}
        tabIndex='0'
      >
        <Spring
          from={{
            transform: 'scale(0)'
          }}
          to={{
            transform: 'scale(1)'
          }}
        >
          {props => (
            <div style={props} className='fire-style'>
              <p>{text}</p>
            </div>
          )}
        </Spring>
        <div
          id={`${id}-close`}
          className="btn btn--close"
          role='button'
          onClick={toggle}
          aria-pressed="false"
          tabIndex='0'
        >
          X
        </div>
      </div>
    );
  }
}
