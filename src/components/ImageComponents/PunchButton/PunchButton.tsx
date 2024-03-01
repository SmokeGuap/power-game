import { FC } from 'react';

import Button from 'src/assets/images/button.png';

import styles from './PunchButton.module.scss';

const PunchButton: FC = () => {
  return <img src={Button} className={styles.button} alt='PunchButton' />;
};

export default PunchButton;
