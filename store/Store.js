import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import catReducer from "./Reducer/Reducer";

const root = combineReducers({
  Categories: catReducer,
});

const th = composeWithDevTools(applyMiddleware(thunk));

export default createStore(root, th);
