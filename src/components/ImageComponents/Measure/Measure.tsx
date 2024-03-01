import classNames from 'classnames';
import {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import MeasureImage from 'src/assets/images/measure_main.png';
import Ruby from 'src/assets/images/ruby.png';
import RubyGlow from 'src/assets/images/prize_glow.png';
import { StateContext } from 'src/context';
import gameConfig from 'src/gameConfig';

import styles from './Measure.module.scss';

const Measure: FC = () => {
  const { powerOfPunch, punch, setTimeDisabled } = useContext(StateContext);

  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);
  const [block4, setBlock4] = useState(false);
  const [block5, setBlock5] = useState(false);
  const [block6, setBlock6] = useState(false);
  const [block7, setBlock7] = useState(false);
  const [ruby, setRuby] = useState(false);

  useEffect(() => {
    if (!punch) {
      setBlock1(false);
      setBlock2(false);
      setBlock3(false);
      setBlock4(false);
      setBlock5(false);
      setBlock6(false);
      setBlock7(false);
      setRuby(false);
    }

    if (powerOfPunch > gameConfig.block1) delay(0, setBlock1);
    if (powerOfPunch > gameConfig.block2) delay(300, setBlock2);
    if (powerOfPunch > gameConfig.block3) delay(600, setBlock3);
    if (powerOfPunch > gameConfig.block4) delay(900, setBlock4);
    if (powerOfPunch > gameConfig.block5) delay(1200, setBlock5);
    if (powerOfPunch > gameConfig.block6) delay(1500, setBlock6);
    if (powerOfPunch > gameConfig.block7) delay(1800, setBlock7);
    if (powerOfPunch > gameConfig.ruby) delay(2100, setRuby);
  }, [punch, powerOfPunch]);

  const delay = (time: number, setBlock: Dispatch<SetStateAction<boolean>>) => {
    setTimeDisabled(time);
    setTimeout(() => {
      setBlock(true);
    }, time);
  };

  return (
    <>
      <img src={MeasureImage} className={styles.measure} alt='Measure' />
      <div className={styles.levels}>
        <div
          className={classNames(styles.levelRuby, {
            [styles.levelRubyActive]: ruby,
          })}
        >
          <img src={Ruby} className={styles.ruby} alt='Ruby' />
          {ruby && (
            <img src={RubyGlow} className={styles.rubyGlow} alt='RubyGlow' />
          )}
        </div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block7,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block6,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block5,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block4,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block3,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block2,
          })}
        ></div>
        <div
          className={classNames(styles.level, {
            [styles.levelActive]: block1,
          })}
        ></div>
      </div>
    </>
  );
};

export default Measure;
