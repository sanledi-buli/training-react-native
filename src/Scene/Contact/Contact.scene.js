// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Contact from '../../Components/Contact/Contact.component';
import store from '../../Redux/CreateStore/CreateStore';
import styles from './Contact.styles';
import ContactForm from '../../Components/Contact/ContactForm.component';

type Props = {};

class ContactScene extends Component<Props> {
  componentWillMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  static navigationOptions = {
    title: 'Contact'
  };
  render() {
    let { contactList } = store.getState();
    return (
      <View style={styles.container}>
        {contactList.map(contact => (
          <Contact key={contact.name} contact={contact} onPress={() => {}} />
        ))}
        <ContactForm />
      </View>
    );
  }
}

export default ContactScene;
