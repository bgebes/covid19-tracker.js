import titleImage from '../../assets/titleImage.png';
import styles from './Title.module.css';
import React from 'react';

function Title() {
  return (
    <div className={styles.title}>
      <img src={titleImage} alt="titleImage" />
      <div className={styles.title__text}>
        Global and Country Wise Cases of Corona Virus
      </div>
      <div className={styles.title__hint}>
        (For a Particular country, select a Country from below)
      </div>
    </div>
  );
}

export default Title;
