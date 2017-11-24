// @flow

import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from './Contact.styles';

type ContactDetail = {
  name: string,
  phone: string
};

type Props = {
  contact: ContactDetail,
  contactTapHandler: (index: number) => void,
  index: number
};

function Contact(props: Props) {
  let { contact, contactTapHandler, index } = props;
  let onPress = () => {
    Alert.alert(
      `${contact.name}`,
      `Do you want to delete contact ${contact.phone}`,
      [
        {
          text: 'Delete',
          onPress: () => {
            contactTapHandler(index);
          }
        },
        { text: 'Dismiss' }
      ]
    );
  };
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
