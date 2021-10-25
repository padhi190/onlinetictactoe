import { boardActionType } from './board.type';

export const updateSquares = (newsquares) => ({
  type: boardActionType.DRAW,
  payload: newsquares,
});
