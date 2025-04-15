import { IoBody } from "react-icons/io5";

import { IoStorefront } from "react-icons/io5";

import { IoCartOutline } from "react-icons/io5";
import { MenuItem } from "./MenuItem";

export const ResponsiveNavigationBar = () => {
  const navItems = [
    {
      path: "/dashboard/main",
      title: "Home",
      icon: <IoStorefront className="w-6 h-6 mb-1" />,
    },
    {
      path: "/dashboard/orders",
      title: "Orders",
      icon: <IoCartOutline className="w-6 h-6 mb-1" />,
    },
    {
      path: "/",
      title: "Coming Soon",
      icon: <IoBody className="w-6 h-6 mb-1" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-md z-10">
      <ul className="flex items-center justify-around">
        {navItems.map((item) => (
          <MenuItem key={item.path} {...item} />
        ))}
      </ul>
    </nav>
  );
};
