// actions.js
export const SELECT_IMAGE = 'SELECT_IMAGE';

export const selectImage = (uri) => ({
  type: SELECT_IMAGE,
  payload: uri
});
