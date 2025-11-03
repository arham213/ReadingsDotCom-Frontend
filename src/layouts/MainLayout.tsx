import { Outlet } from "react-router-dom"
import "../assets/styles/global.css";

const MainLayout = () => {
    return (
        <main className="container">
            <Outlet />
        </main>
    )
}

export default MainLayout;