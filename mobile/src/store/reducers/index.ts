import { combineReducers } from 'redux';

import { cartReducer as cart, CartState } from './cart';
import { favoriteReducer as favorite, FavoriteState } from './favorite';

export interface ApplicationState {
  readonly cart: CartState;
  readonly favorite: FavoriteState;
}

export const combinedReducers = combineReducers<ApplicationState>({
  cart,
  favorite,
});
