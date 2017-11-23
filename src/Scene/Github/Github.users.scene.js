// @flow

import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

type Props = {};
type State = {};

class GithubUsersScene extends Component<Props, State> {
  static navigationOptions = {
    title: 'Github Users'
  };
  render() {
    return (
      <View>
        <Text>Hello github users</Text>
      </View>
    );
  }
}

export default GithubUsersScene;
