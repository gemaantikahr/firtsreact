import React from 'react';

const Post = (props) =>{
    return(
        <center>
            <div className="container">
                <div className="card">
                    <img className="tubmail" src="http://placeimg.com/640/480/nature" alt=""/><h4>{props.data.title}</h4><p>{props.data.body}</p>
                    <button className="btn-delete" onClick={() => props.remove(props.data.id)}>Delete</button>
                </div>
            </div>
        </center>
    )
}

export default Post;