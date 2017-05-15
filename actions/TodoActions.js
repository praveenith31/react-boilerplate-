import * as types from '../constants/ActionTypes';

function AddTheTask(payload) {
  console.log("Here we are ", payload);
  return {
    type: types.ADD_TASK,
    payload: payload
  }
}

export function AddTaskAction(data) {
	return dispatch => {
		dispatch(AddTheTask(data));	
	};
}
