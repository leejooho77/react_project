import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

// Build the root reducer using combineReducers
// we got that thing from redux above.
// combineReducers takes 1 arg, an object.

const rootReducer = combineReducers({
	home: HomeReducer	
})

export default rootReducer;