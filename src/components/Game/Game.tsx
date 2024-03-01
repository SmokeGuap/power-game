import { FC } from 'react';

import {
  Hammer,
  Measure,
  PunchButton,
  Robot,
  Scale,
} from 'src/components/ImageComponents';

import styles from './Game.module.scss';

const Game: FC = () => {
  return (
    <div className={styles.gameWrapper}>
      <div className={styles.game}>
        <Measure />
        <PunchButton />
        <Hammer />
        <Scale />
        <Robot />
        <h1 className={styles.title}>
          Привет!
          <br /> проверим твою силу!
        </h1>
        <button className={styles.button}>НОВАЯ ИГРА</button>
      </div>
    </div>
  );
};

export default Game;
