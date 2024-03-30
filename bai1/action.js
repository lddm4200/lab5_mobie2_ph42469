// actions.js
export const TAKE_PHOTO = 'TAKE_PHOTO';

export const takePhoto = (photoUri) => ({
  type: TAKE_PHOTO,
  payload: photoUri
});
