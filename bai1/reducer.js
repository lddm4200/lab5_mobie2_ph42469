// reducers.js
import {TAKE_PHOTO} from './action'

const initialState = {
  hasPer: null,
  photoUri: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TAKE_PHOTO:
      return {
        ...state,
        photoUri: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
