import createStore, { applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
