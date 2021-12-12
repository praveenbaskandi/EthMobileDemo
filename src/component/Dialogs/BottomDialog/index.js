import React from 'react';
import {arrayOf, node, oneOfType, string, func} from 'prop-types';

import Button from '../../Button';
import Dialog from '../Dialog';
import * as S from './style';

const BottomDialog = ({
  buttons,
  title,
  subTitle,
  btnText,
  buttonClick,
  children,
  text1,
  subText1,
  text2,
  subText2,
  text3,
  subText3,
  text4,
  subText4,
  text5,
  subText5,
  text6,
  subText6,
  text7,
  subText7,
  ...rest
}) => {
  return (
    <Dialog {...rest}>
      <S.Container showsVerticalScrollIndicator={false}>
        {title && <S.TitleText>{title}</S.TitleText>}
        <S.TextHeading mt={5}>{text1}</S.TextHeading>
        <S.TextSubHeading>{subText1}</S.TextSubHeading>
        <S.TextHeading mt={5}>{text2}</S.TextHeading>
        <S.TextSubHeading>{subText2}</S.TextSubHeading>
        <S.TextHeading mt={5}>{text3}</S.TextHeading>
        <S.TextSubHeading>{subText3}</S.TextSubHeading>
        <S.TextHeading mt={5}>{text4}</S.TextHeading>
        <S.TextSubHeading>{subText4}</S.TextSubHeading>
        <S.TextHeading mt={5}>{text5}</S.TextHeading>
        <S.TextSubHeading>{subText5}</S.TextSubHeading>
        <S.TextHeading mt={5}>{text6}</S.TextHeading>
        <S.TextSubHeading>{subText6}</S.TextSubHeading>
        <S.TextHeading mt={5}>{text7}</S.TextHeading>
        <S.TextSubHeading>{subText7}</S.TextSubHeading>
        <>{children}</>
        <Button btnText={btnText} click={buttonClick} mt={20} />
      </S.Container>
    </Dialog>
  );
};

BottomDialog.propTypes = {
  children: oneOfType([arrayOf(node), node]),
  buttonClick: func.isRequired,
  title: string,
  subTitle: string,
  btnText: string,
  text1: string,
  subText1: string,
  text2: string,
  subText2: string,
  text3: string,
  subText3: string,
  text4: string,
  subText4: string,
  text5: string,
  subText5: string,
  text6: string,
  subText6: string,
  text7: string,
  subText7: string,
};

BottomDialog.defaultProps = {
  children: null,
};

export default BottomDialog;
