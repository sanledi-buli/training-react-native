// @flow

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    flexDirection: 'row'
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#007',
    alignItems: 'center',
    justifyContent: 'center'
  },
  letter: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 28
  },
  contactName: {
    marginLeft: 20,
    paddingTop: 20
  },
  textInput: {
    height: 34,
    paddingHorizontal: 4,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 25,
    width: '100%'
  },
  contactForm: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  }
});

export default styles;
