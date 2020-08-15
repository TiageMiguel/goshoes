import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import ReduxThunk from 'redux-thunk';

import { combinedReducers } from './reducers';

const persistConfig = {
  key: '@goshoesprod',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);
