import React from "react";
import PostCard from "../postCard/PostCard";

const PostList = ({posts, setOpen, setEditing, update}) => {

    return (
        <div className="list">
            <h2>Posts list</h2>
            {posts?.map((post) =>
                <PostCard post={post} key={post.id} setOpen={setOpen} setEditing={setEditing} update={update}/>
            )}
        </div>
    )
}

export default PostList;