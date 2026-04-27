"use client";
import SideBar from "../../components/Navbar/AfterLogin/SideBar";
import TopBar from "../../components/Navbar/AfterLogin/TopBar";
import ProtectedRoute from "../../components/Protected/ProtectedRoute";
import usePageMeta from "../hooks/usePageMeta";

export default function DashboardLayout({ children }) {
  usePageMeta();
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-stone-50/50">
        <TopBar />
        <div className="flex">
          <SideBar />
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
