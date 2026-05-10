import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { NavLink } from "react-router";

export function AppSidebar() {
    const sidebarLinks = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "My Parcels",
        href: "/dashboard/my-parcels",
      },
      {
        label: "Settings",
        href: "/dashboard/settings",
      }
    ]
  return (
    <Sidebar>
      <SidebarContent>
        {/* Your navigation links go here */}
        {sidebarLinks.map((link) => (
          <NavLink to={link.href} key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}