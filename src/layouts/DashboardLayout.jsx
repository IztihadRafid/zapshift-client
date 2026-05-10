import { AppSidebar } from "@/components/ui/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar>
          
        </AppSidebar>
        <main>
          <SidebarTrigger />
          <Outlet></Outlet>
        </main>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
