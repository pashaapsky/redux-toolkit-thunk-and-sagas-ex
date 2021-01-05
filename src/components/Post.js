import React from 'react';

function Post({post}) {
    return (
        <div>
            <span>{post.title}</span>
            <span>{post.id}</span>
        </div>
    );
}

export default Post;