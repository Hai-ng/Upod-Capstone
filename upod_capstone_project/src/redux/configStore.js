import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import {QuanLyDeviceTypeReducer} from './reducers/QuanLyDeviceTypeReducer';

const rootReducer = combineReducers({
    QuanLyDeviceTypeReducer,
  
});

export const store = createStore(rootReducer, applyMiddleware(thunk));