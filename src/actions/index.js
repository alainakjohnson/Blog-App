import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

const ROOT_URL = "https://blog-server-alaina-johnson.herokuapp.com/api";

export function fetchPosts(){
    const request = axios.get(`${ROOT_URL}/posts`);

    return ({
        type: FETCH_POSTS,
        payload: request
    })
}

export function createPost(values){
    const request = axios.post(`${ROOT_URL}/posts`, values);

    return ({
        type: CREATE_POST,
        payload: request
    })
}