// create the setCurrentuser function

import { SET_CURRENT_USER } from "../actionTypes";
import { apiCall } from "../../services/apiCall";
import store from "..";

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

export const authUser = (userData, type) => {
  {
    console.log("before makeing the api call");
    return new Promise((resolve, reject) => {
      console.log("starting the promise");
      return apiCall("post", `/api/auth/${type}`, userData)
        .then((res) => {
          console.log("made the api call perfectly and got the data back yeet");
          const { token, ...user } = res;
          window.localStorage.setItem("token", token);
          store.dispatch(setCurrentUser(user));
          console.log(user);
          console.log("user stateeee" + store.getState().user);
          resolve();
        })
        .catch((err) => {
          reject();
          console.log(err + "my error");
        });
    });
  }
};

export default authUser;
