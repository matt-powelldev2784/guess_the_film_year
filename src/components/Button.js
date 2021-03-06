import styled from 'styled-components';

const Button = props => {
  return <ButtonWithLabel type="submit">{props.label}</ButtonWithLabel>;
};

export default Button;

const ButtonWithLabel = styled.button`
  background-color: #008cba;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  padding: 3px 12px;
  margin: 0.5rem;
  border-style: solid;
  border-width: 2px;
  border-color: #008cba;
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: #008cba;
    border-color: #008cba;
    border-style: solid;
    border-width: 2px;
  }
`;
