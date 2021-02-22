import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import catReducer from "./Reducer/Reducer";
import SubCategory from "./Reducer/SubCategory";
import cartData from "./Reducer/CartData";

const root = combineReducers({
  Categories: catReducer,
  SubCat: SubCategory,
  Cart: cartData,
});

const th = composeWithDevTools(applyMiddleware(thunk));

export default createStore(root, th);
