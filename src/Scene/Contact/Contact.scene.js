// @flow

import React, { Component } from 'react';
import { View, Text } from 'react-native';

type Props = {};

class ContactScene extends Component<Props> {
  static navigationOptions = {
    title: 'Contact'
  };
  render() {
    return (
      <View>
        <Text>Hello Contact</Text>
      </View>
    );
  }
}

export default ContactScene;
