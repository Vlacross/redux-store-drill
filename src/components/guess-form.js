import React from 'react';

import './guess-form.css';

import { connect } from 'react-redux';
import { addGuesses } from '../actions'

export  class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();

    
      const value = this.input.value;
      console.log(value)
      this.props.dispatch(addGuesses(value));
    
    this.input.value = '';
    this.input.focus();
  }

  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          ref={input => (this.input = input)}
          required
        />
        <button 
          type="submit"
          name="submit"
          id="guessButton" 
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}

export default connect()(GuessForm)
