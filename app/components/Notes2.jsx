import React from 'react';
import { connect } from 'react-redux';
import  Note2  from './Note2.jsx';
import { deleteNote } from '../actions/action_index.js';

const mapStateToProps = state => { return { notes: state.notes }};
const  mapDispatchToProps = (dispatch) => {
  return ({ deleteNote2: id => dispatch(deleteNote(id))})
}
const ConnectedNotes = ({notes, ...props})=>
  (<ul>
    <Note2 notes="notes" / >
  {notes.map(note => ( <li key={note.id}><div><h3>{note.task}</h3><button onClick={(e) => {e.stopPropagation(); props.deleteNote2(note.id)}}>X</button></div></li>))}
  </ul>
  )
;
const Notes2 = connect(mapStateToProps, mapDispatchToProps)(ConnectedNotes);
export default Notes2;
