"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CakeIcon,
  MapIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { name: "Index", path: "/", icon: HomeIcon },
    { name: "Map", path: "/home", icon: MapIcon },
    { name: "About", path: "/about", icon: CakeIcon },
    { name: "Order", path: "/contents", icon: DocumentDuplicateIcon },
    { name: "Contact us", path: "/contactus", icon: UserGroupIcon },
  ];

  return (
    <>
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    {/* <div className="max-w-screen-xl flex flex-wrap mx-auto p-4"> */}
    {/* <div className="sticky top-0 flex items-center justify-between border-b border-slate-200 bg-white py-6 px-8"> */}
    <div class="flex flex-wrap  mx-auto p-4">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.path}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium text-black hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 no-underline",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
      </div>
      </nav>
    </>
  );
}
