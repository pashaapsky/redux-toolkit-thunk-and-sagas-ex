import {CREATE_POST, FETCH_POST, HIDE_LOADER, REQUEST_POSTS, SHOW_LOADER} from "./types";

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    }
}

export function fetchPosts(post) {
    // return async dispatch => {
    //     dispatch(showLoader());
    //
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    //     const json = await response.json();
    //
    //     dispatch({type: FETCH_POST, payload: json});
    //
    //     dispatch(hideLoader());
    // }

    return {
        type: REQUEST_POSTS
    }
}
