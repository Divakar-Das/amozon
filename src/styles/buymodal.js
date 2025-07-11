import { Box, Button, styled, TextField, Typography } from "@mui/material";

export const ModalInnerBox = styled(Box)(({ theme }) => ({
    position: "absolute",
    transform: "translate(-50%,-50%)",
    width: 450,
    overflow: "auto",
    maxHeight: "80%",
    background: "white",
    border: "none",
    borderRadius: '10px',
    boxShadow: 24,
    padding: "20px",
    margin: "0 auto",
    [theme.breakpoints.down('sm')]: {
        maxHeight: '70%',
        width: "85%"
    },
}))



export const CustomTextfield = styled(TextField)(({ theme }) => ({
    '& .MuiFormHelperText-root': {
        color: 'red',
    },
    '& label.Mui-focused': {
        color: 'black',
    },
    '& .MuiOutlinedInput-root': {
        '&.Mui-focused fieldset': {
            borderColor: 'black',
        },
    }, '& .MuiOutlinedInput-root.Mui-error': {
        '&.Mui-focused fieldset': {
            borderColor: "red",
        },
    },
    '& label.Mui-error.Mui-focused': {
        color: "red",
    },
}));


export const DebitCardBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "20px"
}))



export const PaymentButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    fontWeight: "bold",
    fontFamily: "sans-serif",
    background: "#fcdd3d",
    color: "black",
    margin: "10px 0 5px 0"
}))


export const SucessButton = styled(Button)(({ theme }) => ({
    fontWeight: "bold",
    background: "#0f1111",
    borderRadius: "5px",
    fontFamily: "sans-serif",
    fontSize: ".8rem",
    padding: "6px 16px",
    [theme.breakpoints.down('md')]: {
        width: "55%",
        fontSize: ".7rem"
    },
}))


export const SuccessText = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    fontFamily: "sans-serif",
    margin: "15px auto 16px auto",
    [theme.breakpoints.down('md')]: {
        fontSize: ".8rem"
    },
}))

export const SuccessContainer = styled(Box)(({ theme }) => ({
    margin: "0 auto",
    textAlign: "center",
    height: "260px",
    [theme.breakpoints.down('md')]: {
        height: "100%",
        gap: "20px"
    },
}))



