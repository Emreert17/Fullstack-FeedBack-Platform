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
        <div className="flex min-h-screen flex-col bg-slate-50">
          <TopBar />

          <div className="flex flex-1">
            <SideBar />

            <main className="flex-1 h-screen overflow-y-auto">{children}</main>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}
