import React from 'react';

import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`
const spinning = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const SpinnerAnimation = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.3);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spinning} 1s linear infinite;
`

const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <SpinnerAnimation/>
    </SpinnerContainer>
  );
};

export default Spinner;