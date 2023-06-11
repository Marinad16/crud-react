import React, {useEffect, useState} from "react";
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

function App() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div className="app-container">
            <h1>CRUD</h1>
            <Button variant="contained" onClick={handleClickOpen}>Add post</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add post</DialogTitle>
                <DialogContent style={{display: "flex", flexDirection: "column", width: "400px"}}>
                    <TextField id="outlined-basic" label="Title" variant="outlined" style={{marginTop: "20px"}}/>
                    <TextField
                        style={{marginTop: "20px"}}
                        id="outlined-multiline"
                        label="Description"
                        multiline
                        rows={4}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Add post</Button>
                </DialogActions>
            </Dialog>
            <div className="list">
                <h2>Posts list</h2>
                <Card className="list__item">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            title
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <IconButton aria-label="Example">
                            <EditIcon/>
                        </IconButton>
                        <IconButton aria-label="Example">
                            <DeleteIcon/>
                        </IconButton>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default App;
