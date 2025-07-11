import { Box, Button, styled, Typography } from "@mui/material";


export const SigninBtnCoontainer = styled(Box)(({ theme }) => ({
    borderTop: "1px solid #c2bebe",
    borderBottom: "1px solid #c2bebe",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px 20px",
    position:"relative",
    zIndex:998,
    [theme.breakpoints.down('md')]: {
        display:"none"
    },
}))


export const CustomLink = styled("a")(({ theme }) => ({
    color: "#0066c0",
    textDecoration: "none",
    cursor:"pointer"
}))

export const CustomText = styled(Typography)(({ theme }) => ({
    fontSize: '12px',
    fontFamily: "sans-serif"
}))

export const CustomSignInBtn = styled(Button)(({ theme }) => ({
    border: "1px solid #e6a400",
    textTransform: "capitalize",
    backgroundColor: "#ffc52f",
    color: 'black',
    borderRadius: "5px",
    outline: "none",
    padding: "5px 90px",
    fontWeight: "bold",
    fontSize: "12px",
}))

