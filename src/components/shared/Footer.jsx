import { Box, Typography } from '@mui/material'
import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { BackToTop, BackToTopLink, Column, ColumnItem, ColumnLink, ColumnList, ColumnsContainer, ColumnTitle, FooterBottomText, FooterContainer, FullWidthTop, GMobileText, MFBox, MobileColumn, MobileColumns, MobileText, MobileWrapper } from '../../styles/footer';
import { useTheme, useMediaQuery } from '@mui/material';
import  cookies  from '../../utils/Cookies';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setIsLogged } from '../store/authSlice';
import { clearUserDetails } from '../store/userSlice';

const Footer = () => {
    const isLogged = useSelector((state) => state.auth.isLogged);
    const userName = useSelector((state) => state.user.userName);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleLogout = () => {
        cookies.remove('userName', { path: '/' });
        cookies.remove('token', { path: '/' });
        cookies.remove('refreshToken', { path: '/' });
        cookies.remove('id', { path: '/' });
        dispatch(clearUserDetails());
        dispatch(setIsLogged(false))
        navigate("/");
    };

    return (
        <>
            {isMobile ?
                <MobileWrapper>
                    <FullWidthTop onClick={() => window.scrollTo({
                        top: 0,
                    })} >
                        <ArrowDropUpIcon sx={{ fontSize: '18px', color: 'white' }} />
                        <Typography sx={{ fontSize: '12px' }}
                        >TOP OF PAGE</Typography>
                    </FullWidthTop>
                    <Box>
                        <MobileColumns>
                            <MobileColumn sx={{ marginLeft: "30px", whiteSpace: "nowrap", padding: "0 40px  0 0" }}>
                                <MobileText>Amazon.in</MobileText>
                                <MobileText>Your Orders</MobileText>
                                <MobileText>Your Account</MobileText>
                                <MobileText>Returns</MobileText>
                                <MobileText>Customer Service</MobileText>
                            </MobileColumn>
                            <MobileColumn sx={{ marginRight: "10px" }} >

                                {isLogged ? <MobileText>{userName} Amazon.in</MobileText> : <MobileText>Your Amazon.in</MobileText>}

                                <MobileText>Your Lists</MobileText>
                                <MobileText>Your Recently Viewed Items</MobileText>
                                <MobileText>Sell</MobileText>
                                <MobileText>Help</MobileText>
                            </MobileColumn>
                        </MobileColumns>
                    </Box>

                    <MFBox>
                        <Box sx={{ textAlign: 'center', paddingTop: "20px" }}>
                            <GMobileText><LanguageIcon sx={{ fontSize: "16px", color: "#999" }} />English</GMobileText>
                            <MobileText sx={{ mt: 1 }}>Switch Accounts</MobileText>
                            {isLogged ? <MobileText onClick={handleLogout} >Sign Out</MobileText>
                                : <MobileText onClick={() => navigate("/login")} >Sign in</MobileText>}
                        </Box>

                        <Box sx={{ mt: 2 }}>
                            <FooterBottomText sx={{ color: "#999" }}>
                                Conditions of Use&nbsp;&nbsp; Privacy Notice&nbsp;&nbsp; Interest-Based Ads
                            </FooterBottomText>
                            <FooterBottomText sx={{ paddingBottom: "20px", color: "#999" }}>
                                Â© 1996-2024, Amazon.com, Inc. or its affiliates
                            </FooterBottomText>
                        </Box>
                    </MFBox>

                </MobileWrapper>
                :
                <FooterContainer>
                    <BackToTop onClick={() => window.scrollTo({
                        top: 0,
                    })} >
                        <BackToTopLink href="#top">Back to top</BackToTopLink>
                    </BackToTop>

                    <ColumnsContainer>
                        <Column>
                            <ColumnTitle>Get to Know Us</ColumnTitle>
                            <ColumnList>
                                <ColumnItem><ColumnLink href="#">About Us</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Careers</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Press Releases</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Amazon Science</ColumnLink></ColumnItem>
                            </ColumnList>
                        </Column>

                        <Column>
                            <ColumnTitle>Connect with Us</ColumnTitle>
                            <ColumnList>
                                <ColumnItem><ColumnLink href="#">Facebook</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Twitter</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Instagram</ColumnLink></ColumnItem>
                            </ColumnList>
                        </Column>

                        <Column>
                            <ColumnTitle>Make Money with Us</ColumnTitle>
                            <ColumnList>
                                <ColumnItem><ColumnLink href="#">Sell on Amazon</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Sell under Amazon Accelerator</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Protect and Build Your Brand</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Amazon Global Selling</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Supply to Amazon</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Become an Affiliate</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Fulfilment by Amazon</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Advertise Your Products</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Amazon Pay on Merchants</ColumnLink></ColumnItem>
                            </ColumnList>
                        </Column>

                        <Column>
                            <ColumnTitle>Let Us Help You</ColumnTitle>
                            <ColumnList>
                                <ColumnItem><ColumnLink href="#">Your Account</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Returns Centre</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Recalls and Product Safety Alerts</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">100% Purchase Protection</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Amazon App Download</ColumnLink></ColumnItem>
                                <ColumnItem><ColumnLink href="#">Help</ColumnLink></ColumnItem>
                            </ColumnList>
                        </Column>
                    </ColumnsContainer>
                </FooterContainer >
            }
        </>
    )
}

export default Footer
