// @flow
import React from 'react';
import { HomeScene, ContactContainer, GithubUsersScene } from './Scene';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './Redux/CreateStore/CreateStore';

const App = StackNavigator({
  Home: { screen: HomeScene },
  Contact: { screen: ContactContainer },
  GithubUsers: { screen: GithubUsersScene }
});

export default function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
