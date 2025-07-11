import { Route, Routes } from 'react-router'
import { Navigate } from "react-router";
import { Suspense } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material'
import Layout from '../components/pages/Layout';
import { ROUTE_PATH } from './routepath';
import { Category, Error, Landing, Login, Product, Register, SubCategory, ViewProductDetails } from './route';


const RouterPath = [
    {
        path: ROUTE_PATH.home,
        element: <Navigate to="/landing" replace />,
    },
    {
        path: ROUTE_PATH.landing,
        element: <Landing />,
    },
    {
        path: ROUTE_PATH.category,
        element: <Category />,
    },
    {
        path: ROUTE_PATH.subcategory,
        element: <SubCategory />,
    },
    {
        path: ROUTE_PATH.product,
        element: <Product />,
    },
    {
        path: ROUTE_PATH.viewProductDetail,
        element: <ViewProductDetails />,
    },
    {
        path: ROUTE_PATH.error,
        element: <Error />
    }

]


const RouterPath_validation = [
    {
        path: ROUTE_PATH.register,
        element: <Register />,
    },
    {
        path: ROUTE_PATH.login,
        element: <Login />,
    },
]

const Root = () => {

    return (
        <>
            <Suspense fallback={
                <Box sx={{
                    position: "fixed",
                    top: 0, left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "transparent",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <CircularProgress />
                </Box>}>
                <Routes>

                    {RouterPath_validation.map(({ path, element }, index) => (
                        <Route key={index} path={path} element={element} />
                    ))}

                    <Route path="" element={<Layout />} >
                        {RouterPath.map(({ path, element }, index) => (
                            <Route key={index} path={path} element={element} />
                        ))}
                    </Route>

                </Routes>
            </Suspense>
        </>
    )
}

export default Root
