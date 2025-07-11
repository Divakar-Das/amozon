import { Outlet } from "react-router";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import SignInButton from "../shared/button/SignInButton";
import { useSelector } from "react-redux";
import Loading from "../shared/loading/Loading";


const Layout = () => {
    const isLogged = useSelector((state) => state.auth.isLogged);

    return (
        <>
            <Header />
            <Navbar />
            <main>
                <Loading />
                <Outlet />
            </main>
            {!isLogged && <SignInButton />}
            <Footer />

        </>
    )
}

export default Layout
