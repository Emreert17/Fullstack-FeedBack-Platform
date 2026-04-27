"use client";
import SideBar from "../../components/Navbar/AfterLogin/SideBar";
import TopBar from "../../components/Navbar/AfterLogin/TopBar";
import ProtectedRoute from "../../components/Protected/ProtectedRoute";
import usePageMeta from "../hooks/usePageMeta";

export default function DashboardLayout({ children }) {
  usePageMeta();
  return (
    <>
      <ProtectedRoute>
        <div className="flex flex-col">
          <TopBar />
          <div className="flex">
            <SideBar />
            <main className="w-full py-2 px-10">{children}</main>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}
