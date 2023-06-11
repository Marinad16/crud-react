import React from "react";
import PostCard from "../postCard/PostCard";

const PostList = ({posts}) => {

    return (
        <div className="list">
            <h2>Posts list</h2>
            {posts?.map((post) =>
                <PostCard post={post} key={post.id}/>
            )}
        </div>
    )
}

export default PostList;