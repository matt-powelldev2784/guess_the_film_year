import ReactDOM from 'react-dom';

import Card from './Card';
import Button from '../components/Button';
import styles from './ErrorModal.module.css';
import React from 'react';

const ErrorModal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <div className={styles.backdrop} onClick={props.onConfirm}>
          <Card className={styles.modal}>
            <h2 className={styles.title}>{props.title}</h2>
            <p className={styles.message}>{props.message}</p>
            <Button label={props.label} onClick={props.onConfirm} />
          </Card>
        </div>,
        document.getElementById('error_modal')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
