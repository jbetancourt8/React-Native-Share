import {
  CONTACT_SELECTION_CHANGED,
  PHOTO_SELECTION_CHANGED
} from './Types';

export const contactSelectionChanged = (contact) => {
  return {
    type: CONTACT_SELECTION_CHANGED,
    payload: contact
  };
};

export const photoSelectionChanged = (photo) => {
  return {
    type: PHOTO_SELECTION_CHANGED,
    payload: photo
  };
};
