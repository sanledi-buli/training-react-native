// @flow

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './Button.styles';

type Props = {
  title: string,
  onPressHandler: () => void
};

function Button(props: Props) {
  let { title, onPressHandler } = props;
  return (
    <TouchableOpacity onPress={onPressHandler}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Button;
