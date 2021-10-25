import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import {
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
} from '@firebase/firestore';
import { nanoid } from 'nanoid';
import { firestore } from '../lib/firebase';
import { setGameID, setPlayerSign } from '../redux/game/game.action';
import { updateSquares } from '../redux/board/board.action';
import { calculateWinner } from '../lib/utils';

const GameStats = ({
  squares,
  gameID,
  setGameID,
  setSquares,
  setPlayerSign,
  playerSign,
}) => {
  const [inputID, setInputID] = useState('');
  let unsub = useRef();
  const createGame = async () => {
    setSquares(Array(9).fill(null));
    const id = nanoid(4);
    await setDoc(doc(firestore, 'room', id), {
      squares,
    });
    setGameID(id);
  };

  const joinGame = async () => {
    if (inputID === '') return;
    const docRef = doc(firestore, 'room', inputID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setPlayerSign('O');
      setGameID(inputID);
    } else {
      alert('Wrong ID');
    }
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
  };

  useEffect(() => {
    if (gameID) {
      (async () => {
        await updateDoc(doc(firestore, 'room', gameID), {
          squares,
        });
      })();
    }
  }, [squares]);

  useEffect(() => {
    if (gameID) {
      unsub.current = onSnapshot(doc(firestore, 'room', gameID), (doc) => {
        setSquares(doc.data().squares);
      });
    }

    return unsub.current;
  }, [gameID]);

  return (
    <div className="button-group">
      <p>You Play: {playerSign}</p>
      <button onClick={createGame}>Create</button>
      <input
        type="text"
        value={inputID}
        onChange={(e) => setInputID(e.target.value)}
        placeholder="enter ID to join"
      />
      <button onClick={joinGame}>Join</button>
      <button onClick={resetGame} disabled={!calculateWinner(squares)}>
        Reset
      </button>
      <p>{gameID ? `ID: ${gameID}` : null}</p>
    </div>
  );
};

const mapStateToProps = ({
  game: { gameID, playerSign },
  board: { squares },
}) => ({
  gameID,
  squares,
  playerSign,
});
const mapDispatchToProps = (dispatch) => ({
  setGameID: (ID) => dispatch(setGameID(ID)),
  setSquares: (newSquares) => dispatch(updateSquares(newSquares)),
  setPlayerSign: (sign) => dispatch(setPlayerSign(sign)),
});
export default connect(mapStateToProps, mapDispatchToProps)(GameStats);
