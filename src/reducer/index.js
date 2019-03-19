import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};  

export const tempReducer = (state = initialState, action) => {
  
  if(action.type === actions.ADD_GUESSES) {
    return Object.assign({}, state, {
      guesses: [
        ...state.guesses,
      action.guess ]
    })
  }

  else if(action.type === actions.RESET_GUESSES) {
    return Object.assign({}, state, {
      guesses: []
    })
  }

  else if(action.type === actions.SET_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: action.feedback
    })
  }

  else if(action.type === actions.RESET_FEEDBACK) {
    return Object.assign({}, state, {
      feedback: 'Make your guess!'
    })
  }

  else if(action.type === actions.SET_AURAL_STATUS) {
    return Object.assign({}, state, {
      auralStatus: action.auralStatus
    })
  }

  else if(action.type === actions.RESET_AURAL_STATUS) {
    return Object.assign({}, state, {
      auralStatus: ''
    })
  }

  else if(action.type === actions.RESET_CORRECT_ANSWER) {
    return Object.assign({}, state, {
      correctAnswer: Math.floor(Math.random() * 100) + 1
    })
  }


  return state

};


