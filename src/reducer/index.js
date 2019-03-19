import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};  






export const tempReducer = (state = initialState, action) => {
  
  if(action.type === actions.ADD_GUESSES) {
    console.log('adding')
    let feedback;

    let guess = action.guess
    guess = parseInt(guess, 10);
  if (isNaN(guess)) {
     feedback = 'Please enter a valid number';
    return;
  }

  const difference = Math.abs(guess - state.correctAnswer);

  
  if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }

  document.title = feedback ? `${feedback} | Hot or Cold` : 'Hot or Cold';

    return Object.assign({}, state, {

      guesses: [
        ...state.guesses,
      action.guess ],
      feedback: feedback
    })
  }

  else if(action.type === actions.SET_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    })
  }

  else if(action.type === actions.SET_AURAL_STATUS) {

   
      const { guesses, feedback } = this.state;
  
      const pluralize = guesses.length !== 1;
  
      let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
  
      if (guesses.length > 0) {
        auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
      }
 

    return Object.assign({}, state, {
      auralStatus: auralStatus
    })
  }

else if(action.type === actions.RESTART_GAME) {
    return Object.assign({}, state, initialState, {
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }

  return state

};


