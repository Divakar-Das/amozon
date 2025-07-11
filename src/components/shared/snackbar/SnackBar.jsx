import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeMessage } from '../../store/snackSlice';

const SnackBar = () => {
    const dispatch = useDispatch();
    const { open, message } = useSelector((state) => state.message);
    
    const handleClose = () => {
        dispatch(closeMessage());
    };
    return (
        <>
            <Snackbar open={open} anchorOrigin={{ horizontal: "right", vertical: "bottom" }} autoHideDuration={5000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    variant="filled"
                    severity='none'
                    sx={{ width: '100%', background: "black", fontFamily: "Rubik", color: "white" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    )
}

export default SnackBar