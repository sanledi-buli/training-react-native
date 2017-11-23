// @flow

import { GITHUB_BASE_API, GITHUB_API_VERSION } from 'react-native-dotenv';

let config = {
  api: {
    searchUsers: `${GITHUB_BASE_API}${GITHUB_API_VERSION}/search/users`,
    userDetail: `${GITHUB_BASE_API}${GITHUB_API_VERSION}/users/`,
    userRepos: `${GITHUB_BASE_API}${GITHUB_API_VERSION}/search/users/`
  }
};

export default config;
