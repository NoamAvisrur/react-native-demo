import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { View } from 'react-native';

import Home from './components/home/Home';
import Login from './components/login/Login';

const App = createStackNavigator({
  Login: {
    screen: Login
  },
  Home: {
    screen: Home
  }
});

export default App;
