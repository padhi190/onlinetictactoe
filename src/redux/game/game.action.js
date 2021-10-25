import { gameActionType } from './game.type';

export const setGameID = (ID) => ({
  type: gameActionType.SET_GAME_ID,
  payload: ID,
});

export const setPlayerSign = (sign) => ({
  type: gameActionType.SET_PLAYER_SIGN,
  payload: sign,
});
