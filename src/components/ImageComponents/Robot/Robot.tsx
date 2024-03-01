import { FC, useContext } from 'react';

import RobotImage from 'src/assets/images/robot_1.png';
import RobotImage2 from 'src/assets/images/robot_2.png';
import RobotImage3 from 'src/assets/images/robot_3.png';
import { StateContext } from 'src/context';
import gameConfig from 'src/gameConfig';

import styles from './Robot.module.scss';

const Robot: FC = () => {
  const { punch, powerOfPunch } = useContext(StateContext);

  return (
    <>
      {punch && powerOfPunch > gameConfig.ruby ? (
        <img src={RobotImage3} className={styles.robot} alt='Robot' />
      ) : punch ? (
        <img src={RobotImage2} className={styles.robot} alt='Robot' />
      ) : (
        <img src={RobotImage} className={styles.robot} alt='Robot' />
      )}
    </>
  );
};

export default Robot;
