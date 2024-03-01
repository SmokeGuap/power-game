import classNames from 'classnames';
import { FC, useContext } from 'react';

import MeasureImage from 'src/assets/images/measure_main.png';
import Ruby from 'src/assets/images/ruby.png';
import RubyGlow from 'src/assets/images/prize_glow.png';
import { StateContext } from 'src/context';
import gameConfig from 'src/gameConfig';

import styles from './Measure.module.scss';

const Measure: FC = () => {
  const { powerOfPunch } = useContext(StateContext);

  return (
    <>
      <img src={MeasureImage} className={styles.measure} alt='Measure' />
      <div className={styles.levels}>
        <div
          className={classNames(styles.levelRuby, {
            [styles.levelRubyActive]: powerOfPunch > gameConfig.ruby,
          })}
        >
          <img src={Ruby} className={styles.ruby} alt='Ruby' />
          {powerOfPunch > gameConfig.ruby && (
            <img src={RubyGlow} className={styles.rubyGlow} alt='RubyGlow' />
          )}
        </div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > gameConfig.block6,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > gameConfig.block5,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > gameConfig.block4,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > gameConfig.block3,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > gameConfig.block2,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: powerOfPunch > gameConfig.block1,
          })}
        ></div>
      </div>
    </>
  );
};

export default Measure;
