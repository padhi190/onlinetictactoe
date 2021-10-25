import { gameActionType } from './game.type';

const INITIAL_STATE = {
  gameID: null,
  playerSign: 'X',
};

const gameReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case gameActionType.SET_GAME_ID:
      return {
        ...state,
        gameID: action.payload,
      };
    case gameActionType.SET_PLAYER_SIGN:
      return {
        ...state,
        playerSign: action.payload,
      };
    default:
      return state;
  }
};

export default gameReducer;
