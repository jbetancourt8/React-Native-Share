import data from './Data.json';
import {
  PHOTO_SELECTION_CHANGED
} from '../actions/Types';

const INITIAL_STATE = data;

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case PHOTO_SELECTION_CHANGED:
      const filtered = state.media.filter((photo) => { return photo.uri !== action.payload.uri; });
      const media = filtered.concat(action.payload);
      return { ...state, media };
    default:
      return state;
  }
}
