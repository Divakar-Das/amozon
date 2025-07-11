import { CustomLink, CustomSignInBtn, CustomText, SigninBtnCoontainer } from '../../../styles/signinbutton'
import { useNavigate } from 'react-router';

const SignInButton = () => {
    const navigate= useNavigate();
    return (
        <>
            <SigninBtnCoontainer> 
                <CustomText variant='p' component={"div"} sx={{ fontWeight: 400, }} >See personalized recommendations</CustomText>
                <CustomSignInBtn disableRipple onClick={()=>navigate("/login")} >Sign In</CustomSignInBtn>
                <CustomText variant='p' component={"div"} >New customer? <CustomLink  onClick={()=>navigate("/register")} >Start here.</CustomLink> </CustomText>
            </SigninBtnCoontainer >
        </>
    )
}

export default SignInButton
