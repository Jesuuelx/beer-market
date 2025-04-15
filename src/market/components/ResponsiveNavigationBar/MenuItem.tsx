"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface MenuItemProps {
  path: string;
  icon: JSX.Element;
  title: string;
}

export const MenuItem = ({ path, icon, title }: MenuItemProps) => {
  const pathName = usePathname();
  const isActive = pathName === path;
  return (
    <li className="w-1/3">
      <Link
        href={path}
        className={`flex flex-col items-center py-3 px-2 transition-colors ${
          isActive ? "text-brand" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {icon}
        <span className="text-xs lg:text-sm">{title}</span>
      </Link>
    </li>
  );
};
