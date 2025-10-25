
import Baslik from "./Baslik";
import { MyNavbar } from "./myNavbar";
import { Outlet } from "react-router-dom";
import { SayfaSonu } from "./SayfaSonu";

export const Layout = () => {
  return (
      <div className="min-h-screen dark:bg-gray-900  ">
        <div className="lg:ml-8 lg:mr-8">
        <MyNavbar/>
        <Baslik/>
        <div >
          <Outlet />
        </div>
        <SayfaSonu/>
      </div>
      </div>
  );
};