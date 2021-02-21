import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import catReducer from "./Reducer/Reducer";
import SubCategory from "./Reducer/SubCategory";

const root = combineReducers({
  Categories: catReducer,
  SubCat: SubCategory,
});

const th = composeWithDevTools(applyMiddleware(thunk));

export default createStore(root, th);
