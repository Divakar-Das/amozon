import { useEffect, useState } from "react";
import { BannerImg } from "../../constants/constantImage";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";
import { GetRequest } from "../../api/config";
import { CustomBanner, CustomBoxMobile, CustomCard, CustomCardMobile, CustomGridTable, CustomImageList, CustomImageList2, CustomImageTitle, CustomImageTitleMobile, CustomLanding, CustomTextMobile } from "../../styles/landing";
import { useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import SnackBar from "../shared/snackbar/SnackBar";
import { landing } from "../../api/apiPath";


// --------------------------------------------------------
const Landing = () => {
    
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const [image, setImage] = useState([]);
    const [allproduct, setAllProduct] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const bannerImage = await GetRequest(BannerImg);
                const Items = await GetRequest(landing);
                setAllProduct(Items)
                setImage(bannerImage?.[4]?.bannerImagePath)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])


    const navigate = useNavigate();
    return (
        <>
            {!isMobile ?
                <CustomLanding>
                    <CustomBanner src={image} width={"100%"} alt="banner Image" />
                    <CustomGridTable container spacing={3} >
                        {allproduct.map((item, index) => {
                            const firstProduct = item.product?.[0];
                            const imgUrl = firstProduct.fileBaseUrl.replace("http://api-ecommerce-app.bluetickcoders.com","/api") + firstProduct.productImages?.[0].productImagePath;

                            return (
                                <Grid key={index} size={{ xs: 4, lg: 3, sm: 8, md: 4 }}>
                                    <CustomCard >
                                        <CustomImageTitle variant="p">{item.name}</CustomImageTitle>
                                        <Box>
                                            <CustomImageList onClick={()=>navigate(`/product?subCategoryId=${item.id}`)} src={imgUrl} width={121} height={121} alt="logo" />
                                        </Box>
                                    </CustomCard>
                                </Grid>
                            );
                        })}

                    </CustomGridTable>
                </CustomLanding>
                :
                <>
                    <CustomBanner src={image} alt="banner Image" />
                    <CustomBoxMobile>
                        <CustomTextMobile variant="p" component={"div"}> Top Products picked for you</CustomTextMobile>

                        <Box sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit,minmax(150px,1fr))",
                            margin:"20px auto"

                        }} >
                            {allproduct.map((item, index) => {
                                const firstProduct = item.product?.[0];
                                const imgUrl = firstProduct.fileBaseUrl + firstProduct.productImages[0]?.productImagePath;

                                const productName = firstProduct.product?.[0].name;

                                return (
                                    <CustomCardMobile size={{ xs: 8, sm: 3, md: 12 }}
                                        key={index}>
                                        <Box sx={{ textAlign: "center" }} >
                                            <CustomImageTitleMobile variant="p">{item.name}</CustomImageTitleMobile>
                                            <CustomImageList2 onClick={()=>navigate(`/product?subCategoryId=${item.id}`)} src={imgUrl} alt="logo" />
                                        </Box>

                                    </CustomCardMobile>
                                );
                            })}
                        </Box>
                    </CustomBoxMobile>

                </>
            }
        </>
    )
}

export default Landing
