import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import  Notes2  from './Notes2.jsx';
import  Lane  from './Lane.jsx';
import  { DelBut }  from './But.jsx';
import uuid from 'node-uuid';
import {createSelector } from 'reselect';
//import { addLane} from '../reducers/reducer_index.js';
//with reselect
const lanesstateselector = createSelector((state) => state.notes.lanes, lanes => lanes);
const Lanes = (props) =>  {
 // const [state, setState] = useState([{id: '1', lane: 'lane1', notes: [{id: '11', task: 'loliii' }, {id:'22', task: 'loli2'}]}]); 
  const dispatch = useDispatch();
  const [laneState, setlaneState] = useState('lol');
  const notesstate = useSelector((state) =>  { return state.notes.notes });
  //reselect
  const lanesstate = useSelector(lanesstateselector);
  //selector - no memoization; add Reselect
  const filternotes = (notez,id)=> { return notez.filter((note)=>  note.laneid===id) };
  return (<div style={{ background: "red", display: "flex", "flexDirection": "column" }} >
   <form onSubmit={(e)=>{ e.preventDefault(); dispatch({ type: 'addLane', payload: { id: uuid.v4(), lane:  laneState , notes: []}}); setlaneState('');}} >
    <input type='text' onChange={(e)=>{ setlaneState(e.target.value)}} value={laneState} />
    <button type="submit">addlane</button>
    </form>
    <ul style={{ background: "pink", display: "flex", "flexDirection": "column" }} >{lanesstate.map((lane) => {return (<li  key={lane.id} ><Lane className='lane' id={lane.id} lane={lane.lane} notes={filternotes(notesstate, lane.id)}/>
      { /* <button onClick={ (e)=> { e.stopPropagation(); dispatch({ type: 'dellane', payload: lane.id}) }}>del</button> */}
      <DelBut name='del' delFunction={(e)=> { e.stopPropagation(); dispatch({type: 'dellane', payload: lane.id})}} />
      </li>)})}</ul>
    </div>)}; 

export default Lanes;
