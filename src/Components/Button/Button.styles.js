// @flow

import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 25,
    height: 25,
    width: width - 100
  },

  title: {
    color: 'white'
  }
});

export default styles;
