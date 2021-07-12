// create the setCurrentuser function

import { SET_CURRENT_USER } from "../actionTypes";
import { apiCall } from "../../services/apiCall";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    user,
  };
};

// call the api using the generic api call function
// get the data back
// store the returned toen in local storage
// change the current state using dispatch

const authUser = (userData, type) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData)
        .then((res) => {
          const { token, ...user } = res;
          window.localStorage.setItem("token", token);
          dispatch(setCurrentUser(user));
          resolve();
        })
        .catch((err) => reject());
    });
  };
};

export default authUser;
