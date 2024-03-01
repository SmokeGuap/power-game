import { FC, useContext } from 'react';

import Button from 'src/assets/images/button.png';
import ButtonActive from 'src/assets/images/button_active.png';
import { StateContext } from 'src/context';

import styles from './PunchButton.module.scss';

const PunchButton: FC = () => {
  const { punch } = useContext(StateContext);

  return (
    <>
      {punch ? (
        <img src={ButtonActive} className={styles.button} alt='PunchButton' />
      ) : (
        <img src={Button} className={styles.button} alt='PunchButton' />
      )}
    </>
  );
};

export default PunchButton;
