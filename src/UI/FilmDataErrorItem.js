import React from 'react';
import errorImg from '../img/error.png';
import Card from './Card';
import styles from '../components/FilmItem.module.css';

const FilmDataErrorItem = props => {
  return (
    <Card className={styles.film_card}>
      <img className={styles.poster} src={errorImg} alt="Film Data Error"></img>
      <p className={styles.title}>Error Loading Films. Please try agin later</p>
    </Card>
  );
};

export default FilmDataErrorItem;
