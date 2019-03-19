export const ADD_GUESSES = 'CHANGE_GUESSES';
export const addGuesses = (guess) => ({
  type: ADD_GUESSES,
  guess
})


export const SET_FEEDBACK = 'SET_FEEDBACK'
export const setFeedback = (feedback) => ({
  type: SET_FEEDBACK,
  feedback
})


export const SET_AURAL_STATUS = 'SET_AURAL_STATUS'
export const setAuralStatus = (status) => ({
  type: SET_AURAL_STATUS,
  status
})


export const RESTART_GAME = 'RESTART_GAME'
export const restartGame = () => (
  {
  type: RESTART_GAME
})
