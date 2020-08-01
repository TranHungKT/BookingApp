import constants from "./actionConstants";
import { act } from "react-test-renderer";

const { SET_NAME, GET_CURRENT_LOCATION } = constants;

const initialState = {
  name: "",
  region: "",
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      tempName = action.payload;
      return {
        ...state,
        name: tempName,
      };
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        region: action.payload,
      };
    default:
      return initialState;
  }
}
