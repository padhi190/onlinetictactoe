import Square from './Square';
import { connect } from 'react-redux';
import {
  calculateWinner,
  calculateNextValue,
  calculateStatus,
} from '../lib/utils';
import { updateSquares } from '../redux/board/board.action';

const Board = ({ squares, playerSign, updateSquares, gameID }) => {
  const nextValue = calculateNextValue(squares);
  const myTurn = playerSign === nextValue;
  const winner = calculateWinner(squares);

  const handleClick = (i) => {
    const squares_copy = [...squares];
    if (winner || squares_copy[i] || !myTurn || !gameID) return;
    squares_copy[i] = playerSign;
    console.log(squares_copy);
    updateSquares(squares_copy);
  };

  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  let status = calculateStatus(winner, squares, nextValue);

  return (
    <div className="board">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  squares: state.board.squares,
  playerSign: state.game.playerSign,
  gameID: state.game.gameID,
});

const mapDispatchToProps = (dispatch) => ({
  updateSquares: (newsquares) => dispatch(updateSquares(newsquares)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
