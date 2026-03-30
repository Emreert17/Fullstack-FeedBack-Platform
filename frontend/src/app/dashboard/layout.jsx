import SideBar from "../../components/Navbar/AfterLogin/SideBar";
import TopBar from "../../components/Navbar/AfterLogin/TopBar";
import ProtectedRoute from "../../components/Protected/ProtectedRoute";

export default function DashboardLayout({ children }) {
  return (
    <>
      <ProtectedRoute>
        <div className="flex flex-col">
          <TopBar />
          <div className="flex">
            <SideBar />
            <main className="w-full py-5 px-12">{children}</main>
          </div>
        </div>
      </ProtectedRoute>
    </>
  );
}
