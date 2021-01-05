import {CREATE_POST, FETCH_POST} from "./types";

const initialState = {
    posts: [],
    fetchedPosts: []
};

export const postsReducer = (state = initialState, action) => {
    console.log('action catch', action.type);

    switch (action.type) {
        case CREATE_POST:
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            };
        case FETCH_POST:
            return {
                ...state,
                fetchedPosts: action.payload
            };

        default:
            return state
    }
};