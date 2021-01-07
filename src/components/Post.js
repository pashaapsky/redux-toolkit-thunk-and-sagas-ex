import React from 'react';

function Post({item}) {
    return (
        <div className="d-flex flex-column mb-3 mr-1 border border-primary" style={{width: "250px"}}>
            <p className="m-0"><strong>ID: </strong>{item.id}</p>
            <p className="m-0"><strong>TITLE: </strong>{item.title}</p>
            <p className="m-0"><strong>BODY: </strong>{item.body}</p>
            <p className="m-0"><strong>AUTHOR: </strong>{item.author}</p>
        </div>
    );
}

export default Post;