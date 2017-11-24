// @flow

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Contact.styles';

type ContactDetail = {
  name: string,
  phone: string
};

type Props = {
  contact: ContactDetail,
  onPress: () => void
};

function Contact(props: Props) {
  let { contact, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.profilePhoto}>
          <Text style={styles.letter}>{contact.name.charAt(0)}</Text>
        </View>
        <Text style={styles.contactName}>{contact.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Contact;
