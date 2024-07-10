import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './package.json'

const Root = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

AppRegistry.registerComponent(appName, () => Root);
