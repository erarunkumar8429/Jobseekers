import { Outlet } from "react-router-dom";
import Header from "../Admin/Header";
import Sidebar from "../Admin/Sidebar";
import Footer from "../Admin/Footer";
import "./Common.css";

const DashboardLayout = () => {
return (
<div className="layout">
<Header />
<div className="body">
<Sidebar />
<main className="content">
<Outlet />
</main>
</div>
<Footer />
</div>
);
};


export default DashboardLayout;