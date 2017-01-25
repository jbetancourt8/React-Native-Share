import { combineReducers } from 'redux';
import DataReducer from './DataReducer';
import ContactListReducer from './ContactListReducer';
import PhotoListReducer from './PhotoListReducer';

export default combineReducers({
  data: DataReducer,
  contactlist: ContactListReducer,
  photolist: PhotoListReducer
});
