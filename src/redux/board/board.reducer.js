import { boardActionType } from './board.type';

const INITIAL_STATE = {
  squares: Array(9).fill(null),
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case boardActionType.DRAW:
      return {
        ...state,
        squares: action.payload,
      };

    default:
      return state;
  }
};

export default boardReducer;
