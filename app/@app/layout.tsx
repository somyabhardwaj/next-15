import Sidebar from "../../components/sidebar/Sidebar";
import TopNavbar from "../../components/navbar/Navbar";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div style={{ width: 240 }}>
        <Sidebar />
      </div>
      <div className="w-full">
        <TopNavbar />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
} 