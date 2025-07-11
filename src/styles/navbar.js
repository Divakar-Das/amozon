import { Link, Stack, styled, Tab, Tabs, Tooltip } from "@mui/material";

export const TabsContainer = styled(Tabs)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))

export const CustomLocationMobile = styled(Stack)(({ theme }) => ({
    padding: "15px 17px",
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: 'flex',
    },
}))


export const CustomTab = styled(Tab)(({ theme }) => ({
    color: "white",
    fontSize: "14px",
    fontFamily: "PT Sans",
    textTransform: "capitalize",
    padding:"5px 10px",
    border: "2px solid transparent",
    '&:hover': {
        border: "2px solid white"
    }
}))

export const CustomLink = styled(Link)
    (({ theme }) => ({
        color: "black",
        textTransform: "capitalize",
        fontSize: ".9rem",
        padding: "3px 10px",
        letterSpacing: ".1px",
        background: "white",
        textDecoration: "none",
        // fontFamily: "PT Sans",
        '&:hover': {
        textDecoration: "underline",
        color: "orange",
        cursor: "pointer",
    }
    }))

