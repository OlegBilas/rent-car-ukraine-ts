import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Wrapper } from './Loader.styled';

export default function Loader() {
  return (
    <Wrapper className="loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="4"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wrapper>
  );
}
