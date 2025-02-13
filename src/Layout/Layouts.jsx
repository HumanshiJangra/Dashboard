import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

export default function Layouts() {
  return (
    <>
      <div className="main-wrapper min-h-[100vh]">
        <div className="left-sidebar bg-white">
          <Sidebar />
        </div>
        <div className="right-content">
          <div className="header-wrapper bg-[#fff]">
            <Header />
          </div>
          <div className="outlet-wrapper h-full p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
