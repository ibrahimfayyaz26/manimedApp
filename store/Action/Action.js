export const FETCH_ITEM = "FETCH_ITEM";
export const FETCH_SUB = "FETCH_SUB";

export const fetchItem = () => {
  return async (dispatch) => {
    const Items = await fetch("http://192.168.31.130:3000/manimed");

    const data = await Items.json();

    dispatch({
      type: FETCH_ITEM,
      payload: data,
    });
  };
};

export const fetchSub = (props) => {
  return async (dispatch) => {
    const result = await fetch(`http://192.168.31.130:3000/manimed/${props}`);

    const data = await result.json();

    dispatch({
      type: FETCH_SUB,
      payload: data,
    });
  };
};
