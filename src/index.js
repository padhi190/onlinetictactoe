import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

import Board from './components/Board';
import GameStats from './components/GameStats';

const Game = () => {
  return (
    <Provider store={store}>
      <div className="game-board container">
        <div className="row">
          <Board />
          <GameStats />
          <div className="col-lg-4"></div>
        </div>
      </div>
    </Provider>
  );
};

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
