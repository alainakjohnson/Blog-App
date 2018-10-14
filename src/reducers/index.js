//reducer index
import PostsReducer from "./reducer_posts";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    posts: PostsReducer
});

export default rootReducer;
