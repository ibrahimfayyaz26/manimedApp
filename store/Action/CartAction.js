export const PUT_DATA = "PUT_DATA";
export const GET_DATA = "GET_DATA";
export const DELETE_DATA = "DELETE_DATA";

import { useSelector } from "react-redux";
import { deleteData, getData, putData } from "../../helper/db";

export const putingdata = ({ imageUri, code, name }) => {
  return async (dispatch) => {
    const result = await putData(imageUri, code, name);

    dispatch({
      type: PUT_DATA,
      payload: {
        imageUri: imageUri,
        code: code,
        name: name,
        id: result.insertId,
      },
    });
  };
};

export const getingdata = () => {
  return async (dispatch) => {
    const newresult = await getData();

    dispatch({
      type: GET_DATA,
      payload: newresult.rows._array,
    });
  };
};

export const deletingdata = (id) => {
  return async (dispatch) => {
    const newresult = await deleteData(id);

    dispatch({
      type: DELETE_DATA,
      payload: id,
    });
  };
};
