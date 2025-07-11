import { lazy } from "react";

export const Landing = lazy(() => import("../components/pages/Landing"));
export const Category = lazy(() => import("../components/pages/category/Category"));
export const SubCategory = lazy(() => import("../components/pages/category/SubCategory"));
export const Product = lazy(() => import("../components/pages/product/Product"));
export const ViewProductDetails = lazy(() => import("../components/pages/product/ViewProductDetails"));
export const Register = lazy(() => import("../components/pages/login/Register"));
export const Login = lazy(() => import("../components/pages/login/Login"));
export const Error = lazy(()=> import("../components/pages/Error"))


export const Root = lazy(()=>import("../routes/Root"));
export const SnackBar = lazy(()=>import("../components/shared/snackbar/SnackBar"))
export const BuyModal = lazy(()=>import("../components/shared/buynow/BuyModal"))
export const ProductTable = lazy(()=>import("../components/pages/table/ProductTable"))