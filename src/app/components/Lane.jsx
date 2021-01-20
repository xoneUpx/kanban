import React from 'react';
import  { DelBut }  from './But.jsx';
import   Note  from './Note.jsx';
import {  useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { CusBut } from './CusBut.jsx';
import { createSelector} from 'reselect';
import { Button } from 'react-bootstrap';

export default (props) => { 
  const  notes  = (props) => props.notes;
  const notesselector = createSelector([notes], (note)=> note);
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop({accept: 'Note', drop: (item, monitor)=> {   dispatch({ type: 'addToLane', payload: { noteId: item.id, laneId: props.id}})}, 
    collect: (monitor)=>({ isOver: !!monitor.isOver()})});
  return (<div style={{'border': '1px solid black',  'minHeight': '200px', 'display': 'flex', 'flexDirection': 'row'}} ref={drop}><h2>lane </h2> 
<ul>{notesselector(props).map((note) => <li key={note.id}><Note id={'id'} ><p>{note.task}</p> 
  <div>
  {/*  <CusBut lanes >CusBut</CusBut>
  <Button className="alert primary-alert">reactbut</Button> */}
  <DelBut name='notedel' delFunction={(e)=> {e.stopPropagation(); dispatch({ type: 'deleteNote', payload: note.id}) }} />
  <DelBut name='delfromlane' delFunction={(e)=> {e.stopPropagation(); dispatch({ type: 'delFromLane', payload: note.id}) }} />
  </div></Note></li> )}</ul>
  </div>);}
