import React, {useState, useEffect} from 'react';
import Notes2 from './Notes2.jsx';
import Form from './Form.jsx';
import Debug from './Debug.jsx';
import Id from './Id.jsx';
import Id2 from './Id2.jsx';
import Head from './Head.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { auth, createUserProfileDocument} from '../firebase/firebase.utils.js';
import { useDispatch, useSelector } from 'react-redux';

const App =(props) => { 
//  const [currentUser, setUser] = useState('');
  const dispatch = useDispatch();
  const user = useSelector((state)=> { return state.user.currentUser});
  useEffect(() => { 
    const authstate = auth.onAuthStateChanged( async (user)=> { 
      if(user) { 
        const userref = await createUserProfileDocument(user);
        userref.onSnapshot((snap)=> { 
          console.log(snap);
//          setUser({id: snap.id, ...snap.data()});
          dispatch({ type: 'setCurrentUser', payload: {id: snap.id, ...snap.data()}});
        
        });
      
      } 
      else { console.log('lol'); dispatch({ type: 'setCurrentUser', payload: user}) } }); 
    return () =>  authstate()}, []);
  return (<div><DndProvider backend={ HTML5Backend}>
  <Head  />
  <Switch>
  <Route exact path='/'> 
  <Notes2 /><Form />
  </Route>
  <Route path='/debug' component={Debug} />
  <Route exact path='/id' component={Id} />
  <Route exact path='/id/:id2' children={(props) => (<Id2 link="id" history={props.history} />)} />
  <Route exact path='/signin' children={<SignIn email='' pass='' />} />
  <Route exact path='/signup' render={()=> user ? (<Redirect to='/' />) : (<SignUp displayName='' email='' pass='' confpass='' />)} />
  </Switch></DndProvider></div>)};
//const App = () => (<div><Notes2 /><Form /></div>)
export default App;
