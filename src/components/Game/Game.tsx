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
  const { gameStart, setGameStart, setPunch } = useContext(StateContext);

  const start = () => setGameStart(true);
  const punch = () => setPunch(true);

  return (
    <div className={styles.gameWrapper}>
      <div className={styles.game}>
        <Measure />
        <PunchButton />
        <Hammer />
        <Scale />
        <Robot />
        {gameStart ? (
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
        {gameStart ? (
          <button onClick={punch} className={styles.activeButton}>
            УДАР!
          </button>
        ) : (
          <button onClick={start} className={styles.startButton}>
            НОВАЯ ИГРА
          </button>
        )}
      </div>
    </div>
  );
};

export default Game;
