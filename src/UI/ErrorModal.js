import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Button from '../components/Button';
import React from 'react';

const ErrorModal = props => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onConfirm}>
          <Modal>
            <Title>{props.title}</Title>
            <Message>{props.message}</Message>
            <Button onClick={props.onConfirm} label="Ok" fontSize="5" />
          </Modal>
        </Backdrop>,
        document.getElementById('error_modal')
      )}
    </React.Fragment>
  );
};

export default ErrorModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Modal = styled.div`
  color: white;
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  top: 30vh;
  left: 30%;
  width: 40%;
  z-index: 100;
  overflow: hidden;
  border-radius: 10px;
`;

const Title = styled.h2`
  font-size: 3rem;
  background-color: #008cba;
  padding: 0.5rem;
`;

const Message = styled.p`
  font-size: 1.4rem;
  color: black;
  margin: 1rem;
`;
