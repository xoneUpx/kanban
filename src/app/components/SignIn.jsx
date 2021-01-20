import React, { useState } from 'react';
import SignIn from '../signin.module.css';
import { auth, signInWithGoogle, signOut} from '../firebase/firebase.utils.js';
import { Link } from 'react-router-dom';

export default (props) => { 
  //const [ state, setState] = useState({ user: '', pass: ''});
  const [ state, setState] = useState({...props});
  const change = (name) => {return (e)=> setState({ ...state, [name]: e.target.value }) };
//  const changeu = (e) => { setState({...state, user: e.target.value}) };
//  const changep = (e) => { setState({...state, pass: e.target.value }) };
  const submit = async (e) => { e.preventDefault(); 
 //   console.log({state})
    try{
      await auth.signInWithEmailAndPassword(state.email, state.pass);
      setState({email:'', pass:''}); 
    } catch(e) {
      console.log(e);
    }

  
  };
  return (<div>
    <h1 className={ SignIn.formz}>signin</h1>
    <form onSubmit={submit} >
    email:<input type='text'  id='email' value={state.email} onChange={change('email')} />
    pass: <input type='password'  id='pass' value={state.pass} onChange={change('pass')} />
    <div><button type='submit'>sub</button></div>
    <div><button type='submit' onClick={signInWithGoogle}>google</button></div>
    <div><button type='submit' onClick={signOut}>out</button></div>
    </form>
    <Link to='/signup'><button type='submit'>signup</button></Link>

    
    </div>)

}
