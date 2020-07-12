import constants from './actionConstants';

const {SET_NAME} = constants;

const initialState = {
  name: '',
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_NAME:
      tempName = action.payload;
      return {
        ...state,
        name: tempName,
      };
    default:
      return initialState;
  }
}
