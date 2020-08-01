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
        // // const initialPosition = JSON.stringify(position);
        // // console.log(initialPosition)
        console.log("HI", position);
        dispatch({
          type: GET_CURRENT_LOCATION,
          payload: position,
        });
      },
      (error) => Alert.alert("Error", JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
}
