import React, {Fragment} from 'react';
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";

function FetchedPosts() {
    const dispatch = useDispatch();

    const posts = useSelector((state) => {
       return state.posts.fetchedPosts
    });

    const loading = useSelector((state) => {
        return state.app.loading
    });

    if (loading) {
        return <div>LOADING!!!...</div>
    }

    return (
        <div>
            <h1>Fetches POSTS</h1>

            <button onClick={
                () => dispatch(fetchPosts())
            }>Загрузить</button>

            {posts.map(item => (
                <Post key={item.id} post={item}/>
            ))}
        </div>
    );
}

export default FetchedPosts;