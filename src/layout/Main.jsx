import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Home from "../pages/Home/Home/Home";


const Main = () => {
    return (
        <div className="bg-[#010E17]">
            <NavBar />
            <Outlet />
            {/* <Home /> */}
        </div>
    );
};

export default Main;