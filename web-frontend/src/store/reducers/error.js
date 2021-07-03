import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

export default (state = { message: null }, action) => {
  switch (action.type) {
    case ADD_ERROR:
      let newState = { ...state, message: action.errorMessage };
      return newState;
    case REMOVE_ERROR:
      let newState = { ...state, message: null };
      return newState;
    default:
      return state;
  }
};
