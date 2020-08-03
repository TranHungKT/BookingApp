import constants from "./actionConstants";

const {
  SET_NAME,
  GET_CURRENT_LOCATION,
  GET_INPUT,
  TOGGLE_SEARCH_RESULT,
} = constants;
import Geolocation from "@react-native-community/geolocation";
export function setName() {
  return {
    type: SET_NAME,
    payload: "Tran Hung",
  };
}

export function getCurrentLocation() {
  return (dispatch) => {
    Geolocation.getCurrentPosition(
      (position) => {
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: position,
        });
      },
      (error) => console.log(error)
    );
  };
}

export function getInputData(payload) {
  return {
    type: GET_INPUT,
    payload,
  };
}

export function toggleSearchResultModal(payload) {
  return {
    type: TOGGLE_SEARCH_RESULT,
    payload,
  };
}
