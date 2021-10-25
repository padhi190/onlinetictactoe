import { combineReducers } from 'redux';

import boardReducer from './board/board.reducer';
import gameReducer from './game/game.reducer';

export default combineReducers({
  board: boardReducer,
  game: gameReducer,
});
