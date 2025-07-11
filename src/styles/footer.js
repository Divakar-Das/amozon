import { styled, Box, Typography, useMediaQuery } from '@mui/material';

export const FooterContainer = styled('footer')(({ theme }) => ({
    backgroundColor: '#232f3e',
    color: 'white',
    position: "initial",
    paddingTop:"60px",
    position:"relative",
    zIndex:1000,
    fontFamily: 'Arial, sans-serif'
}));

export const BackToTop = styled(Box)(({ theme }) => ({
    backgroundColor: '#37475a',
    textAlign: 'center',
    width: "100%",
    padding: '15px 0',
    cursor: 'pointer',
    position:"absolute",
    top:0,
}));

export const BackToTopLink = styled('a')(({ theme }) => ({
    width: "100%",
    color: 'white',
    textDecoration: 'none',
    fontSize: '15px',
}));

export const ColumnsContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: 'auto',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
}));

export const Column = styled(Box)(({ theme }) => ({
    flex: '1 1 200px',
    margin: theme.spacing(0, 2, 1.5),
    minWidth: '200px',
}));

export const ColumnTitle = styled('p')(({ theme }) => ({
    fontSize: '16px',
    fontFamily: "Rubik",
    fontWeight: "500",
    marginBottom: '5px',
}));

export const ColumnList = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    margin: 0,
}));

export const ColumnItem = styled('li')(({ theme }) => ({
    marginBottom: '2px',
}));

export const ColumnLink = styled('a')(({ theme }) => ({
    color: '#ddd',
    textDecoration: 'none',
    fontSize: '14px',
    fontFamily:"Rubik",
    '&:hover': {
        textDecoration: 'underline',
        color: 'white',
    },
}));



// ---------- Mobile Footer Styled Components ----------

export const MobileWrapper = styled(Box)(({ theme }) => ({
    color: 'white',
    fontFamily: 'Arial, sans-serif',

}));

export const FullWidthTop = styled(Box)(({ theme }) => ({
    backgroundColor: '#37475a',
    textAlign: 'center',
    padding: '15px 0',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    padding: "5px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    cursor: "pointer"
}));

export const MobileColumns = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    padding: theme.spacing(2, 1),
    backgroundColor: '#232f3e',
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    padding: '20px 0'
}));

export const MobileColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
}));

export const DividerLine = styled(Box)(({ theme }) => ({
    borderTop: '1px solid #555',
    margin: theme.spacing(2, 0, 1),
}));

export const MobileText = styled(Typography)(({ theme }) => ({
    fontSize: '15px',
    fontFamily: "sans-serif",
    paddingBottom: "10px",
    cursor:"pointer"
}));

export const GMobileText = styled(Typography)({
    color: "#999",
    fontSize: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"

})

export const FooterBottomText = styled(Typography)(({ theme }) => ({
    fontSize: '13px',
    color: '#ccc',
    textAlign: 'center',
}));

export const MFBox = styled(Box)({
    backgroundColor: "#131a22",
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw'
})
