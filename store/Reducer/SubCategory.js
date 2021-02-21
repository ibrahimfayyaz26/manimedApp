import { FETCH_SUB } from "../Action/Action";

initialState = {
  subCategory: [],
};

export default subCategory = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUB:
      return {
        subCategory: action.payload,
      };
  }
  return state;
};
