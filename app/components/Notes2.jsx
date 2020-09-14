import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => { return { notes: state.notes }};
const ConnectedNotes = ({notes})=>
  (<ul>
    {notes.map(note => ( <li key={note.id}><h3>{note.task}</h3></li>))}
  </ul>)
;
const Notes2 = connect(mapStateToProps)(ConnectedNotes);
export default Notes2;
