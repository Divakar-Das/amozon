import { Box, Button, Card, Rating, Select, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'
import { BuyButton, CustomImageStyle, CustomProductCard, CustomProductImage, DiscountDetail, FilterContainer, MobileViewPrice, OutOfStackButton, PeopleStatus, PriceForMobile, ProductCardContainer, ProductDetails, ProductMrpPrice, ProductPrice, ProductPrice1, ProductPrice2, ProductRating, ProductTitle, RateSymbol, RatingStatus, ResutContainer, ResutText, SmallRating } from '../../../styles/product';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { PostRequest, PostRequest2 } from '../../../api/config';
import { useNavigate, useSearchParams } from 'react-router';
import { BuyModal } from '../../../routes/route';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../api/apiPath';
const Product = () => {
    const [value, setValue] = useState(0);
    const isLogged = useSelector((state) => state.auth.isLogged);
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        if (isLogged) {
            setOpen(true);
        } else {
            navigate("/login")
        }
    }
    const handleClose = () => setOpen(false);

    const [searchParams] = useSearchParams();
    const Productid = searchParams.get('subCategoryId');
    const navigate = useNavigate()


    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const payload = {
                    filters: [{
                        field: "subCategoryId",
                        value: Productid,
                        type: "eq",
                    }],
                    sorting: [{
                        column: "createdAt", order: "desc"
                    }]
                };

                const AllCategories = await PostRequest2(getProducts, payload);
                setCategories(AllCategories.rows || [])
            } catch (error) {
                console.log(error);
                setCategories([])
            }
        }
        fetchData();
    }, [Productid])

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (

        <>
            <ResutContainer>
                <ResutText variant='p' component={"div"}>Result</ResutText>
                <Typography variant='p'
                    sx={{
                        fontSize: ".9rem",
                        color: "#555"
                    }}
                    component={"div"}>Check each product page for other buying options.</Typography>
            </ResutContainer>
            <FilterContainer>
                <Button size='small' sx={{ padding: "4px 7px", fontSize: ".6rem", border: '1px solid grey' }}
                    disableRipple
                    variant="outlined" endIcon={<KeyboardArrowDownIcon fontSize='small' />}>
                    Filters (0)
                </Button>
            </FilterContainer>

            <ProductCardContainer direction={"column"} >
                {categories.map((item, index) => {
                    const imgUrl = item.fileBaseUrl.replace("http://api-ecommerce-app.bluetickcoders.com","/api") + item.productImages?.[0].productImagePath;
                    return (
                        <CustomProductCard key={index} >
                            <CustomProductImage>
                                <CustomImageStyle onClick={() => navigate(`/viewProductDetail?productId=${item.id}`)} src={imgUrl} alt="image" />
                            </CustomProductImage>
                            <ProductDetails>
                                <ProductTitle onClick={() => navigate(`/viewProductDetail?productId=${item.id}`)} variant='p' component={"div"} >{item.name}
                                </ProductTitle>
                                <ProductRating>
                                    {isMobile && <Typography
                                        variant='p'
                                        sx={{ color: "#007185", fontSize: "1rem", marginRight: "4px" }}
                                    >{item.noOfRatings}</Typography>}
                                    <SmallRating
                                        readOnly
                                        name="simple-controlled"
                                        value={item.noOfRatings}
                                        onClick={(event, newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                    <KeyboardArrowDownIcon fontSize='small' sx={{ color: "#007185" }} />
                                    <RatingStatus variant='body1'>
                                        {
                                            isMobile ? `( ${item.noOfRatings} )` : item.noOfRatings == 0 ? "No Rating" : (item.noOfRatings) + " ratings"
                                        }
                                    </RatingStatus>
                                </ProductRating>

                                <PeopleStatus variant='p' component={"div"} >
                                    {item.bought} peoples bougth in past
                                </PeopleStatus>

                                <ProductPrice direction={"column"}>
                                    <MobileViewPrice>
                                        <PriceForMobile direction={"row"}>
                                            <ProductPrice1 variant='p' >
                                                <RateSymbol>₹</RateSymbol>
                                                {item.discountedPrice?.toLocaleString('en-IN')}</ProductPrice1>
                                            <ProductMrpPrice sx={{
                                                display: item.discount ? "inline" : "none"
                                            }} variant='p' >
                                                M.R.P
                                            </ProductMrpPrice>
                                            <ProductMrpPrice sx={{ textDecoration: "line-through", display: item.discount ? "inline" : "none" }}>{item.actualPrice?.toLocaleString('en-IN')}</ProductMrpPrice>
                                            <DiscountDetail sx={{
                                                display: item.discount ? "inline" : "none"
                                            }}
                                                variant='p'>
                                                ( {item.discount}%
                                            </DiscountDetail>
                                            <DiscountDetail sx={{
                                                display: item.discount ? "inline" : "none"
                                            }} variant='p'> off )</DiscountDetail>

                                        </PriceForMobile>
                                        <Box sx={{ padding: "9px 0" }} >
                                            <ProductPrice2 variant='p' >
                                                Save ₹
                                                {item.discount == 0 ? 0 : (item.discountedPrice - item.discount).toLocaleString('en-IN')}
                                            </ProductPrice2>
                                            <Typography sx={{ padding: "10px", fontSize: ".9rem" }} variant='p' >
                                                with this offer
                                            </Typography>
                                        </Box>
                                    </MobileViewPrice>
                                    <Typography variant='p' sx={{
                                        color: "red", fontSize: ".9rem",
                                        display: (item.quantity == 0 || item.quantity > 5) ? "none" : "inline"
                                    }} >
                                        Only {item.quantity} left in stock
                                    </Typography>
                                    {!item.quantity == 0 ?
                                        <BuyButton variant='contained'
                                            size='smaller'
                                            disableRipple
                                            disableElevation
                                            onClick={handleOpen}
                                        >Buy Now</BuyButton> :
                                        <OutOfStackButton variant='outlined'
                                            size='smaller'
                                            disableRipple
                                            disableElevation
                                        >Out of stock</OutOfStackButton>}
                                </ProductPrice>
                            </ProductDetails>
                        </CustomProductCard>)
                })}
            </ProductCardContainer>
            <BuyModal
                open={open}
                handleClose={handleClose}
                handleOpen={handleOpen}
            />
        </>
    )
}

export default Product
