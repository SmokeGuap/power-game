import { FC, useContext, useEffect, useState } from 'react';

import ScaleImage from 'src/assets/images/scale.png';
import ScaleLevels from 'src/assets/images/scale-1.png';
import { StateContext } from 'src/context';

import styles from './Scale.module.scss';

const Scale: FC = () => {
  const { gameStart, punch, setPowerOfPunch } = useContext(StateContext);

  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!gameStart) return;

    const interval = setInterval(() => {
      setScale(Math.floor(Math.random() * 101));
    }, 300);

    if (punch) {
      clearInterval(interval);
      setPowerOfPunch(scale);
    }

    return () => clearInterval(interval);
  }, [gameStart, punch]);

  return (
    <>
      <img src={ScaleImage} className={styles.scale} alt='Scale' />
      <img src={ScaleLevels} className={styles.scaleLevels} alt='ScaleLevels' />
      <div className={styles.power}>
        <div
          style={{ height: scale + '%' }}
          className={styles.powerLevel}
        ></div>
      </div>
    </>
  );
};

export default Scale;
