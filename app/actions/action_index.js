import Constants from '../constants/constants_index.js'

export const addNote = (payload) => {
  return { type: Constants.ADD_NOTE, payload};
};
