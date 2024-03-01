import { FC } from 'react';

import MeasureImage from 'src/assets/images/measure_main.png';
import Ruby from 'src/assets/images/ruby.png';

import styles from './Measure.module.scss';

const Measure: FC = () => {
  return (
    <>
      <img src={MeasureImage} className={styles.measure} alt='Measure' />
      <div className={styles.levels}>
        <div className={styles.levelRuby}>
          <img src={Ruby} className={styles.ruby} alt='Ruby' />
        </div>
        <div className={styles.level}></div>
        <div className={styles.level}></div>
        <div className={styles.level}></div>
        <div className={styles.level}></div>
        <div className={styles.level}></div>
        <div className={styles.level}></div>
      </div>
    </>
  );
};

export default Measure;
