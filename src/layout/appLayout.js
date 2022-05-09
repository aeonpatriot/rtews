import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";

export const AppLayout = () => {
    return <div style={{
        padding: '20px 0px 0px 240px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
};