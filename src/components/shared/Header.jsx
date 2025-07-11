import { Box, Typography, Stack, IconButton, Divider, styled, tooltipClasses, Tooltip } from '@mui/material'
import cookies from '../../utils/Cookies';
import {
  DisclaimerTag,
  CustomHeader,
  CustomSearchBtn,
  CustomStack,
  CustomLang,
  CustomUserDetail,
  MobileIcon,
  CustomLocation,
  SearchButton,
  SearchBar,
  SearchBarContanier,
  CustomUserDetailMobile,
  StyledBadge,
  StyledLoactionMobile,
  ResponsiveBox,
  CustomMobileText,
  CustomMobileTitleText,
  CustomLanguageLink,
  CustomDrawerBox,
  CustomDrawer,
  CustomMenuItem,
  CustomAutoComplete,
  CustomLanguageTag
} from '../../styles/header'
import { imageUrl2, india } from '../../constants/constantImage'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GetRequest, PostRequest, PostRequest2 } from '../../api/config';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import { getCategoriesWithSub, subCatory } from '../../api/apiPath';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogged } from '../store/authSlice';
import { clearUserDetails } from '../store/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);

  const [subCategoryitem, setSubCategoryitem] = useState([]);
  const [allsubCategoryitem, setAllSubCategoryitem] = useState([]);
  const [categories, setCategories] = useState([]);
  const [allCategoryId, setAllCategoryId] = useState("")

  const navigate = useNavigate()
  const [searchBarId, setSearchBarId] = useState("");
  const [ipValue, setIpValue] = useState('');

  const userName = useSelector((state) => state.user.userName);
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(prev => !prev);
  };

  const DrawerList = (
    <CustomDrawerBox role="presentation" onClick={toggleDrawer}>
      <Box sx={{ background: "#232f3e", padding: "10px" }} >

        <CustomMobileText variant='p' sx={{ textAlign: "end" }} component={"div"}>Your Account</CustomMobileText>
        <CustomMobileText variant='p' sx={{ fontSize: "1.1rem", textAlign: "start" }} component={"div"}>Browse</CustomMobileText>
        <CustomMobileText variant='p' sx={{ fontSize: "1.4rem", textAlign: "start" }} component={"div"}>Amazon</CustomMobileText>

      </Box>
      <Divider />
      <CustomMobileTitleText onClick={() => {
        navigate("/landing")
        setIpValue("");
        setSearchBarId("")
        setAllCategoryId("");
      }}>
        <Typography variant='p' sx={{ fontWeight: "bolder" }} >Amazon Home</Typography>
        <HomeOutlinedIcon fontSize='large' />
      </CustomMobileTitleText>
      <Divider />
      <Stack direction={"column"}  >
        <Typography variant='p' sx={{ fontWeight: "bold", padding: "15px 20px" }} > Shop by Categories</Typography>
        {allsubCategoryitem.slice(0, 12).map((item, index) => (
          <Typography key={index} sx={{ padding: "15px 20px" }} variant='p'
            onClick={() => navigate(`/product?subCategoryId=${item.id}`)}
          > {item.name}</Typography>
        ))}
        <Typography sx={{ padding: "15px 20px" }} variant='p'
          onClick={() => {
            navigate("/category")
            setIpValue("");
            setSearchBarId("")
            setAllCategoryId("");
          }}
        > See All Categories</Typography>
      </Stack>
    </CustomDrawerBox >
  );

  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .${tooltipClasses.tooltip} {
      background-color: white;
      color: #fff;
      width:100%;
      position: relative;
      top:-15px;
      font-size: 14px;
      padding: 10px;
      border-radius: 0px;
      box-shadow:0px 0px 7px 0px grey;
      }
      & .${tooltipClasses.arrow} {
          color: white;
    }
  `;
  const CustomTooltipSign = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))`
    & .${tooltipClasses.tooltip} {
      background-color: white;
      color: #fff;
      width:100%;
      position: relative;
      top:-15px;
      font-size: 14px;
      padding: 5px 15px;
      border-radius: 0px;
      box-shadow:0px 0px 7px 0px grey;
      }
      & .${tooltipClasses.arrow} {
          color: white;
    }
  `;

  const Language = [
    "English - EN",
    "हिन्दी - HI",
    "தமிழ் - TA",
    "తెలుగు - TE",
    "ಕನ್ನಡ - KN",
    "മലയാളം - ML",
    "বাংলা - BN",
    "मराठी - MR",
  ]


  const handleChange = (event) => {
    setAllCategoryId(event.target.value);
    setIpValue("");
    setSearchBarId("")
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CategoriesName = await GetRequest(getCategoriesWithSub);
        setCategories(CategoriesName)
        const SubCategoriesName = await PostRequest(subCatory);
        setSubCategoryitem(SubCategoriesName.rows)
        setAllSubCategoryitem(SubCategoriesName.rows)
      } catch (error) {
        console.log(error);
      }
    }

    const handleCookie = () => {
      dispatch(setIsLogged(false))
    }
    handleCookie();
    fetchData();
  }, [])


  useEffect(() => {
    if (allCategoryId) {
      const filtered = allsubCategoryitem.filter((item) => String(item.categoryId) === String(allCategoryId));
      setSubCategoryitem(filtered);
    } else {
      setSubCategoryitem(allsubCategoryitem);
    }
  }, [allCategoryId])


  const tooltipLanguage = (
    <Stack direction={"column"}>
      {Language.map((lg, index) => (
        <CustomLanguageLink key={index} href="#">{lg}</CustomLanguageLink>
      ))}
    </Stack>
  )

  const handleLogout = () => {
    cookies.remove('userName', { path: '/' });
    cookies.remove('token', { path: '/' });
    cookies.remove('refreshToken', { path: '/' });
    cookies.remove('id', { path: '/' });
    dispatch(clearUserDetails());
    dispatch(setIsLogged(false))
    // navigate("/");
  };


  const tooltipSign = (
    <CustomLanguageTag
      onClick={() => isLogged ? handleLogout() : navigate("/login")}
    >
      {
        isLogged ? "Sign Out" : "Sign In"
      }
    </CustomLanguageTag>
  )


  const handleSearchbar = (event, newValue) => {
    setIpValue(newValue ? newValue : "")
    const filteredId = subCategoryitem.find((item) => item.name == newValue)
    setSearchBarId(filteredId ? filteredId.id : "")
    setAllCategoryId(filteredId ? filteredId.categoryId : "")
  }
  useEffect(() => {
    if (!userName) {
      dispatch(setIsLogged(false))
    } else {
      dispatch(setIsLogged(true))
    }
  }, [isLogged])





  const handleSearchbtn = () => {
    if (searchBarId) {
      navigate(`/product?subCategoryId=${searchBarId}`)
    } else if (allCategoryId)
      navigate(`/subCategory?id=${allCategoryId}`)
    else {
      navigate("/category")
    }
  }

  return (
    <>
      <DisclaimerTag>
        <Typography variant='p'>This app is only used for testing purpose</Typography>
      </DisclaimerTag>

      <CustomHeader position='static'>

        <ResponsiveBox>

          <Box sx={{ display: "flex", alignItems: "stretch" }} >
            <MobileIcon>
              <MenuIcon onClick={toggleDrawer} fontSize='large' />
            </MobileIcon>
            <CustomDrawer open={open} onClose={toggleDrawer}>
              {DrawerList}
            </CustomDrawer>

            <img style={{ cursor: "pointer" }} onClick={() => {
              navigate("/landing")
              setIpValue("");
              setSearchBarId("")
              setAllCategoryId("");
            }}
              src={imageUrl2} width={"118px"} height={"44px"} alt="logo" />
          </Box>
          <StyledLoactionMobile >

            <CustomUserDetailMobile>
              {isLogged ?
                <Typography
                  variant='p'
                  onClick={handleLogout}
                  sx={{
                    fontSize: ".9rem",
                    fontWeight: "bolder",
                    letterSpacing: "1px",
                    cursor: "pointer"
                  }}>
                  Hello,<br />{userName}
                </Typography>
                :
                <Typography
                  variant='p'
                  onClick={() => navigate("/login")}
                  sx={{
                    fontSize: ".9rem",
                    fontWeight: "bolder",
                    letterSpacing: "1px",
                    cursor: "pointer"
                  }}>
                  Hello,<br /> Sign in
                </Typography>}
            </CustomUserDetailMobile>
            <IconButton >
              <StyledBadge badgeContent={0} color="secondary">
                <ShoppingCartOutlinedIcon fontSize='large' />
              </StyledBadge>
            </IconButton>

          </StyledLoactionMobile>
        </ResponsiveBox>

        <CustomLocation direction={"row"}>
          <PlaceOutlinedIcon />
          <Box sx={{ cursor: "pointer" }} >
            <Typography variant='p' sx={{ fontSize: "12px", margin: "3px 0", fontFamily: "Rubik" }} component={"div"} >Deliver to</Typography>
            <Typography variant='p' component={"div"} sx={{ fontSize: "14px", fontFamily: "Rubik" }} >Update location</Typography>
          </Box>
        </CustomLocation>

        <SearchBarContanier direction={"row"}>
          <SearchButton
            value={allCategoryId}
            displayEmpty
            onChange={handleChange}
            size='small'
          >
            <CustomMenuItem sx={{ fontSize: "1rem" }} value={""}>All</CustomMenuItem>
            {categories.map((item, index) => (
              <CustomMenuItem key={index} value={item.id} >
                {item.name}</CustomMenuItem>
            ))}


          </SearchButton>

          <SearchBar
            id="free-solo-demo"
            freeSolo
            size='small'
            inputValue={ipValue}
            onInputChange={(event, newInputValue) => setIpValue(newInputValue)}
            onChange={handleSearchbar}
            options={subCategoryitem.map((item) => (
              item.name
            ))}
            renderInput={(params) => <CustomAutoComplete
              onKeyDown={e => {
                if (e.key === "Enter") {
                handleSearchbtn()
                }
              }}
              {...params}
              placeholder='Search Amazon.in'
            />}
          />

          <CustomSearchBtn
            onClick={handleSearchbtn}
          >
            <SearchIcon sx={{ color: "black" }} />
          </CustomSearchBtn>


        </SearchBarContanier>

        <CustomStack direction={"row"} spacing={{ lg: 1, xl: 3 }}>
          <Stack direction={"row"} >

            <CustomTooltip title={tooltipLanguage} arrow placement="bottom" >
              <CustomLang
                variant="outlined"
                disableRipple
                endIcon={<ArrowDropDownIcon sx={{ color: "white" }} />} >
                <img src={india} width={"20px"} alt="india" />
                <Typography variant='p' sx={{ marginLeft: "8px", color: "white" }} >EN</Typography>
              </CustomLang>
            </CustomTooltip>

          </Stack>

          <CustomTooltipSign title={tooltipSign} arrow placement="bottom">
            <CustomUserDetail >
              {isLogged ?
                <Typography
                  variant='p'
                  onClick={handleLogout}
                  sx={{ fontSize: ".8rem", cursor: "pointer" }}>
                  Hello,{userName}
                </Typography>
                :
                <Typography
                  variant='p'
                  onClick={() => navigate("/login")}
                  sx={{ fontSize: ".8rem", cursor: "pointer" }}>
                  Hello, sign in
                </Typography>}
              <Box sx={{ display: "flex", alignItems: "center" }} >
                <Typography
                  variant='p'
                  component={"div"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bolder",
                    fontFamily: "Roboto",
                  }} >
                  Accounts & Lists
                </Typography><ArrowDropDownIcon sx={{ color: "white" }} />
              </Box>
            </CustomUserDetail>
          </CustomTooltipSign>
        </CustomStack>

      </CustomHeader >
    </>
  )
}

export default Header