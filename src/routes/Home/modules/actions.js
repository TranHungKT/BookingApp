import constants from './actionConstants';

const {SET_NAME} = constants;

export function setName() {
  return {
    type: SET_NAME,
    payload: 'Tran Hung',
  };
}
