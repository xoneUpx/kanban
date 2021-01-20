import { createStore, applyMiddleware, compose } from "redux";
import logger from 'redux-logger';
//import    rootReducer    from "../reducers/reducer_index.js";
//import    {notesReducer}   from "../reducers/reducer_notes.js";
import    {persistentnotesReducer}   from "../reducers/reducer_notes.js";
import    {userReducer}   from "../reducers/reducer_user.js";
import  middlewareTest  from '../middleware/middleware_index.js';
import  thunk  from "redux-thunk";
import  createSagaMiddleware  from "redux-saga";
import apiSaga from "../sagas/sagaapi.js";
import { configureStore, getDefaultMiddleware, defaultEnhancers } from '@reduxjs/toolkit'; 
import { persistStore } from 'redux-persist';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

//const store = createStore(rootReducer, storeEnhancers(applyMiddleware(middlewareTest, thunk)));
//const store = createStore(rootReducer, storeEnhancers(applyMiddleware(middlewareTest, sagaMiddleware)));

//sagaMiddleware.run(apiSaga);

//const middleware = [ sagaMiddleware, middlewareTest, ...getDefaultMiddleware()];
const middlewares = [ sagaMiddleware, middlewareTest, logger ];
//const reducer = {notes: notesReducer, user: userReducer};
const reducer = {notes: persistentnotesReducer, user: userReducer};
//const store = configureStore({ reducer: rootReducer, middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(middlewares), enhancers: (defaultEnhancers) => [ ...defaultEnhancers]});
const store = configureStore({ reducer , middleware: middlewares, enhancers: (defaultEnhancers) => [  ...defaultEnhancers]});
const persistor = persistStore(store);
sagaMiddleware.run(apiSaga);
export { store, persistor };
