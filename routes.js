import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './Main';
import AppConfig from './pages/AppConfig/index';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        header: null
      }
    },
    AppConfig: {
      screen: AppConfig,
      navigationOptions: {
        header: null
      }
    }
  })
);

export default Routes;
