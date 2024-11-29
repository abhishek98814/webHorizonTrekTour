import { combineReducers } from 'redux';
import categoryReducer from './categorySlice';
import overviewReducer from './overviewSlice';

const rootReducer = combineReducers({
  category: categoryReducer,
  overview: overviewReducer,
});

export default rootReducer;
