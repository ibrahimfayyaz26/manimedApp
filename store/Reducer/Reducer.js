import { FETCH_ITEM } from "../Action/Action";

initialState = {
  medicine: [],
  sportWear: [],
  martial: [],
  other: [],
};

export default Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM:
      const data = action.payload;
      const med = data.filter((d) => {
        return d.category == "Medicine";
      });
      const sport = data.filter((d) => {
        return d.category == "SPORTS WEARS & SPORTS UNIFORM";
      });
      const martialD = data.filter((d) => {
        return d.category == "MARTIAL ARTS";
      });
      const otherD = data.filter((d) => {
        return d.category == "OTHER PRODUCTS";
      });
      return {
        medicine: med,
        sportWear: sport,
        martial: martialD,
        other: otherD,
      };
  }
  return state;
};
