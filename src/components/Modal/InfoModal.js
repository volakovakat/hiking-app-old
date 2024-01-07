import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import HikingDuration from "../Card/HikingDuration";
import CardMedia from "@mui/material/CardMedia";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import IconButton from '@mui/material/IconButton';
import "./InfoModal.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 345,
    width: 800,
    maxHeight: 700,
    bgcolor: 'background.paper',
    borderRadius: '16px',
    boxShadow: 24,
};

const close = {
    position: 'absolute',
    zIndex: 10000,
    right: 0,
    top: 0,
}

export default ({trip: { ascent, header, image, info, hikeTimeRange, carTimeRange}}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button size="small" onClick={handleOpen}>Info</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IconButton aria-label="close" sx={close} onClick={handleClose}>
                        <CancelRoundedIcon fontSize="small" color="disabled" />
                    </IconButton>
                    <CardMedia
                        sx={{ height: 200, borderRadius: '16px 16px 0 0' }}
                        image={image}
                        title="map"
                    />
                    <div className="modal-content">
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {header}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <HikingDuration hikeTimeRange={hikeTimeRange} carTimeRange={carTimeRange} ascent={ascent}/>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="div">
                        {info}
                    </Typography>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}