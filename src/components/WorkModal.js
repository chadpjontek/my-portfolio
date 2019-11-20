import React, { Component } from 'react';
import { Spring } from 'react-spring';
import easyListImg from '../images/easylist.jpg';
import aftermathImg from '../images/aftermath.jpg';
import kittyCupidImg from '../images/kitty-cupid.png';
import dietDayBookImg from '../images/DietDaybook.png';
import restaurantReviewsImg from '../images/restaurant-reviews.png';
import mazesMemesImg from '../images/mazes-and-memes.jpg';
import meteoriteLandingsImg from '../images/meteorite-landings.png';
import gameOfLifeImg from '../images/conwaysgameoflife.png';
import simonBeatsImg from '../images/SimonBeats.png';
import ticTacToeImg from '../images/TicTacToe.png';
import speakAndMathImg from '../images/SpeakAndMath.png';
import sweetheartsImg from '../images/sweethearts.jpg';
import Project from './Project';

// Get the button that opens the modal
let openBtn = document.activeElement;

/**
 * A class component that shows my work
 * @param {string} id - The id of the component
 * @param {fn} toggle - Function to toggle this component
 */
export default class WorkModal extends Component {
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
      <div tabIndex='0' id={id} className='modal work-modal' onKeyDown={this.onKeyDown}>
        <Spring
          from={{
            transform: 'translate3d(0,-100px,0)'
          }}
          to={{
            transform: 'translate3d(0,0,0)'
          }}
          config={{ delay: 200, tension: 480, friction: 50, clamp: true }}
        >
          {props => (
            <div
              style={props}
              role='heading'
              aria-level={2}
              className='work-modal__header'
            >
              Projects
            </div>
          )}
        </Spring>
        <div className='work-modal__content'>
          <Project
            image={easyListImg}
            alt="A sticky note on a piece of ruled paper with the EasyList logo"
            name="EasyList"
            description="An extremely easy to use shareable list app and task manager. Make notes, lists, and tasks and share them with anyone!"
            links={{
              app: 'https://www.easylist.link/',
              github: 'https://github.com/chadpjontek/Easylist'
            }}
          />
          <Project
            image={aftermathImg}
            alt="A screenshot of a DKP data table with wowhead tooltips."
            name="Aftermath"
            description="A web app for the Classic World of Warcraft horde guild, Aftermath, located on the East US PvP server Benediction."
            links={{
              app: 'https://aftermath.netlify.com/',
              github: 'https://github.com/chadpjontek/aftermath'
            }}
          />
          <Project
            image={dietDayBookImg}
            alt='An open daybook with handwriting that says,"Diet Daybook. A simple way to track your weight as well as count your calories, carbs and more!"'
            name='Diet Daybook'
            description='A web app to help track your personal weight as well as what you eat. It will then compare and display the data with multiple line graphs.'
            links={{
              app: 'http://www.dietdaybook.com/',
              fb: 'https://fb.me/DietDaybook'
            }}
          />
          <Project
            image={kittyCupidImg}
            alt='A cute cartoon kitty blushing with a heart shaped arrow.'
            name='Kitty Cupid'
            description='Kitty Cupid is a memory matchmaking game. Your goal is to match each kitty with its love but your arrows are limited so choose wisely!'
            links={{
              app: 'https://kitty-cupid.netlify.com/',
              github: 'https://github.com/chadpjontek/Kitty-Cupid',
              fb: 'https://fb.me/KittyCupid'
            }}
          />
          <Project
            image={restaurantReviewsImg}
            alt='An image of the home page of "Restaurant Reviews". A map of the city and restaurant listings are displayed.'
            name='Restaurant Reviews'
            description='A review site made as part of the Udacity Mobile Web Specialist Nanodegree. It involved taking a static website lacking accessibility into a responsive site that fully functions offline and meeting the highest Lighthouse benchmarks.'
            links={{
              app: 'https://restaurant-reviews-app.netlify.com/',
              github: 'https://github.com/chadpjontek/Restaurant-Reviews'
            }}
          />
          <Project
            image={mazesMemesImg}
            alt='Screenshots of the Mazes & Memes game showing the dungeon maze, UI, and battle screen fighting a "Level 1 - That Would Be Great(Boss from the movie Office Space)".'
            name='Mazes & Memes'
            description="Mazes and Memes is a roguelike dungeon crawler that brings the theme of memes to the genre. Each level's maze, enemies, and things inside are procedurally generated."
            links={{
              app: 'https://mazes-and-memes.netlify.com/',
              github: 'https://github.com/chadpjontek/Mazes-and-Memes'
            }}
          />
          <Project
            image={meteoriteLandingsImg}
            alt='A screenshot of the app displaying the globe with circles of various sizes marking meteorite landings as well as an info popup.'
            name='Meteorite Landings'
            description="A data map created with D3 and React that displays meteorite landings across the globe."
            links={{
              app: 'https://meteorite-landings.netlify.com/',
              github: 'https://github.com/chadpjontek/meteorite-data-map'
            }}
          />
          <Project
            image={sweetheartsImg}
            alt="A screenshot of the sweethearts app. Candy hearts every where!"
            name="Sweethearts for my sweetheart"
            description="A Valentine's Day app to share with your sweetheart. Fully offline first so go ahead on that scenic trip you were planning... this app will still work when you're off the grid!"
            links={{
              app: 'https://sweethearts-for-my-sweetheart.netlify.com/',
              github: 'https://github.com/chadpjontek/sweethearts-for-my-sweetheart'
            }}
          />
          <Project
            image={gameOfLifeImg}
            alt="A screenshot of Conway's game of life."
            name="Conway's Game of Life"
            description="By creating an initial configuration and observing how it evolves, or, for advanced players, by creating patterns with particular properties. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent."
            links={{
              app: 'https://conways-game-of-life.netlify.com/',
              github: 'https://github.com/chadpjontek/Conway-s-Game-of-Life'
            }}
          />
          <Project
            image={simonBeatsImg}
            alt="A screenshot of Simon Beats."
            name="Simon Beats"
            description='A "simon" game using percussion instruments. Can you "beat" all 20 rounds?'
            links={{
              app: 'https://simon-beats.netlify.com/',
              github: 'https://github.com/chadpjontek/simon-beats'
            }}
          />
          <Project
            image={ticTacToeImg}
            alt="A screenshot of tic tac toe"
            name="Tic Tac Toe"
            description="A tic tac toe game created with HTML, CSS, and JavaScript. Play as 'X 'or 'O' verse a beatable or unbeatable AI."
            links={{
              app: 'https://tic-tac-toes.netlify.com/',
              github: 'https://github.com/chadpjontek/Tic-Tac-Toe'
            }}
          />
          <Project
            image={speakAndMathImg}
            alt="A screenshot of a look-a-like Speak & Math."
            name="Math and Speak"
            description="A JavaScript calculator homage to the 1980 learning toy, Speak & Math."
            links={{
              app: 'https://math-and-speak-calculator.netlify.com/',
              github: 'https://github.com/chadpjontek/Math-and-Speak-Calculator'
            }}
          />
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
      </div>
    );
  }
}