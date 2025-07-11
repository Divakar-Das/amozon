import { Box, Card, Grid, styled, Typography } from "@mui/material";

export const CustomBanner = styled("img")(({ theme }) => ({
    width: "100%",
}))

export const CustomLanding = styled(Box)(({ theme }) => ({
    background: "#eaeded",
    height: "auto",
    padding: "0 4px 0px 4px",
    position: "relative",
    marginBottom: "-200px",
    zIndex: 88,
}))

export const CustomGridTable = styled(Grid)(({ theme }) => ({
    top: "-17.89rem",
    padding: "0 18px 0px 18px",
    position: "relative",
    zIndex: 999,
    [theme.breakpoints.down('lg')]: {
        top: "-12.89rem",
    },
    [theme.breakpoints.down('md')]: {
        background: "blue"
    },
    [theme.breakpoints.down('sm')]: {
        background: "green"
    }
}))

export const CustomCard = styled(Card)(({ theme }) => ({
    background: "white",
    borderRadius: 3,
    display: "flex",
    boxShadow: "none",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    cursor: "pointer",
    height: "179px",
}))

export const CustomImageList = styled("img")(({ theme }) => ({
    objectFit: "contain"
}))

export const CustomImageTitle = styled(Typography)(({ theme }) => ({
    padding: "5px",
    color: "black",
    fontWeight: "500",
    fontSize: "21px",
    fontFamily: "Roboto",
    cursor: "pointer"
}))

// ---------Mobile--------

export const CustomImageList2 = styled("img")(({ theme }) => ({
    width: "100px",
    height: "100px",
    objectFit: "contain",
    cursor: "pointer"
}))

export const CustomBoxMobile = styled(Box)(({ theme }) => ({
    background: "white",
    height: "auto",
    width: '100%'
}))
export const CustomTextMobile = styled(Typography)(({ theme }) => ({
    fontFamily: 'sans-serif',
    fontWeight: "bolder",
    fontSize: "1rem",
    padding: "5px 15px",
    background: "#eaeded",
    width: '100%',
    marginTop: "-4px"
}))

export const CustomCardMobile = styled(Box)(({ theme }) => ({
    borderRadius: '0',
    boxShadow: "none",
    width: "120px",
    background: "#f5f5f5",
    margin: "5px auto"
}))

export const CustomImageTitleMobile = styled(Typography)(({ theme }) => ({
    padding: "10px",
    color: "black",
    fontWeight: "bolder",
    fontSize: "21px",
    fontFamily: "Roboto",
    [theme.breakpoints.down('md')]: {
        fontSize: "15px",
        fontWeight: 450
    }
}))
