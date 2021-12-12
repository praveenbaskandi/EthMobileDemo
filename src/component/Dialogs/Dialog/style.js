import {ScaledSheet} from 'react-native-size-matters';

export default ScaledSheet.create({
  contentWrapper: {
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
  },
  containerView: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: '15@ms',
    borderTopRightRadius: '15@ms',
    justifyContent: 'center',
    padding: '20@ms',
    maxWidth: '400@ms',
  },
});

export const getDialogStyle = centerInScreen => ({
  justifyContent: centerInScreen ? 'center' : 'flex-end',
  margin: 0,
  paddingTop: 0,
});
