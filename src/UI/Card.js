import React from 'react';
import './Card.module.css';

//import styles from './Card.module.css';

const Card = props => {
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
