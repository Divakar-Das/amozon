import { Box, Button, Card, Rating, Stack, styled, Typography } from "@mui/material";
import { Link } from "react-router";

export const ViewProductContainer = styled(Box)(({ theme }) => ({
    padding: "5px 20px 20px 20px",
    [theme.breakpoints.down('md')]: {
        padding: "5px 10px",
        margin: "0 auto",
    }
}))

export const BackToButton = styled(Box)(({ theme }) => ({
    display: "block",
    padding: "5px 10px 15px 0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start"
}))

export const CustomLink = styled(Link)(({ theme }) => ({
    fontSize: "12px",
    textDecoration: "none",
    color: "#565959",
    fontFamily: "Rubik",
    '&:hover': {
        textDecoration: "underline"
    }
}))

export const CustomMainContent = styled(Stack)(({ theme }) => ({
    height: "auto",
    padding: "2px",
    gap: "20px",
    flexDirection: "row",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
    }
}))

export const ImageContainer = styled(Box)(({ theme }) => ({
    width: "33.5%",
    marginRight: "90px",
    height: "fit-content",
    display: 'flex',
    justifyContent: "flex-start",
    alignItems: "flex-start",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        height:"100%",
        margin: "0 auto"
    }
}))

export const CustomImage = styled("img")(({ theme }) => ({
    border: "1px solid rgba(0, 0, 0, 0.12)",
    objectFit: "contain",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // padding: "5px 5px",
    height: '450px',
    borderRadius: "6px",
    cursor: "zoom-in",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        border: "none",
        height:"450px",
        padding: "30px 5px"
    }
}))


export const ProductDetailContainer = styled(Stack)(({ theme }) => ({
    width: "530px",
    paddingLeft: "30px",
    gap: "5px 0",
    [theme.breakpoints.down('md')]: {
        width: "100%",
        padding: "5px"
    }
}))

export const ProductDetailContainer2 = styled(Box)(({ theme }) => ({
    width: "235px",
    [theme.breakpoints.down('md')]: {
        width: "100%",
    }
}))

export const ProductTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1.2rem",
    lineHeight: "24px",
    [theme.breakpoints.down('md')]: {
        fontSize: "1rem",
        lineHeight: "20px",
    }
}))

export const RatingContainer = styled(Stack)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        gap: "10px"
    }
}))

export const FeatureBox = styled(Stack)(({ theme }) => ({
    width: "100%",
    justifyContent:"center",
    alignItems: "center",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const ButtonforMobile = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    textTransform: 'capitalize',
    color: "black",
    width: "40%",
    padding: "10px 0px",
    background: "#ffa41c",
    display: "none",
    margin: "10px 0",
    fontFamily: "Rubik",
    fontWeight: "400",
    [theme.breakpoints.down('md')]: {
        display: "block"
    }
}))

export const BuyButton = styled(Button)(({ theme }) => ({
    borderRadius: "20px",
    textTransform: 'capitalize',
    color: "black",
    background: "#ffa41c",
    fontFamily: "Rubik",
    fontWeight: "400",
    display: "block",
    [theme.breakpoints.down('md')]: {
        display: "none",
    }
}))


export const OutOfStack = styled(Button)(({ theme }) => ({
    borderRadius: "40px",
    borderColor: "black",
    background: "transparent",
    color: "black",
    width: "250px",
    fontSize: ".8rem",
    padding: "10px 0",
    textTransform: "capitalize",
    display: "none",
    [theme.breakpoints.down('sm')]: {
        padding: "7px 4px",
        width: "40%",
        fontSize: ".9rem",
        display: "block",
    }
}))


