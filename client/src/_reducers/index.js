import { combineReducers } from "redux";
import user from './user_reducer';

// combineReducer를 이용해 rootReducer에서 하나로 병합
const rootReducer = combineReducers({
  user,
})

export default rootReducer;