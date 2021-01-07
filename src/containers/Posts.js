import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import {FetchPosts, sagaFetchingPost} from "../store/posts/postSlice";
import Error from "../components/Error";
import Spinner from "react-bootstrap/Spinner";
import Lottie from 'react-lottie';
import animationData from '../web-development.json'


function Posts(props) {
    const posts = useSelector(state => state.posts.posts);
    const asyncPosts = useSelector(state => state.posts.asyncPosts);
    const errors = useSelector(state => state.posts.errors);
    const loading = useSelector(state => state.posts.loading);

    const dispatch = useDispatch();

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="">
            {errors && <Error message={errors} type="alert"/>}

            <Lottie options={defaultOptions}
                    height={150}
                    width={150}
            />

            <section className="posts d-flex flex-column">
                <h3>Posts</h3>

                <div className="posts-items d-flex flex-row" style={{display: "flex"}}>
                    {posts.length ? (
                        posts.map(item => (
                            <Post key={item.id} item={item}/>
                        ))
                    ) : <div>Not Posts yet</div>}
                </div>

                <PostForm/>
            </section>

            <section className="asyncPosts">
                <h3>AsyncPosts</h3>

                <div className="posts-items">
                    {loading && <Spinner animation="border" variant="primary"/>}

                    {asyncPosts.length ? (
                        asyncPosts.map(item => (
                            <Post key={item.id} item={item}/>
                        ))
                    ) : (
                        <button onClick={() => dispatch(sagaFetchingPost())}>Load Posts</button>
                    )}
                </div>
            </section>
        </div>
    );
}

export default Posts;