import { Box, Card, styled, Typography } from "@mui/material";

export const ProductHeading = styled(Typography)(({ theme }) => ({
    fontFamily: "Roboto",
    fontWeight: '500',
    textAlign: "center",
    margin: "37px auto",
    fontSize: "22px",
}))

export const ProductTitle = styled(Typography)(({ theme }) => ({
    textAlign: "center",
    padding: "8px 0",
    fontSize: ".9rem"
}))

export const CategoryContainer = styled(Box)(({ theme }) => ({
    marginTop: "50px",
    width: "100%",
    height: "auto",
    padding: '0 15px',
    display: "flex",
    flexWrap: "wrap",
    gap: "33.5px",
    alignItems: "center",
    justifyContent: "flex-start"
    , [theme.breakpoints.down('md')]: {
        padding: '0 2px',
        margin:"0 5%"
    },
}))


export const ProductCard = styled(Card)(({ theme }) => ({
    width: '12rem',
    height: '200px',
    cursor: 'pointer',
    background: 'white',
    borderRadius: '10px',
    boxShadow: 'rgba(14, 10, 10, 0.2) 0px 2px 8px 0px',
    overflow: 'hidden',
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
        width: '10rem',
        height: '12rem',
    },
}))

export const ProductImage = styled("img")(({ theme }) => ({
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    display: 'block',
    borderRadius: 'inherit',

}))

export const ProductBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: "25px",
}))

