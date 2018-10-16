//reducer index
import PostsReducer from "./reducer_posts";
import { reducer as formReducer } from 'redux-form';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    posts: PostsReducer,
    form: formReducer
});

export default rootReducer;
