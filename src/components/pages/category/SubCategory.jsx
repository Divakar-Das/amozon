import { Box } from '@mui/material'
import { CategoryContainer, ProductBox, ProductCard, ProductHeading, ProductImage, ProductTitle } from '../../../styles/category'
import { useEffect, useState } from 'react';
import { GetRequest } from '../../../api/config';
import { useNavigate, useSearchParams } from 'react-router';
import { category } from '../../../api/apiPath';

const SubCategory = () => {

    const [Cname,setCname]=useState();
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');
    
    const navigate = useNavigate()

    const [subItems, setSubItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const AllCategories = await GetRequest(`${category}/${id}`);
                setSubItems(AllCategories.subCategories)
                setCname(AllCategories.name)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id])

    return (
        <>
            <Box sx={{ marginBottom: "40px" }} >
                <ProductHeading variant='p' component={"div"}>
                    {Cname}
                </ProductHeading>
                <CategoryContainer>
                    {subItems.map((item, index) => (
                        <ProductBox key={index}>
                            <ProductCard onClick={()=>navigate(`/product?subCategoryId=${item.id}`)} >
                                <ProductImage src={item.product[0].productImages[0].productImagePath} alt="" />
                            </ProductCard>
                            <ProductTitle variant='p' component={"div"}>{item.name}
                            </ProductTitle>
                        </ProductBox>
                    ))}
                </CategoryContainer>
            </Box>
        </>
    )
}

export default SubCategory
