import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import errorImg from '../img/error.png';

const reloadPage = () => {
  window.location.reload(true);
};

const FilmDataErrorItem = () => {
  return (
    <React.Fragment>
      <ErrorImage src={errorImg} alt="Film Data Error"></ErrorImage>
      <ErrorMessage>Error Loading Films. Please try agin later</ErrorMessage>
      <Form onSubmit={reloadPage}>
        <Button label="Refresh Page" />
      </Form>
    </React.Fragment>
  );
};

export default FilmDataErrorItem;

const ErrorImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  border-radius: 6px;
  width: 8rem;
`;

const ErrorMessage = styled.p`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #777;
  text-align: center;
  font-size: 1rem;
`;

const Form = styled.form`
  display: block;
  margin-left: auto;
  margin-right: auto;
  color: #777;
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
`;
