import React, {useRef} from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField} from "@mui/material";
import PostService from "../../services/PostsApi";
import {toast} from "react-toastify";

const PostForm = ({setPosts, open, setOpen, editing, setEditing, setNewPost, newPost, initState}) => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const handlePost = () => {
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        const newPost = {title: titleValue, body: descriptionValue, userId: 1,}
        PostService.addPost(newPost)
            .then(() => {
                toast.success("Added!")
            });
        PostService.getPosts().then((data) => {
            setPosts(data.data)
        });
        setOpen(false);
    };

    const handleClose = () => {
        setOpen(false);
        setEditing(false);
        setNewPost(initState)
    }
    const handlePostUpdate = () => {
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        setNewPost({id: newPost.id, title: titleValue, body: descriptionValue, userId: 1,})
        PostService.editPost(newPost.id, newPost).then(() => {
            toast.success("Updated!")
            setNewPost(initState)
        }).catch(() => toast.error("Error!"));
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{!editing ? "Add post" : "Edit post"}</DialogTitle>
            <DialogContent style={{display: "flex", flexDirection: "column", width: "400px"}}>
                <TextField
                    defaultValue={newPost.title}
                    inputRef={titleRef}
                    className="input__title" id="outlined-basic" label="Title" variant="outlined"
                    style={{marginTop: "20px"}}/>
                <TextField
                    defaultValue={newPost?.body}
                    inputRef={descriptionRef}
                    style={{marginTop: "20px"}}
                    id="outlined-multiline"
                    label="Description"
                    multiline
                    rows={4}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={editing ? handlePostUpdate : handlePost}>{!editing ? "Add post" : "Edit post"}</Button>
                {editing && (
                    <Button onClick={handleClose} >
                        Cancel
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}

export default PostForm;