import data from './Data.json';
import {
  CONTACT_SELECTION_CHANGED,
} from '../actions/Types';

const INITIAL_STATE = data;

export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case CONTACT_SELECTION_CHANGED:
      const filtered = state.contacts.filter((contact) => { return contact.name !== action.payload.name; });
      const contacts = filtered.concat(action.payload);
      return { ...state, contacts };
    default:
      return state;
  }
};
