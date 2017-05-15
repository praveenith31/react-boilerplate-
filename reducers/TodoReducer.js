import { ADD_TASK } from '../constants/ActionTypes';

const initialState = {taskList: ''};

export default function Todo(state = initialState, action) {
  switch (action.type) {
  case ADD_TASK:
    return (
    	Object.assign({}, state, 
    	{
    		taskList: [...(state.taskList), action.payload]
    	})
    );

  default:
    return state;
  }
}
