import Constants from '../constants/constants_index.js';
import uuid from 'node-uuid';
import { createReducer, createAction } from '@reduxjs/toolkit';

const initState = {
  currentUser: null
};

const setCurrentUser = createAction('setCurrentUser');

const userReducer = createReducer(initState, { [setCurrentUser]: (state, action)=> { state.currentUser=action.payload},
});
export { userReducer };
