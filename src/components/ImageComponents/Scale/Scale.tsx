import { FC, useEffect, useState } from 'react';

import ScaleImage from 'src/assets/images/scale.png';
import ScaleLevels from 'src/assets/images/scale-1.png';

import styles from './Scale.module.scss';

const Scale: FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale(Math.floor(Math.random() * 101));
    }, 300);

    return () => clearInterval(interval);
  }, []);

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
