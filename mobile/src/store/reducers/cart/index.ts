import { Action } from 'redux';

import { Shoes } from '../../../@types/shoes';

export interface CartState {
  readonly items: Shoes[];
}

export enum CartActions {
  ADD = '@cart/add',
  REMOVE = '@cart/remove',
  RESET = '@cart/reset',
}

export interface CartAction extends Action {
  type: CartActions;
  data: Shoes;
}

const INITIAL_STATE: CartState = {
  items: [],
};

export function cartReducer(
  state = INITIAL_STATE,
  action: CartAction,
): CartState {
  const { items } = state;

  switch (action.type) {
    case CartActions.ADD: {
      items.push(action?.data);

      return { ...state, items };
    }
    case CartActions.REMOVE: {
      const index = items.findIndex(shoe => shoe.id === action?.data.id);

      items.splice(index, 1);

      return { ...state, items };
    }
    case CartActions.RESET:
      return { ...state, items: [] };
    default:
      return state;
  }
}
