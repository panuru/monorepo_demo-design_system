import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../../images/logo.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Header = styled.header`
  text-align: center;
  background-color: ${props => props.theme.colors.headerBg};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoWrapper = styled.span`
  animation: ${spin} infinite 20s linear;
  height: 20vmin;
  > svg {
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 1.7em;
  font-weight: bold;
`;

export default () => {
  return (
    <Header>
      <LogoWrapper><Logo /></LogoWrapper>
      <Title>Demo shop</Title>
    </Header>
  )
}
