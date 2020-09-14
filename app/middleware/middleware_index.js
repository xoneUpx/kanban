import Constants from '../constants/constants_index.js';

const forb_list = ['shit', 'ass'];
const middlewareTest = ({ dispatch }) => {
  return (next) => {
    return (action) => {
      if (action.type === Constants.ADD_NOTE) {
        const forb_words = forb_list.filter((word) => action.payload.task.includes(word)); 
        if (forb_words.length) {
          return dispatch({type: Constants.BAD_WORDS})
        }
      }
      return next(action);
    }
  }  
}
export default middlewareTest;
