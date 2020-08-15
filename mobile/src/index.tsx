import {
  useFonts,
  Rubik_300Light,
  Rubik_500Medium,
} from '@expo-google-fonts/rubik';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';
import Theme from './themes';

const Source: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style='light' />
      <Routes />
    </ThemeProvider>
  );
};

export default Source;
