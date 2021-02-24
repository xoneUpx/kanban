import React, { useState } from 'react';
import SignUp from '../signup.module.scss';
//import axios from "axios";
import { auth, createUserProfileDocument, signOut } from '../firebase/firebase.utils.js';

export default (props) => { 
  const [ state, setState] = useState({...props});
  const change = (name) => {return (e)=> setState({ ...state, [name]: e.target.value }) };
//  const changeu = (e) => { setState({...state, user: e.target.value}) };
//  const changep = (e) => { setState({...state, pass: e.target.value }) };
  const submit = async (e) => { e.preventDefault(); 
 //   console.log({state})
    if (state.pass!==state.confpass) {
      alert('no');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(state.email, state.pass);
      await createUserProfileDocument(user,  state.displayName);
      setState({...props});
    } catch(e) {
      console.log(e);
    }

    
  
  };
  return (<div>
    <h1 className={ `${SignUp.formz} ${SignUp.test} `}>signup<p className={`${SignUp.testing}`}>testings</p></h1>
    <form className={SignUp.formz} onSubmit={submit} >
    <input type='text' id='user' value={state.displayName} placeholder='placeholder' onChange={change('displayName')} />
    <input lable='email' type='email' id='email' value={state.email} placeholder='placeholder' onChange={change('email')} />
    <input type='password' id='pass' value={state.pass}  placeholder='placeholder' onChange={change('pass')} />
    <input type='password' id='confpass' value={state.confpass} placeholder='placeholder' onChange={change('confpass')} />
    <div><button type='submit' onClick={submit}>email</button></div>
    <div><button type='submit' onClick={signOut}>out</button></div>
    {/*<div><button type='submit' onClick={async ()=>{ const res = await axios.post('http://localhost:8080/lol/post/', state); console.log(res)}}>postax</button></div>*/}
    </form>

    
    </div>)

}
