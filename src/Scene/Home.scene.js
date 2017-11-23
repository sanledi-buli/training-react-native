// @flow
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, Alert } from 'react-native';
import styles from './Home.styles';
import Button from '../Components/Button/Button.component';

type Props = {
  navigation: Object
};

type State = {};

let { height, width } = Dimensions.get('window');

class HomeScene extends Component<Props, State> {
  static navigationOptions = {
    title: 'Welcome'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Image
          style={{ width: width - 100, height: height / 3, marginTop: 20 }}
          source={require('../../content/got.png')}
        />
        <Button
          key={1}
          title="CONTACT"
          onPressHandler={() => navigate('Contact')}
        />
        <Button
          key={2}
          title="GITHUB"
          onPressHandler={() => navigate('GithubUsers')}
        />
      </View>
    );
  }
}

export default HomeScene;
