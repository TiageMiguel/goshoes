import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { useTheme } from 'styled-components';

import Explorer from '../pages/Explorer';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  const Theme = useTheme();

  return (
    <Navigator
      initialRouteName='Explorer'
      tabBarOptions={{
        style: {
          height: 64,
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabStyle: {
          height: 64,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle: {
          flex: 0,
          height: 20,
          width: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: Theme.colors.background,
        activeBackgroundColor: Theme.colors.backgroundDark,
        inactiveTintColor: Theme.colors.text,
        activeTintColor: Theme.colors.secondary,
      }}
    >
      <Screen
        name='Explorer'
        component={Explorer}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name='search'
              size={20}
              color={focused ? Theme.colors.secondary : color}
            />
          ),
        }}
      />
      <Screen
        name='Favorites'
        component={Favorites}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome5
              name='heart'
              size={20}
              color={focused ? Theme.colors.secondary : color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppTabs;
