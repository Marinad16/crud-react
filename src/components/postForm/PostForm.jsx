import React, {useRef} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import PostService from "../../services/PostsApi";
import {toast} from "react-toastify";

const PostForm = ({setPosts, open, setOpen}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const handlePost = () => {
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const newPost = {title: titleValue, body: descriptionValue, userId: 1,}
        PostService.addPost(newPost)
            .then((posts) => {
                toast.success("Added!")
            });
        PostService.getPosts().then((data) => {
            setPosts(data.data)
        });
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add post</DialogTitle>
            <DialogContent style={{display: "flex", flexDirection: "column", width: "400px"}}>
                <TextField
                    inputRef={titleRef}
                    className="input__title" id="outlined-basic" label="Title" variant="outlined"
                    style={{marginTop: "20px"}}/>
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
    )
}

export default PostForm;