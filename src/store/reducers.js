import {combineReducers} from "redux";
import {myPostsReducer} from './MyPosts/reducers';
import {myDialogReducer} from './Dialogs/reducer';
import {usersReducer} from './Users/reducer';
import {authReducer} from './Auth/reducer';
import {appReducer} from './App/reducer';
import { reducer as formReducer } from 'redux-form'

export const reducers = combineReducers({
  app: appReducer,
  posts: myPostsReducer,
  dialogs: myDialogReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer
});