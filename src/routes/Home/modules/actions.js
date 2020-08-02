import constants from "./actionConstants";

const { SET_NAME, GET_CURRENT_LOCATION } = constants;
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
