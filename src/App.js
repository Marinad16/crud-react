import React, {useEffect, useRef, useState} from "react";
import PostService from "./services/PostsApi";
import {
    Button
} from "@mui/material";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PostForm from "./components/postForm/PostForm";
import PostList from "./components/postList/PostList";

function App() {
    const initState = {id: "", title: "", body: ""};
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(initState);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        PostService.getPosts().then((data) => {
            setPosts(data.data)
        });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <div className="app-container">
            <ToastContainer/>
            <h1>CRUD</h1>
            <Button variant="contained" onClick={handleClickOpen}>Add post</Button>
            <PostForm setPosts={setPosts} open={open} setOpen={setOpen} editing={editing} setEditing={setEditing} setNewPost={setNewPost} newPost={newPost} initState={initState}/>
            <PostList posts={posts} setOpen={setOpen} setEditing={setEditing} setNewPost={setNewPost} update={setNewPost}/>
        </div>
    );
}

export default App;
