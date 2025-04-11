import MobileSidebar from "@/components/ui/dashboard/mobileSidebar";
import Sidebar from "@/components/ui/dashboard/sidebar";

const links = [
  { name: "Journals", href: "/journal" },
  { name: "History", href: "/history" },
];

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <MobileSidebar />
      <main className="flex-1 overflow-auto">
        <div className="md:p-8 p-4 pt-16 md:pt-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
