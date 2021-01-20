import Constants from '../constants/constants_index.js';
import uuid from 'node-uuid';
import { createReducer, createAction } from '@reduxjs/toolkit';

import { notesReducer } from './reducer_notes.js';
import { combineReducers } from 'redux';

export default combineReducers({ notes: notesReducer});

