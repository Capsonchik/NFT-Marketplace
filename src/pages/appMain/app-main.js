import Header from "../../components/header/header";
import {Outlet} from "react-router-dom";
import Footer from "../../components/footer/footer";

export const AppMain = () => {
    return(
        <div className="App">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}