import { Box, Button, Card, Container, styled, TextField, Typography } from "@mui/material";

export const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: "1.5rem",
  [theme.breakpoints.down('sm')]: {
    fontSize: "1.3rem",
  }
}))

export const Root = styled('div')(({ theme }) => ({
  width: '100%',
  fontSize: "16px",
  margin: "20px 0 20px 0"
}));

export const MainContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center"
})

export const InnerContainer = styled(Box)(({ theme }) => ({
  width: "23rem",
  display: "flex",
  justifyContent: "center",
  alignItems:"center",
  alignItems: "center",
  flexDirection: "column",
  gap: "15px",
  [theme.breakpoints.down('sm')]: {
    width: '75%',
  }
}))
export const InnerContainer2 = styled(Box)(({ theme }) => ({
  width: "23rem",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}))

export const CardContainer = styled(Card)
  (({ theme }) =>
  ({
    border: "1px solid #d5d9d9",
    boxShadow: "none",
    display: "flex",
    alignItems: "start",
    gap: "10px",
    flexDirection: "column",
    width: "370px",
    minHeight: "350px",
    padding: "46px 26px",
    [theme.breakpoints.down('md')]: {
      border: 'none',
      width: "100%",
    },
  })
  )

export const CardContainer2 = styled(Card)
  (({ theme }) =>
  ({
    border: "1px solid #d5d9d9",
    boxShadow: "none",
    display: "flex",
    alignItems: "start",
    gap: "10px",
    flexDirection: "column",
    width: "100%",
    padding: "25px 26px",
    [theme.breakpoints.down('md')]: {
      border: 'none',
      padding: "0px",
      width:"90vw"
    },
  }))

export const CustomBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "10px"
})

export const CustomBox2 = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  flexDirection: "column",
  gap: "10px",
  paddingTop: "10px"
})

export const CustomButton = styled(Button)({
  background: "#FCDD3D",
  color: "black",
  boxShadow: "none",
  textTransform: "capitalize",
  borderRadius: "20px",
  width: "100%"
})
export const CustomButton2 = styled(Button)({
  background: "#FCDD3D",
  color: "black",
  boxShadow: "none",
  textTransform: "capitalize",
  width: "100%",
})

export const CustomNavigate = styled(Typography)({
  cursor: "pointer",
  color: "#0066C0",
  fontSize: "12px"
})

export const CustomInputs = styled(TextField)(({theme})=>({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': { borderColor: "black" }
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    '&.Mui-focused fieldset': {
      borderColor: "red",
    },
  },
  '& label.Mui-error.Mui-focused': {
    color: "red",
  },
  [theme.breakpoints.down('sm')]: {
    '& .MuiFormHelperText-root': {
     paddingLeft: 0,
     marginLeft:0
   },

  },
}))


export const CustomLabel = styled(Typography)({
  fontSize: "14px",
  fontWeight: 650,
  letterSpacing: "0.14132px",
  lineHeight: 1.5,
  fontFamily: "Roboto, Helvetica, Arial, sans-serif"
});


export const CustomFinalBtn = styled(Box)(({ theme }) => ({
  padding: "0px 20px",
  width: "100%",
  [theme.breakpoints.down('sm')]: {
    padding: "0px 45px", // Mobile 
  },
}))