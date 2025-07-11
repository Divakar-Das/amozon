import { Box, Button, Card, Rating, Stack, styled, Typography } from "@mui/material";

export const ResutContainer = styled(Box)(({ theme }) => ({
    padding: "20px 20px 0 20px",
    [theme.breakpoints.down('md')]: {
        display: "none"
    }
}))

export const FilterContainer = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block",
        textAlign: "end",
        padding: "10px 10px 15px 15px"
    }
}))

export const ResutText = styled(Typography)(({ theme }) => ({
    letterSpacing: "1px",
    fontWeight: "bold",
    fontSize: "1.2rem"
}))

export const ProductCardContainer = styled(Stack)(({ theme }) => ({
    width: "100%",
    padding: "0 0 20px 20px",
    [theme.breakpoints.down('sm')]: {
        padding: "0 10px 20px 10px"
    },
    [theme.breakpoints.down('md')]: {
        padding: "0 5px 20px 5px"
    }
}))


export const CustomProductCard = styled(Card)(({ theme }) => ({
    display: "flex",
    width: "85%",
    // margin:"1px 0",
    borderBottom:"1px solid #c5c5c559",
    padding: "10px 20px 0px 0px",
    [theme.breakpoints.down('sm')]: {
        padding: "0px 5px",
        width: "100%"
    },
    [theme.breakpoints.down('md')]: {
        padding: "0px 0px",
        width: "98%",
        margin: "0 auto",
    }
}))

export const CustomProductImage = styled(Box)(({ theme }) => ({
    width: "240px",
    background: "#f7f7f7",
    overflow: "hidden",
    height: "180px",
    display: "flex",
    alignItems: "start",
    justifyContent: "center",
    padding: "0 15px",
    [theme.breakpoints.down('sm')]: {
        width: "300px",
        padding: "0px",
    },
    [theme.breakpoints.down('md')]: {
        width: "150px",
        background: "white",
        padding: "0px",
    }
}))


export const CustomImageStyle = styled("img")(({ theme }) => ({
    display: "block",
    margin: "0px auto",
    objectFit: "contain",
    width: "95%",
    cursor:"pointer",
    height:"100%",
    [theme.breakpoints.down('sm')]: {
        width: "100%",
    }
}))

export const ProductDetails = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "start",
    flexDirection: "column",
    padding: "10px",
    gap: "10px",
    flexWrap: "wrap",
    width: "75%",
    justifyContent: "flex-start",
    [theme.breakpoints.down('md')]: {
        width: "65%",
        gap: "2px",
        padding: "0",
        paddingLeft: "5px",
        paddingRight: "20px",
        display: "inline",
        paddingBottom: "20px"
    }
}))

export const ProductTitle = styled(Typography)(({ theme }) => ({
    fontSize: "16px",
    width: "90%",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    '&:hover': {
        color: "orange",
        cursor: "pointer"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "14px",
    },
}))

export const ProductRating = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    '&:hover':{
        cursor:"pointer"
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: ".7rem"
    }
}))

export const SmallRating = styled(Rating)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        '& .MuiRating-icon': {
            fontSize: '1.1rem',
        },
    }
}))

export const ProductPrice = styled(Stack)(({ theme }) => ({
    width: "100%",
    gap: "8px",
    alignItems: "start"
}))

export const ProductPrice1 = styled(Typography)(({ theme }) => ({
    fontSize: "1.8rem",
    margin: "0 5px",
    [theme.breakpoints.down('sm')]: {
        fontSize: "1.2rem",
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: "1rem",
    }
}))

export const ProductMrpPrice = styled(Typography)(({ theme }) => ({

    fontSize: ".9rem",
    color:"grey",
    [theme.breakpoints.down('sm')]: {
        fontSize: ".8rem",

    }
}))

export const DiscountDetail = styled(Typography)(({ theme }) => ({
    fontSize: "1.1rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: ".8rem",
    },
    [theme.breakpoints.down('md')]: {
        fontSize: ".8rem"
    }
}))

export const ProductPrice2 = styled(Typography)(({ theme }) => ({
    background: "lightgreen",
    padding: "2px 8px",
    fontSize: ".9rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: ".7rem",
    }
}))

export const BuyButton = styled(Button)(({ theme }) => ({
    borderRadius: "40px",
    background: "orange",
    color: "black",
    fontSize: ".8rem",
    fontFamily:"Rubik",
    fontWeight:"400",
    padding: "5px 10px",
    textTransform: "capitalize",
    [theme.breakpoints.down('sm')]: {
        padding: "3px 5px",
        fontSize: ".6rem"
    }
}))

export const OutOfStackButton = styled(Button)(({ theme }) => ({
    borderRadius: "40px",
    borderColor: "black",
    background: "transparent",
    color: "black",
    fontSize: ".8rem",
    fontFamily:"Rubik",
    fontWeight:"400",
    padding: "5px 10px",
    textTransform: "capitalize",
    [theme.breakpoints.down('sm')]: {
        padding: "3px 5px",
        fontSize: ".6rem"
    }
}))


export const RatingStatus = styled(Typography)(({ theme }) => ({
    color: "#007185",
    [theme.breakpoints.down('sm')]: {
        fontSize: ".8rem"
    }
}))

export const PeopleStatus = styled(Typography)(({ theme }) => ({
    color: "#999",
    fontSize: ".9rem",
    [theme.breakpoints.down('sm')]: {
        fontSize: ".8rem"
    }
}))

export const MobileViewPrice = styled(Stack)(({ theme }) => ({
    flexDirection: "column",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column-reverse",
    }
}))


export const PriceForMobile = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    width: "17rem",
    flexWrap: "wrap",
    gap: "3px",
    [theme.breakpoints.down('md')]: {
        width: "11rem",
    }
}))



export const RateSymbol = styled("sup")(({ theme }) => ({
    fontSize:".9rem",
    [theme.breakpoints.down('md')]: {
        fontSize:".7rem",
    }
}))

