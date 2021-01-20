import React from 'react';
import Note from './Note.jsx';
import Editable from './Editable.jsx';
//import { connect } from 'react-redux';

//export default ({notes, onNoteClick = () => {}, onEdit = () => {}, onDelete = () => {}}) => (
export default ({notes, onNoteClick, onEdit, onDelete }) => (
  <ul className = "notes">
    {
      notes.map (
        ({ id, editing, task, date }) => <li key={id}>
        <Note  style={{ color: 'black'}} onClick={ onNoteClick.bind(null, id) }> 
          <Editable className = "editing" editing={ editing } value={ task } date={ date } onEdit={ onEdit.bind(null, id) } />
        <button style={{ height: '30px', width: '30px' }} className = 'delete' onClick= {onDelete.bind(null, id)}>X</button> 
        </Note>
        </li>
      )
    }
  </ul>)

