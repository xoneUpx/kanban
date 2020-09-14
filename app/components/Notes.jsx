import React from 'react';
import Note from './Note.jsx';
import Editable from './Editable.jsx';
//import { connect } from 'react-redux';

export default ({notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {}}) => (
  <ul className = "notes">
    {
      notes.map (
        ({ id, editing, task, date }) => <li key={id}>
        <Note className = "note" onClick={ onNoteClick.bind(null, id) }> 
          <Editable className = "editing" editing={ editing } value={ task } date={ date } onEdit={ onEdit.bind(null, id) } />
        <button className = 'delete' onClick= {onDelete.bind(null, id)}>X</button> 
        </Note>
        </li>
      )
    }
  </ul>)

