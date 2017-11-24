// @flow

import { connect } from 'react-redux';
import ContactForm from './ContactForm.component';
import { REDUCER } from '../../Constants/Constants';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    addContactHandler: (contact: Object) => {
      dispatch({
        type: REDUCER.TYPES.ADD_CONTACT,
        newContact: contact
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
