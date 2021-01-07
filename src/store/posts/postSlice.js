import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
            {
                id: 1,
                title: "title",
                body: "body",
                author: 3
            }
        ],
        asyncPosts: [],
        errors: '',
        loading: false
    },
    reducers: {
        addPost: (state, action) => {
            state.posts = [...state.posts, action.payload]
        },
        removePost: (state, action) => {
            state.posts = state.posts.filter(item => item.id !== action.payload)
        },
        loadPosts: (state, action) => {
            state.asyncPosts = [...state.asyncPosts, ...action.payload]
        },
        setError: (state, action) => {
            state.errors = action.payload
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        sagaFetchingPost: (state) => {

        }
    }
});

export const {addPost, removePost, sagaFetchingPost, loadPosts, setError, setLoading} = postsSlice.actions;

// async actions
export const FetchPosts = () => async dispatch => {
    try {
        dispatch(setLoading(true));

        await new Promise((resolve, reject) => {
            setTimeout(function(){
                resolve();
            }, 2000);
        });

        const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
        dispatch(loadPosts(res.data));
        dispatch(setLoading(false));
    } catch (e) {
        dispatch(setError(e.message));
        dispatch(setLoading(false));
    }
};



export default postsSlice.reducer;