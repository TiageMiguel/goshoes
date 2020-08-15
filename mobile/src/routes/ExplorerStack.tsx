import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import React from 'react';

import Cart from '../pages/Cart';
import AppTabs from './AppTabs';

const { Navigator, Screen } = createStackNavigator();

const ExplorerStack: React.FC = () => {
  return (
    <Navigator
      initialRouteName='AppTabs'
      headerMode='none'
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
        cardStyle: {
          backgroundColor: 'transparent',
        },
      }}
    >
      <Screen name='AppTabs' component={AppTabs} />
      <Screen name='Cart' component={Cart} />
    </Navigator>
  );
};

export default ExplorerStack;
