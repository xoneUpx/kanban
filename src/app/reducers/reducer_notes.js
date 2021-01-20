import Constants from '../constants/constants_index.js';
import uuid from 'node-uuid';
import { createReducer, createAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import  storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
}
const initState = {
  notes: [
    {
    id: uuid.v4(),
    laneid: 1,
    task: "loli1"
    },
    {
    id: uuid.v4(),
    laneid: 2,
    task: "lolii2"
    },
  ],
  lanes: [{ id: 1, lane: 'Lane1'}, {id: 2, lane: 'lane2'}],
  remoteArticles: []
};

//function rootReducer(state=initState, action) {
//  switch (action.type){
//    case Constants.ADD_NOTE:
//      return Object.assign({}, state, { notes: state.notes.concat(action.payload)});
//    case Constants.DEL_NOTE:
//      return Object.assign({}, state, { notes: state.notes.filter((note) =>  {  return note.id !== action.id })});
//    case Constants.BAD_WORDS:
//      alert('bad words!');
//    case Constants.API_ERRORED:
//      alert("lol" + action.payload);
//    case Constants.DATA_LOADED:
//      return Object.assign({}, state, {
//            remoteArticles: state.remoteArticles.concat(action.payload)
//          });
//  };
//  return state;
//};
const addNote = createAction('addNote');
const deleteNote = createAction('deleteNote');
const informOfBadWords = createAction('informOfBadWords');
const getData = createAction('getData');
const addLane = createAction('addLane');
const addToLane = createAction('addToLane');
const delFromLane = createAction('delFromLane');
const dellane = createAction('dellane');
const notesReducer = createReducer(initState, { [addNote]: (state, action)=> { state.notes=state.notes.concat(action.payload)},
  [deleteNote]: (state,action)=> {state.notes=state.notes.filter((item)=> { return item.id !== action.payload})},
  [informOfBadWords]: (state, action)=> alert('no swearing!'),
  [getData]: (state,action)=>{ state.remoteArticles=state.remoteArticles.concat(action.payload)},
  [addLane]: (state, action) => { state.lanes = state.lanes.concat(action.payload)},
  [addToLane]: (state, action) => { state.notes = state.notes.map((note)=> {if (note.id===action.payload.noteId) { return {...note, laneid: action.payload.laneId}} else { return note}})},
  [delFromLane]: (state, action) => {state.notes= state.notes.map((note)=> { if (note.id===action.payload) { return { ...note, laneid: ''}} else { return note}})},
  [dellane]: (state, action) => { 
     state.lanes = state.lanes.filter((lane)=> { return lane.id !== action.payload}); 
    state.notes = state.notes.map((note)=> { if (note.laneid===action.payload) { return {...note, laneid:''}} else { return note}})},

});
const persistentnotesReducer = persistReducer(persistConfig,notesReducer);
export { persistentnotesReducer, addNote, deleteNote, informOfBadWords, addLane, addToLane, dellane, delFromLane };
