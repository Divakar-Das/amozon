import { AppBar, Autocomplete, Badge, Box, Button, Card, Container, Drawer, IconButton, MenuItem, Select, Stack, styled, TextField, Typography } from "@mui/material";
import { Link } from "react-router";

export const DisclaimerTag = styled(Box)({
    background: "white",
    padding: "10px 0",
    textAlign: "center",
    fontFamily: "Rubik ,sans-serif"
})

export const CustomHeader = styled(AppBar)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    background: "#131921",
    alignItems: "center",
    gap: "5px",
    padding: "4.5px 15px",
    fontFamily: "Rubik ,sans-serif",
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        padding: "10px 5px",
        display: "block"
    },
    [theme.breakpoints.down('md')]: {
        width: '100%',
        padding: "10px 5px",
        display: "block"
    }
}))

export const ResponsiveBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch"
}))


export const MobileIcon = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color: "white",
    [theme.breakpoints.down('sm')]: {
        display: 'inline',
    },
    [theme.breakpoints.down('md')]: {
        display: 'inline',
    },
}));

// -----------------------------------


export const CustomSearchBtn = styled(Button)(({ theme }) => ({
    background: "#febd69",
    border: "none",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    minWidth: "50px",
    "&:hover": {
        background: "#fcdd3d",
        height: "37px",
        alignSelf: "center"
    },
}))

export const CustomStack = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    paddingInline:"35px",
    gap:"35px",
    justifyContent: "space-between",
    [theme.breakpoints.down('lg')]: {
        justifyContent:"center",
        gap:"0px",
        paddingInline:"0",
    },
}))

export const CustomLang = styled(Button)(({ theme }) => ({
    paddingInline: '5px',
    marginRight:"16px",
    marginLeft:"19px",
    border: "2px solid transparent",
    "&:hover": {
        border: "2px solid white",
        backgroundColor: "transparent",
    },
    [theme.breakpoints.down('lg')]: {
        display: 'none',
    },
}))

export const CustomUserDetail = styled(Box)(({ theme }) => ({
    border: "2px solid transparent",
    padding: "5px 10px ",
    borderRadius: "5px",
    '&:hover': {
        border: "2px solid white"
    }, [theme.breakpoints.down('sm')]: {
        display: 'none',
    }, [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}))
export const CustomUserDetailMobile = styled(Box)(({ theme }) => ({
    border: "2px solid transparent",
    padding: "5px 10px",
    borderRadius: "5px",
    display: "none",
    [theme.breakpoints.down('sm')]: {
        display: 'inline',
    },
    [theme.breakpoints.down('md')]: {
        display: 'inline',
    },
}))

// -------------------

export const CustomLocation = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    gap:"5px",
    paddingInline:"12.5px",
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
}));
// ------------------
export const SearchButton = styled(Select)(({ theme }) => ({
    background: "#ffffffdc",
    width: "15%",
    fontSize: ".8rem",
    [theme.breakpoints.down('sm')]: {
        display: 'none',
    },
    [theme.breakpoints.down('md')]: {
        display: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
    },
   
}));
// ------------------------
export const SearchBar = styled(Autocomplete)(({ theme }) => ({
    // width: "100%",
    flex:1,
    background: "white",
    [theme.breakpoints.down('sm')]: {
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px"
    },
    [theme.breakpoints.down('md')]: {
        borderTopLeftRadius: "5px",
        borderBottomLeftRadius: "5px"
    },
     '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'black',
    },
}));
// -------------------
// ------------------------
export const SearchBarContanier = styled(Stack)(({ theme }) => ({
    flex:1,
    alignItems: "stretch",
    [theme.breakpoints.down('md')]: {
        width: "100%"
    },
}));
// ------------------------

export const StyledBadge = styled(Badge)(({ theme }) => ({
    color: "white",
    '& .MuiBadge-badge': {
        background: "transparent",
        color: "#febd69",
        fontSize: "1rem",
    },
}));


export const StyledLoactionMobile = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('sm')]: {
        display: "flex",
        margin: "0 10px"
    },
    [theme.breakpoints.down('md')]: {
        display: "flex",
        margin: "0 10px"
    },
}));


export const CustomMobileText = styled(Typography)(({ theme }) => ({
    fontWeight: "bolder",
    color: "white",
    padding: '5px 10px',
    fontSize: ".9rem"
}))


export const CustomMobileTitleText = styled(Typography)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    borderBottom: "3px solid #9999"
}))



// -----------------------------------
export const CustomLanguageLink = styled(Link)
    (({ theme }) => ({
        color: "black",
        textTransform: "capitalize",
        fontSize: ".9rem",
        padding: "3px 10px",
        letterSpacing: ".1px",
        background: "white",
        textDecoration: "none",
        '&:hover': {
            textDecoration: "underline",
            color: "orange",
            cursor: "pointer",
        }
    }))

export const CustomLanguageTag = styled(Typography)
    (({ theme }) => ({
        color: "black",
        textTransform: "capitalize",
        fontSize: ".9rem",
        padding: "3px 10px",
        letterSpacing: ".1px",
        background: "white",
        textDecoration: "none",
        '&:hover': {
            textDecoration: "underline",
            color: "orange",
            cursor: "pointer",
        }
    }))

export const CustomDrawerBox = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        fontSize: "1rem",
        width: "80vw",
        display: "block"
    },
}))

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down('md')]: {
        display: "block"
    },
}))

// -------------------------------------
export const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    background: "#F9F7F7",
    fontSize: ".8rem",
    '&.Mui-selected': {
        background: "#0f111114",
        color: 'black',
    },
    '&.Mui-selected:hover': {
        background: "#0f111114",
    },
}))

export const CustomAutoComplete = styled(TextField)(({ theme }) => ({
     '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
}))