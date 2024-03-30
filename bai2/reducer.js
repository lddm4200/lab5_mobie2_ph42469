// reducers.js
import { SELECT_IMAGE } from './action';

const initialState = {
  selectedImage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
