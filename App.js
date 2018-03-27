import React from 'react';
import { StackNavigator } from 'react-navigation';
//LOCAL
import Splash from './app/Splash';
import Home from './app/Home';

export default StackNavigator(
  {
    Splash: { screen: Splash },
    Home: { screen: Home }
  },
  {
    headerMode: 'none'
  }
);