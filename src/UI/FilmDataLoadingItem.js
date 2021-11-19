import React from 'react';
import styled from 'styled-components';
import loadingImg from '../img/loading.jpg';

const FilmDataLoadingItem = props => {
  return (
    <React.Fragment>
      <LoadingImage src={loadingImg} alt="Film Data Loading" />
      <LoadingMessage>Loading</LoadingMessage>
    </React.Fragment>
  );
};

export default FilmDataLoadingItem;

const LoadingImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  border-radius: 6px;
  width: 10rem;
`;

const LoadingMessage = styled.p`
  display: block;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  color: #777;
  text-align: center;
  font-size: 2rem;
`;
