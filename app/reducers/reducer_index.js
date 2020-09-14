import Constants from '../constants/constants_index.js';
import uuid from 'node-uuid';

const initState = {
  notes: [
    {
    id: uuid.v4(),
    task: "lolii1"
    }
  ]
};

function rootReducer(state=initState, action) {
  switch (action.type){
    case Constants.ADD_NOTE:
      return Object.assign({}, state, { notes: state.notes.concat(action.payload)});
    case Constants.BAD_WORDS:
      alert('bad words!');
  };
  return state;
};

export default rootReducer;
