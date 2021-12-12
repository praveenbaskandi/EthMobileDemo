import styled from 'styled-components/native';

import {Title} from '../component/Text';
import {Colors} from '../utils/Colors';

export const HeadContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${Colors.pBackColor};
`;

export const ListView = styled.FlatList`
  margin-top: 20px;
`;

export const Container = styled.View`
  margin-horizontal: 30px;
  flex-direction: row;
  padding-vertical: 10px;
`;

export const ContainerText = styled.View`
  flex: 1;
`;

export const CardImage = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  margin-right: 10px;
  background-color: ${Colors.blure};
`;

export const Divider = styled.View`
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Colors.pLightBlue};
`;

export const TextHeading = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin-top: ${({mt = 0}) => mt}px;
  color: ${Colors.pHeadingBlack};
`;

export const TextSubHeading = styled(Title)`
  font-size: 14px;
  line-height: 17px;
  text-align: left;
  margin-left: 10px;
  margin-right: 120px;
  color: ${Colors.pSubHeading};
`;

export const LoaderView = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.pBackOpacity};
`;

export const BoxRow = styled.View`
  margin-horizontal: 20px;
  flex-direction: row;
  border-width: 1px;
  border-radius: 10px;
  margin-top: 5px;
  align-items: center;
  padding-horizontal: 10px;
  padding-vertical: 10px;
  border-color: ${Colors.pLightBlue};
`;

export const ShowMore = styled.TouchableOpacity`
  width: 100px;
  height: 30px;
  border-width: 1px;
  border-color: ${Colors.pLightBlue};
  border-radius: 50px;
  position: absolute;
  right: 10px;
  top: 15px;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.white};
`;

export const ButtonText = styled(Title)`
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: ${Colors.darkBlack};
`;
