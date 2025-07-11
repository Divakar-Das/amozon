import { Box } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
const Loading = () => {
    const isLoading = useSelector((state) => state.loading.isLoading);
    return (
        <>
            {isLoading &&
                <Box
                    sx={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        bgcolor: 'rgba(255, 255, 255, 0)',
                        display: 'flex',
                        color: "blue",
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999990,
                    }}>
                    <CircularProgress />
                </Box>
            }
        </>
    )
}

export default Loading
