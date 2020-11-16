import Constants from '../constants/constants_index.js';
import uuid from 'node-uuid';

const initState = {
  notes: [
    {
    id: uuid.v4(),
    task: "lolii1"
    }],
  lanes: [{ id: uuid.v4(), lane: '', notes: []}],
  remoteArticles: [{id: '4314314', title: 'title'}]
};

function rootReducer(state=initState, action) {
  switch (action.type){
    case Constants.ADD_NOTE:
      return Object.assign({}, state, { notes: state.notes.concat(action.payload)});
    case Constants.DEL_NOTE:
      return Object.assign({}, state, { notes: state.notes.filter((note) =>  {  return note.id !== action.id })});
    case Constants.BAD_WORDS:
      alert('bad words!');
    case Constants.API_ERRORED:
      alert("lol" + action.payload);
    case Constants.DATA_LOADED:
      return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
          });
  };
  return state;
};

export default rootReducer;
