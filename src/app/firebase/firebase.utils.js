import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
      apiKey: "AIzaSyBS4aH4ABX_jtT87Ds2VAZOL3Dofdai6BQ",
      authDomain: "kanban-a2afa.firebaseapp.com",
      projectId: "kanban-a2afa",
      storageBucket: "kanban-a2afa.appspot.com",
      messagingSenderId: "588974649638",
      appId: "1:588974649638:web:dcacb9ff7c614c35f991e7"
    };
firebase.initializeApp(config);
const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => { return auth.signInWithPopup(provider)};
export const signOut= () => { return auth.signOut()};
export const firestore = firebase.firestore();
export const createUserProfileDocument = async (user, data) => { 
  if (!user) return;
  const userref = firestore.doc(`user/${user.uid}`);
  const snap = await userref.get();
  //console.log(snap);
  if (!snap.exists) {
    const { displayName, email } = user;
    const createdAt=new Date();
    try { await userref.set({ displayName, email, createdAt, ...data})}
    catch (e) { console.log(e);}
  }
  return userref;
}
//export default firebase;
