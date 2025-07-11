import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, InputAdornment, Divider } from '@mui/material'
import {
  TitleText,
  Root,
  MainContainer,
  InnerContainer,
  CardContainer,
  CustomBox,
  CustomButton,
  CustomNavigate,
  CustomInputs,
  CustomLabel,
  CustomFinalBtn
} from '../../../styles/loginStyles'
import IconButton from '@mui/material/IconButton';
import { useEffect, useState } from 'react';
import imageUrl from '../../../constants/constantImage';
import { useNavigate } from 'react-router';
import cookies  from '../../../utils/Cookies';
import { PostRequest3 } from '../../../api/config';
import { useDispatch, useSelector } from 'react-redux';
import { showMessage } from '../../store/snackSlice';
import { clearUserDetails, setUserName } from '../../store/userSlice';
import { hideLoading } from '../../store/loadingSlice';
import { setIsLogged } from '../../store/authSlice';
import Loading from '../../shared/loading/Loading';

const Login = () => {
  const dispatch = useDispatch();
  const { mobile, password } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()
  const [logedIn, setLogedIn] = useState(false)
  const [userData, setUserData] = useState({
    mobileNo: mobile || "",
    password: password || ""
  })
  const [helpText, sethelpText] = useState({
    mobileNohelp: "",
    passwordhelp: ""
  })

  const CombinedPattern = /^(\d{10}|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

  const handleNumber = (value) => {
    if (!value) {
      sethelpText((prev) => ({
        ...prev,
        mobileNohelp: "Mobile or Email is Required",
      }));
      return false;
    }
    else if (!CombinedPattern.test(value)) {
      sethelpText((prev) => ({
        ...prev,
        mobileNohelp: "Invalid mobile or Email",
      }));
      return false;
    }
    else {
      sethelpText((prev) => ({ ...prev, mobileNohelp: "" }));
      return true;
    }
  }

  const handlePassword = (value) => {
    if (!value) {
      sethelpText((prev) => ({
        ...prev,
        passwordhelp: "Password is Required",
      }));
      return false;
    }
    else {
      sethelpText((prev) => ({ ...prev, passwordhelp: "" }));
      return true;
    }
  }

  const handleLogin = async () => {
    try {

      const response = await PostRequest3('/login', userData);
      const userName = response.data?.name;
      const token = response.data?.token;
      const id = response.data?.id;
      const refreshToken = response.data?.refreshToken;

      if (userName) {
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 1);
        cookies.set('userName', userName, { path: '/', expires: expiry });
        cookies.set('token', token, { path: '/', expires: expiry });
        cookies.set('id', id, { path: '/', expires: expiry });
        cookies.set('refreshToken', refreshToken, { path: '/', expires: expiry });
        dispatch(showMessage({ message: 'Login Successfully' }));
        dispatch(clearUserDetails())
        dispatch(setIsLogged(true));
        dispatch(setUserName(userName));
        const mobile = handleNumber(userData?.mobileNo)
        const password = handlePassword(userData.password)

        if (mobile && password) {
          navigate("/");
          setLogedIn(true)
        }
      }
    }
    catch (error) {
      console.log(error);

      if (error.response && error.response.status === 400) {
        dispatch(showMessage({ message: error.response.data.error }));
      }
    }
  }

  useEffect(() => {
    cookies.remove('userName', { path: '/' });
    cookies.remove('token', { path: '/' });
    cookies.remove('refreshToken', { path: '/' });
    cookies.remove('id', { path: '/' });
    return () => {
      dispatch(hideLoading());
    };
  }, [])


  return (
    <>
      <MainContainer>
        <InnerContainer>
          <Box>
            <img src={imageUrl} alt="logo" />
          </Box>
          <CardContainer>
            <TitleText variant='p'>Sign in or create account</TitleText>
            <Box sx={{ width: "100%" }} >

              <CustomLabel
                variant='p'
                component={"div"}
              >
                Email or mobile number
              </CustomLabel>

              <CustomInputs
                size='small'
                fullWidth
                variant="outlined"
                autoComplete='on'
                value={userData.mobileNo}
                helperText={helpText.mobileNohelp}
                error={helpText.mobileNohelp}
                onChange={(e) => {
                  setUserData({ ...userData, mobileNo: e.target.value })
                  handleNumber(e.target.value);
                }}
                onBlur={() => handleNumber(userData.mobileNo)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleLogin()
                  }
                }}
              />
            </Box>
            <Box sx={{ width: "100%" }} >
              <CustomLabel variant='p' component={"div"}>Password</CustomLabel>
              <CustomInputs size='small'
                type={showPassword ? 'text' : 'password'}
                value={userData.password}
                InputProps={{
                  sx: { height: 37, padding: 0 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton sx={{ color: "black", marginRight: "10px" }} onClick={() => setShowPassword(!showPassword)} >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                fullWidth
                variant="outlined"
                helperText={helpText.passwordhelp}
                error={helpText.passwordhelp}
                onChange={(e) => {
                  setUserData({ ...userData, password: e.target.value })
                  handlePassword(e.target.value);
                }}
                onBlur={() => handlePassword(userData.password)}
                onKeyDown={e => {
                  if (e.key === "Enter") {
                    handleLogin()
                  }
                }}
              />
            </Box>
            <CustomBox>
              <CustomButton
                onClick={handleLogin}
                variant="contained"
                disableElevation >
                Continue
              </CustomButton>
              <CustomNavigate variant='p' component={"div"} >Login to business account?</CustomNavigate>
              <CustomNavigate variant='p' component={"div"} onClick={() => navigate("/landing")} >Go Back</CustomNavigate>
            </CustomBox>
          </CardContainer>
          <CustomFinalBtn>
            <Root><Divider>New to Amazon?</Divider></Root>
            <Button sx={{ color: "black", background: "#e0e0e0", fontSize: "12px", width: "100%" }}
              onClick={() => navigate("/register")}
            >CREATE NEW ACCOUNT</Button>
          </CustomFinalBtn>
        </InnerContainer>
      </MainContainer>
      <Loading />
    </>
  )
}

export default Login