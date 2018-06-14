import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import weather from './weather';
import animationReducer from './AnimationReducer';

export default combineReducers({
  router: routerReducer,
  counter,
  weather,
  animationReducer
});
