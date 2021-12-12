import {combineReducers} from 'redux';

import eth from './ethList/reducer';

// Legacy
import locale from './locale';

export default () =>
  combineReducers({
    eth,

    // Legacy
    locale,
  });
