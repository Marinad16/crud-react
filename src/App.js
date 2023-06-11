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
    const [open, setOpen] = useState(false);
    const [posts, setPosts] = useState([]);

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
            <PostForm setPosts={setPosts} open={open} setOpen={setOpen}/>
            <PostList posts={posts}/>
        </div>
    );
}

export default App;
