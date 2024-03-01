import { FC, useContext } from 'react';

import RobotImage from 'src/assets/images/robot_1.png';
import RobotImage2 from 'src/assets/images/robot_2.png';
import { StateContext } from 'src/context';

import styles from './Robot.module.scss';

const Robot: FC = () => {
  const { punch } = useContext(StateContext);

  return (
    <>
      {punch ? (
        <img src={RobotImage2} className={styles.robot} alt='Robot' />
      ) : (
        <img src={RobotImage} className={styles.robot} alt='Robot' />
      )}
    </>
  );
};

export default Robot;
