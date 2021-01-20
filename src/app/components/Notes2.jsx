import React, { useState } from 'react';
import { connect } from 'react-redux';
//import  Note2  from './Note2.jsx';
import  Note  from './Note.jsx';
//import { deleteNote } from '../actions/action_index.js';
import { deleteNote } from '../reducers/reducer_notes.js';
import { CusBut } from './CusBut.jsx';

const mapStateToProps = state => { return { notes: state.notes.notes  }};
const  mapDispatchToProps = (dispatch) => {
  return ({ deleteNote2: id => dispatch(deleteNote(id))})
}
const filterednotes = (notes, value)=> notes.filter((note) => note.task.toLowerCase().includes(value.toLowerCase()))
const ConnectedNotes = ({notes,  ...props})=> { 
const [thisState, setState] = useState('');
const searcher = (event) => {   setState(event.target.value)};
  return (
  <div>  
  <input type='search' placeholder='search' onChange={(e) => searcher(e)} />
    <ul>
  {filterednotes(notes, thisState).map(note => ( <li key={note.id}><Note id={note.id} ><h3>{note.task}</h3><CusBut   onClick={(e) => {e.stopPropagation(); props.deleteNote2(note.id)}}>&#10005;</CusBut></Note></li>))}
  </ul>
    </div>
  )}
;
const Notes2 = connect(mapStateToProps, mapDispatchToProps)(ConnectedNotes);
export default Notes2;
