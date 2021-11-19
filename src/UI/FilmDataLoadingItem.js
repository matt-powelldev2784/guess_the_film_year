import React from 'react';
import loadingImg from '../img/loading.jpg';
import styles from '../components/FilmItem.module.css';

const FilmDataLoadingItem = props => {
  return (
    <React.Fragment>
      <div>
        <p>Loading</p>
      </div>
      <img
        className={styles.poster}
        src={loadingImg}
        alt="Film Data Loading"
      ></img>
    </React.Fragment>
  );
};

export default FilmDataLoadingItem;
