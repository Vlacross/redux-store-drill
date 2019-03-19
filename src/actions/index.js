export const ADD_GUESSES = 'CHANGE_GUESSES';
export const addGuesses = (guess) => ({
  type: ADD_GUESSES,
  guess
});


export const RESET_GUESSES = 'RESET_GUESSES'
export const resetGuesses = () => ({
  type: RESET_GUESSES
})

export const SET_FEEDBACK = 'SET_FEEDBACK'
export const setFeedback = (feedback) => ({
  type: SET_FEEDBACK,
  feedback
});

export const RESET_FEEDBACK = 'RESET_FEEDBACK'
export const resetFeedback = () => (
  {
  type: RESET_FEEDBACK
})

export const SET_AURAL_STATUS = 'SET_AURAL_STATUS'
export const setAuralStatus = (status) => ({
  type: SET_AURAL_STATUS,
  status
});

export const RESET_AURAL_STATUS = 'RESET_AURAL_STATUS'
export const resetAuralStatus = () => (
  {
  type: RESET_AURAL_STATUS
})

export const RESET_CORRECT_ANSWER = 'RESET_CORRECT_ANSWER'
export const resetCorrectAnswer = () => (
  {
  type: RESET_CORRECT_ANSWER
})
