import {useSelector} from 'react-redux';

const useSelect = () => {
  const {screen} = useSelector(({locale}) => locale.translations.data);

  const {isLoading, ethList} = useSelector(({eth: E}) => E);

  return {
    isLoading,
    ethList,
    translations: {
      ...screen,
    },
  };
};

export default useSelect;
