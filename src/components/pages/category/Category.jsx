import { Box } from '@mui/material'
import { CategoryContainer, ProductBox, ProductCard, ProductHeading, ProductImage, ProductTitle } from '../../../styles/category'
import { useEffect, useState } from 'react';
import { GetRequest } from '../../../api/config';
import { useNavigate } from 'react-router';
import { getCategoriesWithSub } from '../../../api/apiPath';


const Category = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const AllCategories = await GetRequest(getCategoriesWithSub);
                setCategories(AllCategories)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const navigate = useNavigate() 
    return (
        <>
            <Box sx={{ marginBottom: "40px" }} >
                <ProductHeading variant='p' component={"div"}>
                    Shop by Category
                </ProductHeading>
                <CategoryContainer>
                    {categories.map((item, index) => (
                        <ProductBox key={index} >
                            <ProductCard>
                                <ProductImage onClick={()=>navigate(`/subcategory?id=${item.id}`)} src={item.categoryImagePath.replace("http://api-ecommerce-app.bluetickcoders.com","/api")} alt="" />
                            </ProductCard>
                            <ProductTitle variant='p' component={"div"}>{item.name}
                            </ProductTitle>
                        </ProductBox>
                    ))
                    }
                </CategoryContainer>
            </Box>
        </>
    )
}

export default Category
