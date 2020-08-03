import constants from "./actionConstants";
import { Dimensions } from "react-native";
import { act } from "react-test-renderer";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const ASPECT_RADIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGTITUDE_DELTA = ASPECT_RADIO * LATITUDE_DELTA;
const {
  SET_NAME,
  GET_CURRENT_LOCATION,
  GET_INPUT,
  TOGGLE_SEARCH_RESULT,
} = constants;

const initialState = {
  name: "",
  region: {
    latitude: Number,
    longitude: Number,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGTITUDE_DELTA,
  },
  inputData: {},
  resultTypes: {},
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
        region: {
          latitude: action.payload.coords.latitude,
          longitude: action.payload.coords.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGTITUDE_DELTA,
        },
      };
    case GET_INPUT:
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    case TOGGLE_SEARCH_RESULT:
      if (action.payload === "pickUp") {
        return {
          ...state,
          resultTypes: {
            pickUp: true,
          },
          dropOff: false,
        };
      }
      if (action.payload === "dropOff") {
        return {
          ...state,
          resultTypes: {
            pickUp: false,
          },
          dropOff: true,
        };
      }
    default:
      return initialState;
  }
}
