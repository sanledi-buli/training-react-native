// @flow

import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Contact from '../../Components/Contact/Contact.component';
import styles from './Contact.styles';
import ContactForm from '../../Components/Contact/ContactForm.container';

type Props = {
  contactList: Array<Object>,
  contactTapHandler: (index: number) => void,
  addContactHandler: (contact: Object) => void
};

class ContactScene extends Component<Props> {
  static navigationOptions = {
    title: 'Contact'
  };
  render() {
    let { contactList, contactTapHandler, addContactHandler } = this.props;
    return (
      <View style={styles.container}>
        {contactList.map((contact, index) => (
          <Contact
            key={contact.name}
            contact={contact}
            contactTapHandler={contactTapHandler}
            index={index}
          />
        ))}
        <ContactForm addContactHandler={addContactHandler} />
      </View>
    );
  }
}

export default ContactScene;
