import { AppBar, Box, Link, Stack, styled, Tooltip, tooltipClasses, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { GetRequest } from '../../api/config';
import { CustomLink, CustomTab, TabsContainer } from '../../styles/navbar';
import { CustomLocationMobile } from '../../styles/navbar';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { useNavigate, useSearchParams } from 'react-router';
import { getCategoriesWithSub } from '../../api/apiPath';

const Navbar = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const CategoriesName = await GetRequest(getCategoriesWithSub);
                setCategories(CategoriesName)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))`
  & .${tooltipClasses.tooltip} {
    background-color: white;
    color: #fff;
    width:100%;
    position: relative;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    top:-15px;
    font-size: 14px;
    padding: 5px;
    border-radius: 0px;
    box-shadow:0px 0px 7px 0px grey;
    }
    & .${tooltipClasses.arrow} {
        color: white;
  }
`;

    const navigate = useNavigate()

    return (

        <>
            <AppBar position='static' sx={{ background: "#232f3e" }} >
                <TabsContainer
                    value={false}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <CustomTab disableRipple onClick={() => navigate("/category")} label="All Category" />

                    {categories.map((item) => {
                        const tooltipContent = (
                            <Stack spacing={0.5}>
                                {item.subCategories.map((sub) => (
                                    <CustomLink sx={{fontFamily:"Rubik",fontWeight:"350"}} key={sub.id} to={`/${sub.name}`}
                                        onClick={() => navigate(`/product?subCategoryId=${sub.id}`)}
                                    >
                                        {sub.name}
                                    </CustomLink>
                                ))}
                            </Stack>
                        );

                        return (
                            <CustomTooltip key={item.id} title={tooltipContent} arrow placement="bottom">
                                <CustomTab disableRipple label={item.name}
                                    onClick={() => navigate(`/subcategory?id=${item.id}`)}
                                />
                            </CustomTooltip>
                        );
                    })}
                </TabsContainer>
                <CustomLocationMobile direction={"row"}>
                    <PlaceOutlinedIcon fontSize='small' />
                    <Box >
                        <Typography variant='p' sx={{ fontSize: ".9rem",fontFamily:"Rubik" }}  >Deliver to <span style={{ fontWeight: "bolder" }} >-</span> </Typography>
                        <Typography variant='p' sx={{ fontSize: ".9rem",fontFamily:"Rubik" }} >&nbsp;Update location</Typography>
                    </Box>
                </CustomLocationMobile>
            </AppBar>
        </>
    )
}

export default Navbar
