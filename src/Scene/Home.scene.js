// @flow
import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import styles from './Styles.scene';
import Button from '../Components/Button/Button.component';

type Props = {};
type State = {};

let { height, width } = Dimensions.get('window');

class HomeScene extends Component<Props, State> {
  _contactHandler = () => {};
  _githubHandler = () => {};

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: width - 100, height: height / 3, marginTop: 20 }}
          source={require('../../content/got.png')}
        />
        <Button title="CONTACT" onPressHandler={this._contactHandler()} />
        <Button title="GITHUB" onPressHandler={this._githubHandler()} />
      </View>
    );
  }
}

export default HomeScene;
