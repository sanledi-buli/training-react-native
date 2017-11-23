// @flow
import { HomeScene, ContactScene, GithubUsersScene } from './Scene';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Home: { screen: HomeScene },
  Contact: { screen: ContactScene },
  GithubUsers: { screen: GithubUsersScene }
});

export default App;
