import React from 'react';
import {string, bool} from 'prop-types';

import * as S from './style';

const HeadingBar = ({heading, transparent}) => {
  return (
    <S.HeadContainer trans={transparent}>
      <S.Heading trans={transparent}>{heading}</S.Heading>
    </S.HeadContainer>
  );
};

HeadingBar.propTypes = {
  heading: string.isRequired,
  transparent: bool,
};

export default HeadingBar;
