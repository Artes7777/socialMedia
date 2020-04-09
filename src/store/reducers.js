import {combineReducers} from "redux";
import {myPostsReducer} from './MyPosts/reducers';
import {myDialogReducer} from './Dialogs/reducer';
import {usersReducer} from './Users/reducer';

export const reducers = combineReducers({
  posts: myPostsReducer,
  dialogs: myDialogReducer,
  users: usersReducer
});