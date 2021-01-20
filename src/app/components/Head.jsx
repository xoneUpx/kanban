import  React  from 'react';
import { auth, signOut } from '../firebase/firebase.utils.js';
import { useSelector } from 'react-redux';
import { CusBut } from './CusBut.jsx';

export default (props) => { 
const user = useSelector((state) => { return state.user.currentUser });
  return (<div><h1>Header</h1>{user?<div><p>{user.email}</p><CusBut logout onClick={signOut}>logout</CusBut></div>:<p>login</p>}</div>) }
