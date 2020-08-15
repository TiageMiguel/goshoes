import React from 'react';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Source from './src';
import { store, persistor } from './src/store';

enableScreens();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Source />
      </PersistGate>
    </Provider>
  );
};

export default App;
