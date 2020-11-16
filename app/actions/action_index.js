import Constants from '../constants/constants_index.js'

export const addNote = (payload) => {
  return { type: Constants.ADD_NOTE, payload};
};
export const deleteNote = (id) => { return { type: Constants.DEL_NOTE, id}};
//export const getData = () => { return (dispatch) => {
//  return fetch("https://jsonplaceholder.typicode.com/posts")
//        .then(response => response.json())
//        .then(json => {
//                  dispatch({ type: Constants.DATA_LOADED, payload: json });
//                }).catch((err) => alert('err'));
//}
//};
export const apiError =(e)=> { type: Constants.API_ERRORED, e};
export const getData = (url) => {
  return { type: Constants.DATA_REQUESTED, payload: { url }};
};
