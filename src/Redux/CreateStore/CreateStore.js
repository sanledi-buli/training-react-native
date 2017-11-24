// @flow
import { createStore } from 'redux';
import { REDUCER } from '../../Constants/Constants';

let initialData = {
  contactList: []
};

let reducer = (oldState, action) => {
  if (oldState == null) {
    return initialData;
  }
  switch (action.type) {
    case REDUCER.TYPES.ADD_CONTACT: {
      return {
        contactList: [...oldState.contactList, action.newContact]
      };
    }
    default:
      return oldState;
  }
};

let store = createStore(reducer);

export default store;
