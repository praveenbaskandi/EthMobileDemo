import styled from 'styled-components/native';
import {scale} from 'react-native-size-matters';

import {Title} from '../../Text';
import {Colors} from '../../../utils/Colors';

export const Container = styled.ScrollView`
  width: 100%;
  background-color: ${Colors.white};
  padding-bottom: ${scale(10)};
`;

export const TitleText = styled(Title)`
  font-size: ${scale(20)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(20)};
`;

export const SubText = styled(Title)`
  font-size: ${scale(10)};
  color: ${Colors.glBlack};
  text-align: center;
  line-height: ${scale(15)};
`;

export const TextHeading = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin-top: ${({mt = 0}) => mt}px;
  color: ${Colors.pHeading};
`;

export const TextSubHeading = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  color: ${Colors.pSubHeading};
`;
