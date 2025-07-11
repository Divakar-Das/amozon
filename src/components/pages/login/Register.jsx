import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Box, Button, InputAdornment, Divider } from '@mui/material'
import { useDispatch, useSelector } from "react-redux"
import {
    TitleText,
    Root,
    MainContainer,
    InnerContainer2,
    CardContainer2,
    CustomBox2,
    CustomButton2,
    CustomInputs,
    CustomLabel,
    CustomFinalBtn
} from '../../../styles/loginStyles'
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import imageUrl from '../../../constants/constantImage';
import { useNavigate } from 'react-router';
import { PostRequest2 } from '../../../api/config';
import { showMessage } from '../../store/snackSlice';
import { setUserDetails } from '../../store/userSlice';
import Loading from '../../shared/loading/Loading';
import { register } from '../../../api/apiPath';

const Register = () => {
    const dispatch = useDispatch();

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        mobileNo: "",
        email: "",
        password: ""
    })

    const [Helpertext, setHelpertext] = useState({
        namehelp: "",
        mobilehelp: "",
        emailhelp: "",
        passwordhelp: ""
    })

    const handleName = (value) => {
        if (!value) {
            setHelpertext((prev) => ({
                ...prev,
                namehelp: "Name is Required",
            }));
            return false;
        }
        else {
            setHelpertext((prev) => ({ ...prev, namehelp: "" }));
            return true;
        }
    }
    const NumberPattern = /^\d{10}$/;
    const EmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleNumber = (value) => {
        if (!value) {
            setHelpertext((prev) => ({
                ...prev,
                mobilehelp: "Mobile Number is Required",
            }));
            return false;
        } else if (!NumberPattern.test(value)) {
            setHelpertext((prev) => ({
                ...prev,
                mobilehelp: "Invalid mobile number",
            }));
            return false;
        }
        else {
            setHelpertext((prev) => ({ ...prev, mobilehelp: "" }));
            return true;
        }
    }

    const handleEmail = (value) => {
        if (!value) {
            setHelpertext((prev) => ({
                ...prev,
                emailhelp: "Email is required",
            }));
            return false;
        } else if (!EmailPattern.test(value)) {
            setHelpertext((prev) => ({
                ...prev,
                emailhelp: "Invalid Email",
            }));
            return false;
        }
        else {
            setHelpertext((prev) => ({ ...prev, emailhelp: "" }));
            return true;
        }
    }

    const handlePassword = (value) => {
        if (!value) {
            setHelpertext((prev) => ({
                ...prev,
                passwordhelp: "Password is Required",
            }));
            return false;
        }
        else {
            setHelpertext((prev) => ({ ...prev, passwordhelp: "" }));
            return true;
        }
    }

    const handleRegister = async () => {
        try {
            const response = await PostRequest2(register, userData);
            dispatch(showMessage({ message: response.message }));
            const name = handleName(userData.name);
            const mobile = handleNumber(userData.mobileNo)
            const email = handleEmail(userData.email)
            const password = handlePassword(userData.password)
            dispatch(setUserDetails({ mobile: userData.mobileNo, password: userData.password }));
            if (name && mobile && email && password) {
                navigate("/login");
            }
        }
        catch (error) {
            if (error.response && error.response.status === 400) {
                dispatch(showMessage({ message: error.response.data.error }));
            }
            console.log(error);
        }
    }


    return (
        <>
            <MainContainer>
                <InnerContainer2>
                    <Box>
                        <img src={imageUrl} alt="logo" />
                    </Box>
                    <CardContainer2>
                        <TitleText variant='p'>Create your Account</TitleText>
                        <Box sx={{ width: "100%" }} >
                            <CustomLabel variant='p' component={"div"} >Name</CustomLabel>
                            <CustomInputs
                                size='small'
                                fullWidth
                                variant="outlined"
                                autoComplete='off'
                                helperText={Helpertext.namehelp}
                                error={Helpertext.namehelp}
                                onInput={(e) => {
                                    setUserData({ ...userData, name: e.target.value })
                                    handleName(e.target.value);
                                }}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        handleRegister()
                                    }
                                }}
                                onBlur={() => handleName(userData.name)}
                            />

                        </Box>
                        <Box sx={{ width: "100%" }} >
                            <CustomLabel variant='p' component={"div"}>Mobile Number</CustomLabel>
                            <CustomInputs
                                size='small'
                                fullWidth
                                variant="outlined"
                                autoComplete='off'
                                helperText={Helpertext.mobilehelp}
                                error={Helpertext.mobilehelp}
                                onInput={(e) => {
                                    setUserData({ ...userData, mobileNo: e.target.value })
                                    handleNumber(e.target.value);
                                }}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        handleRegister()
                                    }
                                }}
                                onBlur={() => handleNumber(userData.mobileNo)}
                            />

                        </Box>
                        <Box sx={{ width: "100%" }} >
                            <CustomLabel variant='p' component={"div"}>Email</CustomLabel>
                            <CustomInputs
                                size='small'
                                fullWidth
                                variant="outlined"
                                autoComplete='off'
                                helperText={Helpertext.emailhelp}
                                error={Helpertext.emailhelp}
                                onInput={(e) => {
                                    setUserData({ ...userData, email: e.target.value })
                                    handleEmail(e.target.value);
                                }}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        handleRegister()
                                    }
                                }}
                                onBlur={() => handleEmail(userData.email)}
                            />

                        </Box>
                        <Box sx={{ width: "100%" }} >
                            <CustomLabel variant='p' component={"div"}>Password</CustomLabel>
                            <CustomInputs
                                size='small'
                                type={showPassword ? 'text' : 'password'}
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
                                helperText={Helpertext.passwordhelp}
                                error={Helpertext.passwordhelp}
                                onInput={(e) => {
                                    setUserData({ ...userData, password: e.target.value })
                                    handlePassword(e.target.value);
                                }}
                                onKeyDown={e => {
                                    if (e.key === "Enter") {
                                        handleRegister()
                                    }
                                }}
                                onBlur={() => handlePassword(userData.password)} />
                        </Box>

                        <CustomBox2>
                            <CustomButton2 onClick={handleRegister} variant="contained" disableElevation >
                                Register
                            </CustomButton2>
                        </CustomBox2>

                    </CardContainer2>

                    <CustomFinalBtn>
                        <Root><Divider>Already have an account?</Divider></Root>
                        <Button
                            sx={{ color: "black", background: "#e0e0e0", fontSize: "12px", width: "100%" }}
                            onClick={() => navigate("/login")}
                        >GO TO LOGIN</Button>
                    </CustomFinalBtn>
                </InnerContainer2>
            </MainContainer>
            <Loading/>
        </>
    )
}

export default Register