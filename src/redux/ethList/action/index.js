import {getServerSideData} from '../../../requestGraphApi';
import {errorHandler} from '../../helpers';
import * as types from './types';

const getEthListRequest = () => ({
  type: types.GET_ETH_LIST_REQUEST,
});

const getEthListSuccess = payload => ({
  type: types.GET_ETH_LIST_SUCCESS,
  payload,
});

const getEthListFailure = payload => ({
  type: types.GET_ETH_LIST_FAILURE,
  payload,
});

export const getEthListApi = () => async (dispatch, getState) => {
  const {errors} = getState().locale.translations.data;
  dispatch(getEthListRequest());
  try {
    const ethList = await getServerSideData();
    dispatch(getEthListSuccess(ethList));
  } catch (error) {
    errorHandler({onFailure: getEthListFailure, error, errors, dispatch});
  }
};
