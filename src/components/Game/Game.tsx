import { FC, useContext } from 'react';

import { StateContext } from 'src/context';
import {
  Hammer,
  Measure,
  PunchButton,
  Robot,
  Scale,
} from 'src/components/ImageComponents';

import styles from './Game.module.scss';

const Game: FC = () => {
  const { punch, gameStart, setGameStart, setPunch, setPowerOfPunch } =
    useContext(StateContext);

  const handleStart = () => setGameStart(true);
  const handlePunch = () => setPunch(true);
  const handleRestart = () => {
    setPunch(false);
    setPowerOfPunch(0);
  };

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.game}>
        <Measure />
        <PunchButton />
        <Hammer />
        <Scale />
        <Robot />
        {gameStart && punch ? (
          <h1 className={styles.title}>
            Неплохо!
            <br /> Попробуй еще раз.
          </h1>
        ) : gameStart ? (
          <h1 className={styles.title}>
            Жми на кнопку
            <br /> в нужный момент!
          </h1>
        ) : (
          <h1 className={styles.title}>
            Привет!
            <br /> проверим твою силу!
          </h1>
        )}
        {gameStart && punch ? (
          <button onClick={handleRestart} className={styles.startButton}>
            НОВАЯ ИГРА
          </button>
        ) : gameStart ? (
          <button onClick={handlePunch} className={styles.activeButton}>
            УДАР!
          </button>
        ) : (
          <button onClick={handleStart} className={styles.startButton}>
            НОВАЯ ИГРА
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
