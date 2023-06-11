import React, {useEffect, useRef, useState} from "react";
import PostService from "./services/PostsApi";
import {
    Button,
    Card, CardActionArea, CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, IconButton,
    TextField, Typography
} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {toast} from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    const [posts, setPosts] = useState([]);
    console.log(posts)

    useEffect(() => {
        PostService.getPosts().then((data) =>  {
            setPosts(data.data)
        });
    }, []);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handlePost = () => {
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const newPost = {title: titleValue, body: descriptionValue, userId: 1,}
        console.log(newPost)
        PostService.addPost(newPost)
            .then((posts) =>  {
                console.log(posts)
                toast.success("Added!")
            });
        PostService.getPosts().then((data) =>  {
            setPosts(data.data)
        });
        setOpen(false);
    };
    const handleClose = () => {
        setOpen(false);
    }
    const handlePostDelete = (id) => {
        PostService.deletePost(id).then(() => toast.success("Deleted!"));
    }

    const handlePostUpdate = (id) => {
        PostService.editPost(id).then(() => toast.success("Updated!"));
    }

    return (
        <div className="app-container">
            <ToastContainer />
            <h1>CRUD</h1>
            <Button variant="contained" onClick={handleClickOpen}>Add post</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add post</DialogTitle>
                <DialogContent style={{display: "flex", flexDirection: "column", width: "400px"}}>
                    <TextField
                        inputRef={titleRef}
                        className="input__title" id="outlined-basic" label="Title" variant="outlined" style={{marginTop: "20px"}}/>
                    <TextField
                        inputRef={descriptionRef}
                        style={{marginTop: "20px"}}
                        id="outlined-multiline"
                        label="Description"
                        multiline
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePost}>Add post</Button>
                </DialogActions>
            </Dialog>
            <div className="list">
                <h2>Posts list</h2>
                {posts?.map((post) =>
                    <Card className="list__item" key={post.id}>
                        <CardContent className="list__item-content">
                            <Typography gutterBottom variant="h5" component="div">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {post.body}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <IconButton aria-label="Example">
                                <EditIcon/>
                            </IconButton>
                            <IconButton aria-label="Example" onClick={() => handlePostDelete(post.id)}>
                                <DeleteIcon/>
                            </IconButton>
                        </CardContent>
                    </Card>
                )}
            </div>
        </div>
    );
}

export default App;
