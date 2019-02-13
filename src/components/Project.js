import React from 'react';
import Image from './Image';
import { Spring } from 'react-spring';

/**
 * A functional component that displays a project
 * @param {string} image - The url to display project image
 * @param {string} alt - The image alt attribute
 * @param {string} name - The project name
 * @param {string} description - The project description
 * @param {object} links - The links to the project
 */
export default function Project(props) {
  const { image, alt, name, description, links } = props;
  return (
    <div className='work-modal__content__project'>
      <Image
        delay={500}
        width='100%'
        src={image}
        textAlign='center'
        margin='0 auto'
        borderRadius='0%'
        padding='0.5em'
        alt={alt}
      />
      <Spring
        from={{
          transform: 'perspective(100px) rotateX(-90deg)',
          transformOrigin: 'top'
        }}
        to={{
          transform: 'perspective(100px) rotateX(0deg)',
          transformOrigin: 'top'
        }}
        config={{ delay: 500, tension: 480, friction: 50, clamp: true }}
      >
        {props => (
          <div style={props}>
            <h3 className='work-modal__content__project__header'>{name}</h3>
            <p className='work-modal__content__project__description'>{description}</p>
            {links.app && <a href={links.app} className='work-modal__content__project__link'>App </a>}
            {links.github && <a href={links.github} className='work-modal__content__project__link'>Github </a>}
            {links.fb && <a href={links.fb} className='work-modal__content__project__link'>Facebook</a>}
          </div>
        )}
      </Spring>
    </div>
  );
}

