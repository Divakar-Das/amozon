import { Box, styled, Typography } from "@mui/material";

export const TableContent = styled(Box)(({ theme }) => ({
    width: "500px",
    marginBottom:"20px",
    [theme.breakpoints.down('md')]: {
        width: "100%"
    }
}))

export const TableTitle = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    letterSpacing: "1px",
    fontSize: "1.3rem",
    [theme.breakpoints.down('md')]: {
        fontSize: "1rem",
    }
}))

export const GeneralDetail = styled(Typography)(({ theme }) => ({
    padding: "11px 10px",
    fontSize: "14px",
    fontFamily:"Rubik",
     [theme.breakpoints.down('md')]: {
        flexBasis: "40%",
    }
}))

export const Specifications = styled(Box)(({ theme }) => ({
    width:"105%",
     [theme.breakpoints.down('md')]: {
    width:"90%"
    }
}))