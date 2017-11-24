// @flow

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './Contact.styles';
import Button from '../Button/Button.component';
import store from '../../Redux/CreateStore/CreateStore';
import { REDUCER } from '../../Constants/Constants';

type Props = {};
type State = {
  name: string,
  phoneNumber: string
};

class ContactForm extends Component<Props, State> {
  state = {
    name: '',
    phoneNumber: ''
  };

  render() {
    let _submitHandler = () => {
      let newContact = {
        name: this.state.name,
        phone: this.state.phoneNumber
      };

      store.dispatch({
        type: REDUCER.TYPES.ADD_CONTACT,
        newContact: newContact
      });
    };
    return (
      <View style={styles.contactForm}>
        <Text>Please Enter Name:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ name: text })}
        />
        <Text>Please Enter Phone Number:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({ phoneNumber: text })}
        />
        <Button title="Save Contact" onPressHandler={_submitHandler} />
      </View>
    );
  }
}

export default ContactForm;
