import { SET_CURRENT_USER } from "../actionTypes";
const initialState = {
  isAuthenticated: false,
  user: {},
};
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      const newState = {
        isAuthenticated: Object.keys(action.user).length != 0,
        user: action.user,
      };
      return newState;
    default:
      return state;
  }
};
