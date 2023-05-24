import { START_LOADING, STOP_LOADING, UIActions } from './ui.actions';

export interface State {
  isLoading: boolean;
}

const initialState: State = {
  isLoading: false,
};

export function uiReducer(state = initialState, action: UIActions) {
  switch (action.type) {
    case START_LOADING:
      return {
        isLoading: false,
      };
    case STOP_LOADING:
      return {
        isLoading: true,
      };
    default: {
      return state;
    }
  }
}

export const getIsLoading = (state: State) => state.isLoading;