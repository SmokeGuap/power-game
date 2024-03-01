import { FC } from 'react';

import RobotImage from 'src/assets/images/robot_1.png';

import styles from './Robot.module.scss';

const Robot: FC = () => {
  return <img src={RobotImage} className={styles.robot} alt='Robot' />;
};

export default Robot;
