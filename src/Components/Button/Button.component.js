// @flow

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';

type Props = {
  title: string,
  onPressHandler: void
};

function Button(props: Props) {
  let { title, onPressHandler } = props;
  return (
    <View style={styles.container}>
      <TouchableOpacity onClick={onPressHandler}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;
