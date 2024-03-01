import { FC, useContext, useEffect, useState } from 'react';

import { StateContext } from 'src/context';
import {
  Hammer,
  Measure,
  PunchButton,
  Robot,
  Scale,
} from 'src/components/ImageComponents';
import gameConfig from 'src/gameConfig';

import styles from './Game.module.scss';

const Game: FC = () => {
  const {
    punch,
    gameStart,
    setGameStart,
    setPunch,
    setPowerOfPunch,
    powerOfPunch,
    timeDisabled,
  } = useContext(StateContext);

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setTimeout(() => setDisabled(false), timeDisabled);
  }, [timeDisabled]);

  const handleStart = () => setGameStart(true);
  const handlePunch = () => {
    setPunch(true);
    setDisabled(true);
  };
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
        {gameStart && punch && powerOfPunch > gameConfig.ruby ? (
          <p className={styles.text}>
            ВОТ ЭТО СИЛА!
            <br /> Ты выбил главный приз!
            <br /> <strong>Рубин</strong>
          </p>
        ) : gameStart && punch ? (
          <p className={styles.text}>
            Неплохо!
            <br /> Попробуй еще раз.
          </p>
        ) : gameStart ? (
          <p className={styles.text}>
            Жми на кнопку
            <br /> в нужный момент!
          </p>
        ) : (
          <p className={styles.text}>
            Привет!
            <br /> проверим твою силу!
          </p>
        )}
        {gameStart && punch ? (
          <button
            disabled={disabled}
            onClick={handleRestart}
            className={styles.startButton}
          >
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
