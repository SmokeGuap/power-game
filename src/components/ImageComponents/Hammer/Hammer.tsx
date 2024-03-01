import { FC } from 'react';

import HammerImage from 'src/assets/images/hammer.png';

import styles from './Hammer.module.scss';

const Hammer: FC = () => {
  return <img src={HammerImage} className={styles.hammer} alt='Hammer' />;
};

export default Hammer;
