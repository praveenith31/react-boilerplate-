import { combineReducers } from 'redux';
import Todo from '../reducers/TodoReducer';

const reducer = combineReducers({
	Todo: Todo
});

export default reducer;