import React, {useState} from 'react';
import { connect } from 'react-redux';
import  Notes2  from './Notes2.jsx';
import  Lane  from './Lane.jsx';

const Lanes = () =>  {const [state, setState] = useState([{id: '1', lane: '1', notes: [{id: '11', task: 'loliii' }, {id:'22', task: 'loli2'}]}]); return (<div><ul>{state.map((lane) => {return (<li key={lane.id}><Lane lane={lane.lane} notes={lane.notes}/></li>)})}</ul></div>)}; 

export default Lanes;
