import React from "react";
import {Card, CardContent, IconButton, Typography} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PostService from "../../services/PostsApi";
import {toast} from "react-toastify";

const PostCard = ({post}) => {
    const handlePostDelete = (id) => {
        PostService.deletePost(id).then(() => toast.success("Deleted!"));
    }

    const handlePostUpdate = (id) => {
        PostService.editPost(id).then(() => toast.success("Updated!")).catch(() => toast.error("Error!"));
    }
    return (
        <Card className="list__item">
            <CardContent className="list__item-content">
                <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {post.body}
                </Typography>
            </CardContent>
            <CardContent>
                <IconButton aria-label="Example" onClick={() => handlePostUpdate(post.id)}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="Example" onClick={() => handlePostDelete(post.id)}>
                    <DeleteIcon/>
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default PostCard;