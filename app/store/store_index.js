import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/reducer_index.js";
import  middlewareTest  from '../middleware/middleware_index.js';
import  thunk  from "redux-thunk";
import  createSagaMiddleware  from "redux-saga";
import apiSaga from "../sagas/sagaapi.js";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, storeEnhancers(applyMiddleware(middlewareTest, thunk)));
const store = createStore(rootReducer, storeEnhancers(applyMiddleware(middlewareTest, sagaMiddleware)));

sagaMiddleware.run(apiSaga);
export default store;
