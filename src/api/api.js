import axios from "axios";
import Cookies from "../utils/Cookies";
import { hideLoading, showLoading } from "../components/store/loadingSlice";
import store from "../components/store/store";

const FetchApi = axios.create({
    baseURL: "/api"
})


FetchApi.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    store.dispatch(showLoading());
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

FetchApi.interceptors.response.use(
    (response) => {
        store.dispatch(hideLoading());
        return response;
    },
    (error) => {
        const url = error?.config?.url || '';
        if (url.includes('/login') || url.includes('/register')) {
            store.dispatch(hideLoading());
        } else {
            store.dispatch(hideLoading());
        }
        return Promise.reject(error);
    }
);

export default FetchApi