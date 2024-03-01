import classNames from 'classnames';
import { FC, useContext } from 'react';

import MeasureImage from 'src/assets/images/measure_main.png';
import Ruby from 'src/assets/images/ruby.png';
import RubyGlow from 'src/assets/images/prize_glow.png';
import { StateContext } from 'src/context';

import styles from './Measure.module.scss';

const Measure: FC = () => {
  const { powerOfPunch } = useContext(StateContext);

  return (
    <>
      <img src={MeasureImage} className={styles.measure} alt='Measure' />
      <div className={styles.levels}>
        <div
          className={classNames(styles.levelRuby, {
            [styles.levelRubyActive]: powerOfPunch > 80,
          })}
        >
          <img src={Ruby} className={styles.ruby} alt='Ruby' />
          {powerOfPunch > 80 && (
            <img src={RubyGlow} className={styles.rubyGlow} alt='RubyGlow' />
          )}
        </div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > 75,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > 60,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > 45,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > 30,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > 15,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > 0,
          })}
        ></div>
      </div>
    </>
  );
};

export default Measure;
