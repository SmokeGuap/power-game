import { FC, useEffect, useState } from 'react';

import ScaleImage from 'src/assets/images/scale.png';
import ScaleLevels from 'src/assets/images/scale-1.png';

import styles from './Scale.module.scss';

const Scale: FC = () => {
  return (
    <>
      <img src={ScaleImage} className={styles.scale} alt='Scale' />
      <img src={ScaleLevels} className={styles.scaleLevels} alt='ScaleLevels' />
      <div className={styles.power}>
        <div
          className={styles.powerLevel}
        ></div>
      </div>
    </>
  );
};

export default Scale;
