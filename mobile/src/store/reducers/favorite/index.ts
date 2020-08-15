import { Action } from 'redux';

import { Shoes } from '../../../@types/shoes';

export interface FavoriteState {
  readonly items: Shoes[];
}

export enum FavoriteActions {
  ADD = '@favorite/add',
  REMOVE = '@favorite/remove',
  RESET = '@favorite/reset',
}

export interface FavoriteAction extends Action {
  type: FavoriteActions;
  data: Shoes;
}

const INITIAL_STATE: FavoriteState = {
  items: [],
};

export function favoriteReducer(
  state = INITIAL_STATE,
  action: FavoriteAction,
): FavoriteState {
  const { items } = state;

  switch (action.type) {
    case FavoriteActions.ADD: {
      items.push(action?.data);

      return { ...state, items };
    }
    case FavoriteActions.REMOVE: {
      const index = items.findIndex(shoe => shoe.id === action?.data.id);

      items.splice(index, 1);

      return { ...state, items };
    }
    case FavoriteActions.RESET:
      return { ...state, items: [] };
    default:
      return state;
  }
}
