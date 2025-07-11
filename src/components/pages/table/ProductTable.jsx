import { Box, Divider, Stack, Typography } from "@mui/material"
import { GeneralDetail, Specifications, TableContent, TableTitle } from "../../../styles/productTable"

const ProductTable = ({ productDetail }) => {
    return (
        <>
            {productDetail?.length !== 0 &&
                <Box sx={{borderBottom:"1px solid #9999",marginBottom:"15px"}}  >
                   {productDetail && <Box sx={{ padding: "10px 0" }} >
                        <TableTitle variant="p">Product Specifications</TableTitle>
                    </Box>}
                    <TableContent>
                        {productDetail?.map((item, index) => (
                            <Specifications key={index}  >
                                <Divider />
                                <Stack direction={"row"} >
                                    <GeneralDetail variant="p" sx={{
                                        background: "#ebebeb",
                                        width: "80%"
                                    }} >
                                        {item.name}
                                    </GeneralDetail>
                                    <GeneralDetail variant="p" sx={{ flexGrow: 2, width: "100%" }} >
                                        {item.value}
                                    </GeneralDetail>
                                </Stack>
                            </Specifications>
                        ))
                        }
                    </TableContent>
                </Box>
            }
        </>
    )
}

export default ProductTable
