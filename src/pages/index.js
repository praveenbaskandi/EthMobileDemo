import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

import BottomDialog from '../component/Dialogs/BottomDialog';
import {getEthListApi} from '../redux/ethList/action';
import Header from '../component/Heading';
import Loader from '../component/Loader';
import useSelect from './selector';
import * as S from './style';

const HomePage = () => {
  const {translations, ethList, isLoading} = useSelect();
  const [showBottomDialog, updateShowBottomDialog] = useState(false);
  const [selectData, setSelectData] = useState();
  const dispatch = useDispatch();

  // fetching data from api
  useEffect(() => {
    dispatch(getEthListApi());
  }, [dispatch]);

  const hideDialog = item => {
    setSelectData(item);
    updateShowBottomDialog(true);
  };

  const renderItem = (item, index) => (
    <S.BoxRow>
      <S.TextHeading>{index + 1}</S.TextHeading>
      <S.TextSubHeading>{item?.id}</S.TextSubHeading>
      <S.ShowMore onPress={() => hideDialog(item)}>
        <S.ButtonText>{translations.showMore}</S.ButtonText>
      </S.ShowMore>
    </S.BoxRow>
  );

  return (
    <S.HeadContainer>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Header heading={translations.ethereumDemo} />
      <S.ListView
        data={ethList}
        renderItem={({item, index}) => renderItem(item, index)}
        keyExtractor={item => item.id}
      />
      {/* loading in case api data fetch*/}
      {isLoading ? (
        <S.LoaderView>
          <Loader size={50} />
        </S.LoaderView>
      ) : null}
      <BottomDialog
        isVisible={showBottomDialog}
        onBackdropPress={() => updateShowBottomDialog(false)}
        title={`${translations.dots}${selectData?.id?.slice(-6)}`}
        subTitle="Sub Heading"
        btnText="Close"
        text1={translations.id}
        subText1={selectData?.id}
        text2={translations.to}
        subText2={selectData?.to}
        text3={translations.from}
        subText3={selectData?.from}
        text4={translations.blockNumber}
        subText4={selectData?.blockNumber}
        text5={translations.blockTime}
        subText5={selectData?.blockTimestamp}
        text6={translations.gasPrice}
        subText6={selectData?.gasPrice}
        text7={translations.gasUsed}
        subText7={selectData?.gasUsed}
        buttonClick={() => updateShowBottomDialog(false)}
      />
    </S.HeadContainer>
  );
};

export default HomePage;
