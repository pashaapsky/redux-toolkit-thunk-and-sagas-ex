import React from 'react';
import {connect} from 'react-redux';
import Post from "./Post";

function Posts({syncPosts}) {

    console.log('syncPosts', syncPosts);

    return (
        <div>
            <h1>POSTS</h1>

            {syncPosts.map(item => (
                <Post key={item.id} post={item}/>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        syncPosts: state.posts.posts
    };
};

export default connect(mapStateToProps, null)(Posts);