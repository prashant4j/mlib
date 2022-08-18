import React, { useEffect, useState } from "react";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AbcIcon from '@mui/icons-material/Abc';
import {
    img_500,
    unavailable,
    unavailableLandscape,
} from "../../config"
import axios from 'axios';
const style = {
    position: 'absolute',
    top: '70%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function ContentModal({ children, media_type, id }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    // const classes = style();

    const [content, setContent] = useState();
    const [video, setVideo] = useState();

    let fetchData = async () => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=658a147237a83583b2f1a3512e81784d&language=en-US`)
        setContent(data);
    }
    const fetchVideo = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=658a147237a83583b2f1a3512e81784d&language=en-US`
        );

        setVideo(data.results[0]?.key);
    };

    useEffect(() => {
        fetchData();
        fetchVideo();
        // eslint-disable-next-line
    }, []);
    
    // let x = content.overview;
    return (
        <div>
            <div
                className="media"
                style={{ cursor: "pointer" }}
                color="inherit"
                onClick={handleOpen}
            >
                {children}
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>

                            {/* {x} */}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
