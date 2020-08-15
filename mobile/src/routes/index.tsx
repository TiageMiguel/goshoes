import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import ExplorerStack from './ExplorerStack';

const Routes: React.FC = () => (
  <NavigationContainer>
    <ExplorerStack />
  </NavigationContainer>
);

export default Routes;
