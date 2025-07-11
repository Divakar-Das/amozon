import { Box, Button, Collapse, Divider, Rating, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Link, useNavigate, useSearchParams } from 'react-router'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { BackToButton, ButtonforMobile, BuyButton, CustomImage, CustomLink, CustomMainContent, FeatureBox, ImageContainer, OutOfStack, ProductDetailContainer, ProductDetailContainer2, ProductTitle, RatingContainer, ViewProductContainer } from '../../../styles/viewProductDetails';
import { GetRequest, PostRequest, PostRequest2 } from '../../../api/config';
import { useEffect, useRef, useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { ProductFeatureImage } from '../../../constants/constantImage';
import { BuyModal, ProductTable } from '../../../routes/route';
import { useSelector } from 'react-redux';
import { product } from '../../../api/apiPath';

const ViewProductDetails = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [searchParams] = useSearchParams();
    const Productid = searchParams.get('productId');
    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const isLogged = useSelector((state) => state.auth.isLogged);
    const handleOpen = () => {
        if (isLogged) {
            setOpen(true);
        } else {
            navigate("/login")
        }
    }
    const handleClose = () => setOpen(false);


    const [productDetail, setProductDetail] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const getProductDetail = await GetRequest(`${product}/${Productid}`);
                setProductDetail(getProductDetail)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    const aboutRef = useRef();
    // useEffect(() => {
    //     if (productDetail.about && aboutRef.current) {
    //         aboutRef.current.innerHTML = productDetail.about
    //     }
    // }, [productDetail.about])

    const imgUrl = productDetail.productImages?.[0].productImagePath.replace("http://api-ecommerce-app.bluetickcoders.com","/api");


    const [expanded, setExpanded] = useState(false);
    const visibleCount = 4;

    const handleToggle = () => {
        setExpanded((prev) => !prev);
    };
    const properties = productDetail?.propertyValues || [];

    const visibleItems = properties.slice(0, visibleCount);
    const hiddenItems = properties.slice(visibleCount);

    const [aboutExpanded, setAboutExpanded] = useState(false);
    const [isAboutOverflowing, setIsAboutOverflowing] = useState(false);
    

    const handleAboutToggle = () => {
        setAboutExpanded(prev => !prev);
    };


    useEffect(() => {
    if (aboutRef.current && productDetail.about) {
        aboutRef.current.innerHTML = productDetail.about;

        setTimeout(() => {
            const ref = aboutRef.current;
            if (ref) {
                const actualHeight = ref.scrollHeight;
                setIsAboutOverflowing(actualHeight > 290);
            }
        }, 0);
    }
}, [productDetail.about]);



    return (
        <>

            <ViewProductContainer>
                <BackToButton>
                    <KeyboardArrowLeftIcon sx={{ color: "#565959" }} fontSize='20px' />
                    <CustomLink onClick={() => navigate(-1)} > Back to results</CustomLink>
                </BackToButton>
                <CustomMainContent>
                    <ImageContainer>
                        <CustomImage src={imgUrl} alt="image" />
                    </ImageContainer>
                    <ProductDetailContainer direction={"column"} >
                        <ProductTitle variant='body1'>
                            {productDetail.name}
                        </ProductTitle>

                        <RatingContainer direction={"row"} >
                            <Box sx={{ display: "flex", alignItems: "center" }} >
                                <Typography variant='p' sx={{ fontSize: ".9rem", marginRight: "5px" }} >{productDetail.overallRatings}</Typography>
                                <Rating
                                    readOnly
                                    value={Number(productDetail.overallRatings)}
                                    precision={0.5}
                                />
                                <KeyboardArrowDownIcon />
                                {isMobile && <Typography variant='p' sx={{ color: "#007185" }} >({productDetail.noOfRatings}) Ratings</Typography>}
                            </Box>
                            {
                                !isMobile &&
                                <Typography sx={{ color: "#007185", fontSize: ".9rem", marginLeft: "30px" }} variant='p'>
                                    {productDetail.noOfRatings == 0 ? "No" : productDetail.noOfRatings} Ratings | Search in this page
                                </Typography>
                            }

                        </RatingContainer>
                        <Typography sx={{ fontSize: ".8rem" }} variant='p'>
                            {productDetail.bought} peoples in past month
                        </Typography>

                        <Stack direction={"row"} sx={{ gap: "10px", alignItems: "center" }} >
                            <Typography sx={{ fontSize: "24px", fontWeight: "300", fontFamily: "Rubik", color: "#cc0c39" }} variant='span'>
                                -{productDetail.discount}&nbsp;%
                            </Typography>
                            <Typography sx={{ fontSize: "28px", fontFamily: "Rubik" }} variant='span'>
                                <sup style={{ fontSize: ".9rem" }} >₹</sup>{productDetail.discountedPrice?.toLocaleString('en-IN')}
                            </Typography>
                        </Stack>

                        <Typography variant='p' sx={{ textDecoration: "line-through", fontSize: ".8rem", color: "#565959", padding: "5px 0" }} >M.R.P : ₹{productDetail.actualPrice?.toLocaleString('en-IN')}</Typography>
                        {!isMobile && <Divider />}
                        {productDetail.quantity > 0 ? <ButtonforMobile disableRipple disableElevation variant="contained" size='small' onClick={handleOpen} >Buy Now</ButtonforMobile>
                            : <OutOfStack variant='outlined'
                                size='smaller'
                                disableRipple
                                disableElevation
                            >Out of stock</OutOfStack>
                        }


                        <FeatureBox direction={"rows"}>

                            {productDetail.isInstallationAvailable > 0 && <Box sx={{
                                width: "100px",
                                height: "90px", justifyContent: "center",
                                alignItems: "center", display: "flex"
                            }} >
                                <img src={ProductFeatureImage.installation} width={35} height={35} alt="img" />
                                <Typography sx={{ fontSize: ".8rem", color: "#007185", }} variant='p'>
                                    Insatllation Available
                                </Typography>
                            </Box>}

                            {productDetail.hasCashOnDelivery > 0 && <Box sx={{
                                width: "100px",
                                height: "90px", justifyContent: "center",
                                alignItems: "center", display: "flex"
                            }} >
                                <img src={ProductFeatureImage.cashOnDeliver} width={35} height={35} alt="img" />
                                <Typography sx={{ fontSize: ".8rem", color: "#007185", }} variant='p'>
                                    Pay on Delivery
                                </Typography>
                            </Box>}

                            {productDetail.hasFreeDelivery > 0 && <Box sx={{
                                width: "100px",
                                height: "90px", justifyContent: "center",
                                alignItems: "center", display: "flex"
                            }} >
                                <img src={ProductFeatureImage.freeDelivery} width={35} height={35} alt="img" />
                                <Typography sx={{ fontSize: ".8rem", color: "#007185", }} variant='p'>
                                    Free<br />Delivery
                                </Typography>
                            </Box>}


                            {productDetail.isTopBrand > 0 && <Box sx={{
                                width: "100px",
                                height: "90px", justifyContent: "center",
                                alignItems: "center", display: "flex"
                            }} >
                                <img src={ProductFeatureImage.brand} width={35} height={35} alt="img" />
                                <Typography sx={{ fontSize: ".8rem", color: "#007185", }} variant='p'>
                                    Top<br />Brand
                                </Typography>
                            </Box>}

                        </FeatureBox>
                        <Divider />

                        {properties.length !== 0 && <Typography variant='p' sx={{
                            fontWeight: "500",
                            margin: "15px 0 0px 0",
                            fontSize: "20px", fontFamily: "Rubik"
                        }} component={"div"} >
                            General Details
                        </Typography>}

                        <Box>
                            {/* Always show first few items */}
                            {visibleItems.map((item, index) => (
                                <Box key={index} sx={{ display: "flex", margin: "5px 0" }}>
                                    <Typography sx={{ fontWeight: 500, flexBasis: "37%", fontSize: 14, letterSpacing: 1 }}>
                                        {item.name}
                                    </Typography>
                                    <Typography sx={{ width: "50%", fontSize: 14, letterSpacing: 1 }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            ))}

                            {/* Collapsible section for hidden items */}
                            <Collapse in={expanded}>
                                {hiddenItems.map((item, index) => (
                                    <Box key={index} sx={{ display: "flex", margin: "5px 0" }}>
                                        <Typography sx={{ fontWeight: 500, flexBasis: "37%", fontSize: 14, letterSpacing: 1 }}>
                                            {item.name}
                                        </Typography>
                                        <Typography sx={{ width: "50%", fontSize: 14, letterSpacing: 1 }}>
                                            {item.value}
                                        </Typography>
                                    </Box>
                                ))}
                            </Collapse>

                            {/* Toggle Button */}
                            {properties.length > visibleCount && (
                                <Button
                                    onClick={handleToggle}
                                    size="small"
                                    disableRipple
                                    startIcon={!expanded ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
                                    sx={{
                                        mt: 1, textTransform: "capitalize", fontFamily: "Rubik", fontWeight: "400", fontSize: "12px", padding: 0, margin: "0 0 0 10px", '&:hover': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}>
                                    {expanded ? "Show Less" : "Show More"}
                                </Button>
                            )}
                        </Box>

                        {/*                         
                        {productDetail?.propertyValues?.map((item, index) => (
                            <Box key={index} sx={{
                                display: "flex",
                            }} >
                                <Typography sx={{
                                    fontWeight: "500",
                                    flexBasis: "37%", fontSize: "14px", letterSpacing: "1px"
                                }} variant='p'>
                                    {item.name}
                                </Typography>
                                <Typography variant='p' sx={{ width: "50%", fontSize: "14px", letterSpacing: "1px" }} >
                                    {item.value}
                                </Typography>

                            </Box>
                        ))} */}

                        <Divider sx={{ marginTop: "5px" }} />

                        {/* {productDetail.about !== null &&
                            <Typography variant='p' sx={{
                                fontWeight: "500",
                                fontSize: "16px", margin: "20px 0 0px 0", fontFamily: "Rubik"
                            }} component={"div"} >
                                About this product
                            </Typography>
                        } */}
                        <Stack direction={'column'} sx={{ padding: "0px 15px", color: "#0f1111", fontSize: "14px", fontFamily: "Rubik", fontWeight: 400, letterSpacing: "0.5px", justifyContent: "space-between", '& ul li': { mb: 1 } }} ref={aboutRef}>
                        </Stack>
                        {productDetail.about !== null && (
                            <>
                                <Typography
                                    variant="p"
                                    sx={{
                                        fontWeight: "500",
                                        fontSize: "16px",
                                        margin: "20px 0 0px 0",
                                        fontFamily: "Rubik"
                                    }}
                                    component="div"
                                >
                                    About this product
                                </Typography>

                                <Collapse in={aboutExpanded} collapsedSize={290}>
                                    <Stack
                                        direction="column"
                                        ref={aboutRef}
                                        sx={{
                                            padding: "0px 15px",
                                            color: "#0f1111",
                                            fontSize: "14px",
                                            fontFamily: "Rubik",
                                            fontWeight: 400,
                                            letterSpacing: "0.5px",
                                            justifyContent: "space-between",
                                            '& ul li': { mb: 1 }
                                        }}
                                    />
                                </Collapse>

                                {isAboutOverflowing && (
                                    <Button
                                        onClick={handleAboutToggle}
                                        size="small"
                                        disableRipple
                                        startIcon={aboutExpanded ? <KeyboardArrowUpIcon fontSize='large' /> : <KeyboardArrowDownIcon fontSize='large' />}
                                        sx={{
                                            width: "100px",
                                            mt: 1,
                                            textTransform: "capitalize",
                                            fontFamily: "Rubik",
                                            fontWeight: "400",
                                            fontSize: "12px",
                                            padding: 0,
                                            margin: "0 0 0 10px",
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    >
                                        {aboutExpanded ? "Show Less" : "Show More"}
                                    </Button>
                                )}
                            </>
                        )}


                    </ProductDetailContainer>
                    <ProductDetailContainer2>
                        <Stack direction={"column"} sx={{ background: "white", gap: "10px", borderRadius: '10px', border: "1px solid rgba(0, 0, 0, 0.12)", padding: "15px" }} >
                            <Box sx={{ display: "flex" }} >
                                <PlaceOutlinedIcon fontSize='small' />
                                <Typography variant='p' sx={{ color: "#007185", fontSize: ".8rem" }} >Deliver to - Sign in to update location</Typography>
                            </Box>

                            {productDetail.quantity <= 4 ?
                                (productDetail.quantity == 0 ?
                                    <Typography variant='p'
                                        sx={{
                                            color: "#cc0c39",
                                            fontSize: ".9rem",
                                            letterSpacing: "1px",
                                            fontWeight: "bold"
                                        }} >
                                        Out of stock
                                    </Typography>
                                    :
                                    <Typography
                                        variant='p'
                                        sx={{
                                            color: "#cc0c39",
                                            fontSize: ".9rem",
                                            letterSpacing: "1px",
                                            fontWeight: "bold"
                                        }} >
                                        Only {productDetail.quantity} left in stock
                                    </Typography>) :
                                <Typography variant='p' sx={{ color: "#007600", fontSize: "1.1rem" }} >In Stock</Typography>
                            }

                            <Stack direction={"row"} sx={{ justifyContent: "space-between" }} >
                                <Typography variant='p' sx={{ fontSize: ".8rem", color: "#666" }} >Payment</Typography>
                                <Typography variant='p' sx={{ fontSize: ".8rem", color: "#007185" }} >Secure Transaction</Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ justifyContent: "space-between" }} >
                                <Typography variant='p' sx={{ fontSize: ".8rem", color: "#666" }} >Ships from</Typography>
                                <Typography variant='p' sx={{ fontSize: ".8rem", color: "#007185" }} >Amazon</Typography>
                            </Stack>
                            <Stack direction={"row"} sx={{ justifyContent: "space-between", paddingBottom: "20px" }} >
                                <Typography variant='p' sx={{ fontSize: ".8rem", color: "#666" }} >Sold by</Typography>
                                <Typography variant='p' sx={{ fontSize: ".8rem", color: "#007185" }} >
                                    {productDetail?.sellerUser?.seller?.storeName}
                                </Typography>
                            </Stack>
                            {productDetail.quantity !== 0 && <BuyButton disableRipple disableElevation variant="contained" size='small' onClick={handleOpen} >Buy Now</BuyButton>}
                        </Stack>
                    </ProductDetailContainer2>
                </CustomMainContent>
                <Divider />
                <ProductTable productDetail={productDetail?.description} />
            </ViewProductContainer>
            <BuyModal
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />
        </>
    )
}

export default ViewProductDetails
