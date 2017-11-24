// @flow

import { connect } from 'react-redux';

import ContactScene from './Contact.scene';

import { REDUCER } from '../../Constants/Constants';

function mapStateToProps(state) {
  return {
    contactList: state.contactList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    contactTapHandler: (index: number) => {
      dispatch({
        type: REDUCER.TYPES.DELETE_CONTACT,
        index
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactScene);
