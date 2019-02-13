import React from 'react';
import { Spring } from 'react-spring';

/**
 *  A functional component that scales in an image
 * @param {number} delay - The time before mounting this component
 * @param {string} src - The src attribute for the image element
 * @param {string} alt - The alt attribute for the image element
 * @param {string} textAlign - The css text-align value
 * @param {string} margin - The css margin value
 * @param {string} display - The css display value
 * @param {string} borderRadius - The css border-radius value
 * @param {string} padding - The css padding value
 * @param {string} width - The css width value
 */
export default function Image(props) {
  const { delay, src, alt, textAlign, margin, display, borderRadius, padding, width } = props;
  const style = {
    textAlign,
    margin,
    display,
    borderRadius,
    padding,
    width,
  };
  return (
    <Spring
      from={{
        transform: 'scale(0)'
      }}
      to={{
        transform: 'scale(1)'
      }}
      config={{ delay, tension: 480, friction: 50, clamp: true }}
    >
      {props => (
        <div style={props}>
          <img
            className='lazyload'
            data-srcset={src.srcSet}
            data-src={src.src}
            alt={alt}
            style={style}
          />
        </div>
      )}
    </Spring>
  );
}
