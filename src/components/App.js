import React, { Component } from 'react';
import FireModal from './FireModal';
import WorkModal from './WorkModal';
import SkillsModal from './SkillsModal';
import CertsModal from './CertsModal';
import AboutModal from './AboutModal';
import { Transition, animated, Spring } from 'react-spring';
import myPic from '../images/cp.jpg';
import emailSvg from '../images/email.svg';
import githubSvg from '../images/github.svg';
import linkedinSvg from '../images/linkedin.svg';
import twitterSvg from '../images/twitter.svg';
import 'lazysizes';

let deferredPrompt;

// If servive workers are supported, register ours.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./sw.js')
    .then(function () { console.log('Service Worker Registered'); }); // eslint-disable-line no-console
}

// add a listener for the beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('before install prompt fired'); // eslint-disable-line no-console
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

/**
 * The main class component for the site
 */
export default class App extends Component {
  state = {
    showFast: false,
    showIntegrated: false,
    showReliable: false,
    showEngaging: false,
    showWork: false,
    showSkills: false,
    showCerts: false,
    showAbout: false,
  }

  // Toggle functions to show/hide each modal
  toggleFast = () => {
    toggleBodyOverflow();
    this.setState({
      showFast: !this.state.showFast
    });
  }
  toggleIntegrated = () => {
    toggleBodyOverflow();
    this.setState({
      showIntegrated: !this.state.showIntegrated
    });
  }
  toggleReliable = () => {
    toggleBodyOverflow();
    this.setState({
      showReliable: !this.state.showReliable
    });
  }
  toggleEngaging = () => {
    toggleBodyOverflow();
    this.setState({
      showEngaging: !this.state.showEngaging
    });
  }
  toggleWork = () => {
    toggleBodyOverflow();
    this.setState({
      showWork: !this.state.showWork
    });
  }
  toggleSkills = () => {
    toggleBodyOverflow();
    this.setState({
      showSkills: !this.state.showSkills
    });
  }
  toggleCerts = () => {
    toggleBodyOverflow();
    this.setState({
      showCerts: !this.state.showCerts
    });
  }
  toggleAbout = () => {
    toggleBodyOverflow();
    this.setState({
      showAbout: !this.state.showAbout
    });
  }

  // Render the component
  render() {
    return (
      <div>
        <div id='mainContainer' className='container--front-page'>
          <header>
            <Spring
              from={{
                transform: `translate3d(-${window.innerWidth}px,0,0)`
              }}
              to={{
                transform: 'translate3d(0,0,0)'
              }}
              config={{ tension: 600, friction: 50, clamp: true }}
            >
              {props => (
                <div
                  style={props}
                  className='header__title'
                  role='heading'
                  aria-level={1}
                >
                  Chad Pjontek
                </div>
              )}
            </Spring>
            <Spring
              from={{
                transform: `translate3d(-${window.innerWidth}px,0,0)`
              }}
              to={{
                transform: 'translate3d(0,0,0)'
              }}
              config={{ delay: 400, tension: 600, friction: 50, clamp: true }}
            >
              {props => (
                <div style={props}
                  className='header__info'
                >
                  User Experience Advocate
                </div>
              )}
            </Spring>
            <Spring
              from={{
                transform: `translate3d(-${window.innerWidth}px,0,0)`
              }}
              to={{
                transform: 'translate3d(0,0,0)'
              }}
              config={{ delay: 600, tension: 600, friction: 50, clamp: true }}
            >
              {props => (
                <div style={props}
                  className='header__info'
                >
                  Full Stack Solution Developer
                </div>
              )}
            </Spring>
            <Spring
              from={{
                transform: `translate3d(-${window.innerWidth}px,0,0)`
              }}
              to={{
                transform: 'translate3d(0,0,0)'
              }}
              config={{ delay: 800, tension: 600, friction: 50, clamp: true }}
            >
              {props => (
                <div style={props}
                  className='header__info'
                >
                  Mobile Web Specialist
                </div>
              )}
            </Spring>
            <Spring
              from={{
                transform: 'scale(0)'
              }}
              to={{
                transform: 'scale(1)'
              }}
              config={{ delay: 800, tension: 480, friction: 50, clamp: true }}
            >
              {props => (
                <img
                  srcSet={myPic.srcSet}
                  src={myPic.src}
                  alt='A picture of me smiling'
                  style={props}
                  className='header__img'
                />
              )}
            </Spring>
            <Spring
              from={{
                transform: 'scale(0)'
              }}
              to={{
                transform: 'scale(1)'
              }}
              config={{ delay: 1000, tension: 600, friction: 28 }}
            >
              {props => (
                <div style={props}>
                  <div className='greeting'>
                    Hi!
                  </div>
                </div>
              )}
            </Spring>
          </header>
          <main>
            <Spring
              from={{
                transform: 'scaleY(0)',
                transformOrigin: 'top'
              }}
              to={{
                transform: 'scaleY(1)',
                transformOrigin: 'top'
              }}
              config={{ delay: 1200 }}
            >
              {props => (
                <div style={props} className={'main__content'}>
                  <p className='main__content__p'>
                    I love helping people. I also love solving problems. One way I am able to do both is by designing...
                  </p>
                  <button id='fastModalOpen' className={'btn btn--fast'} onClick={this.toggleFast}
                  >Fast</button>
                  <button id='integratedModalOpen' className={'btn btn--integrated'} onClick={this.toggleIntegrated}>Integrated</button>
                  <button id='reliableModalOpen' className={'btn btn--reliable'} onClick={this.toggleReliable}>Reliable</button>
                  <button id='engagingModalOpen' className={'btn btn--engaging'} onClick={this.toggleEngaging}>Engaging</button>
                  <p className='main__content__p'>...apps and websites. Did you know that 53% of mobile site visits leave a page that takes <a href='https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/'>longer than 3 secs to load</a>? Not only that but <a href='https://webmasters.googleblog.com/2018/01/using-page-speed-in-mobile-search.html'>page load speed affects your search ranking</a>. Do a <a href='https://developers.google.com/web/tools/lighthouse/'>Lighthouse audit</a> to find out where your site stands. Check out some of my work below and let me know how I can help you.</p>
                  <button id='workModalOpen' className="btn btn--work" onClick={this.toggleWork}>Projects</button>
                  <button id='skillsModalOpen' className="btn btn--skills" onClick={this.toggleSkills}>Skills</button>
                  <button id='certsModalOpen' className="btn btn--certs" onClick={this.toggleCerts}>Certifications</button>
                  <button id='aboutModalOpen' className="btn btn--about" onClick={this.toggleAbout}>About me</button>
                </div>
              )}
            </Spring>
          </main>
          <Spring
            from={{
              transform: 'scaleY(0)',
              transformOrigin: 'bottom'
            }}
            to={{
              transform: 'scaleY(1)',
              transformOrigin: 'bottom'
            }}
            config={{ delay: 1200 }}
          >
            {props => (
              <footer style={props}>
                <div className="social-media-icon">
                  <a href="https://github.com/chadpjontek">
                    <img src={githubSvg} alt="github icon" />
                  </a>
                </div>
                <div className="social-media-icon">
                  <a href="https://linkedin.com/in/chad-pjontek">
                    <img src={linkedinSvg} alt="linkedin icon" />
                  </a>
                </div>
                <div className="social-media-icon">
                  <a href="https://twitter.com/cpjontek">
                    <img src={twitterSvg} alt="twitter icon" />
                  </a>
                </div>
                <div className="social-media-icon">
                  <a href="mailto:chadpjontek@gmail.com">
                    <img src={emailSvg} alt="email icon" />
                  </a>
                </div>
              </footer>
            )}
          </Spring>
        </div>
        {// Below are the modals with their transitions
        }
        <Transition
          native
          items={this.state.showFast}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <FireModal
                id='fastModal'
                toggle={this.toggleFast}
                classList='fast-style'
                text='A good design should never result in a slow user experience.  Therefore rendering the user interface quickly is paramount. Scrolling and animating should be smooth and have no perceivable hiccups on any device.'
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showIntegrated}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <FireModal
                id='integratedModal'
                toggle={this.toggleIntegrated}
                classList='integrated-style'
                text='Adding a service worker and manifest file to a web application allows it to be "installed" to the device. Users who opt into this experience can have your website or application load as a top level, full-screen app.'
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showReliable}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <FireModal
                id='reliableModal'
                toggle={this.toggleReliable}
                classList='reliable-style'
                text="The internet is unpredictable. Your app needs to work reliably by loading quickly, even on a slow or intermittent network, or when there is no network at all. I architect each app by separating its content from its data, allowing the shell to load at a blazing fast speed while showing new content dynamically as it's received."
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showEngaging}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <FireModal
                id='engagingModal'
                toggle={this.toggleEngaging}
                classList='engaging-style'
                text='Using material design concepts and getting users to re-engage with push notifications where available creates an immersive user experience.'
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showWork}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <WorkModal
                id='workModal'
                toggle={this.toggleWork}
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showSkills}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <SkillsModal
                id='skillsModal'
                toggle={this.toggleSkills}
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showCerts}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <CertsModal
                id='certsModal'
                toggle={this.toggleCerts}
              />
            </animated.div>
          ))}
        </Transition>
        <Transition
          native
          items={this.state.showAbout}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show => show && (props => (
            <animated.div style={props}>
              <AboutModal
                id='aboutModal'
                toggle={this.toggleAbout}
              />
            </animated.div>
          ))}
        </Transition>
      </div>
    );
  }
}

function toggleBodyOverflow() {
  document.getElementById('body').classList.toggle('body-overflow');
}