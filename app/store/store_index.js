import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/reducer_index.js";
import  middlewareTest  from '../middleware/middleware_index.js';


const store = createStore(rootReducer, applyMiddleware(middlewareTest));

export default store;
