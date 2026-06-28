import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Settings,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    name: "Users",
    icon: Users,
    path: "/users",
  },
  {
    name: "Products",
    icon: Package,
    path: "/products",
  },
  {
    name: "Orders",
    icon: ShoppingCart,
    path: "/orders",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-blue-600">
          AdminPro
        </h1>
      </div>

      <nav className="mt-5">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `mx-3 mb-2 flex items-center gap-3 rounded-lg px-4 py-3 ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100"
                }`
              }
            >
              <Icon size={20} />

              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}