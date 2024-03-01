import classNames from 'classnames';
import { FC, useContext } from 'react';

import HammerImage from 'src/assets/images/hammer.png';
import { StateContext } from 'src/context';

import styles from './Hammer.module.scss';

const Hammer: FC = () => {
  const { gameStart, punch } = useContext(StateContext);

  return (
    <img
      src={HammerImage}
      className={classNames(styles.hammer, {
        [styles.hammerActive]: gameStart,
        [styles.hammerPunch]: punch,
      })}
      alt='Hammer'
    />
  );
};

export default Hammer;
