// @flow

import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import Contact from '../../Components/Contact/Contact.component';
import styles from './Contact.styles';
import ContactForm from '../../Components/Contact/ContactForm.component';

type Props = {
  contactList: Array<Object>,
  contactTapHandler: (index: number) => void
};

class ContactScene extends Component<Props> {
  static navigationOptions = {
    title: 'Contact'
  };
  render() {
    let { contactList, contactTapHandler } = this.props;
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
        <ContactForm />
      </View>
    );
  }
}

export default ContactScene;
