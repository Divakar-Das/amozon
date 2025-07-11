import { Button, styled } from "@mui/material"
import { errorImg } from "../../constants/constantImage"
import { alignContent, alignItems, Box, display, flexDirection, height, justifyContent, margin, style, width } from "@mui/system"
import { useNavigate } from "react-router"

const ErrorContainer = styled(Box)(({ theme }) => ({
    background: "black",
    position: "fixed",
    width: "100vw",
    top: 0,
    height: "100vh",
    zIndex: 99999,
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        display: "flex",
        alignItems: "center",
        paddingTop:"20%",
        flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
        display: "flex",
        alignItems: "center",
        paddingTop:"40%",
        flexDirection: "column",
    }
}))

const CustomImg = styled("img")(({ theme }) => ({
    width: "50%",
    height: "50%",
    [theme.breakpoints.down("md")]: {
        width: "100%",
        height: "fit-content"
    }
}))


const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    margin:"20px 0",
    border: "3px solid steelblue",
    boxShadow: "0px 1px 10px 2px steelblue",
    padding: "10px 40px",
    fontSize: "20px",
    [theme.breakpoints.down("md")]: {
        padding: "5px 30px",
        fontSize: ".8rem",
    }
}))


const Error = () => {
    const navigate = useNavigate()
    return (
        <>
            <ErrorContainer>
                <Box>
                    <CustomImg src={errorImg} />
                </Box>
                <CustomButton variant="outlined" onClick={() => navigate("/")}  >Go To Home</CustomButton>
            </ErrorContainer>
        </>
    )
}

export default Error
