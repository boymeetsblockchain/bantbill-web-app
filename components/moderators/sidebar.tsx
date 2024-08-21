"use client";
import { House, Settings, User, Banknote,ArrowBigUpDash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: <House className="w-6 h-6" />,
    href: "/moderators"
  },
  {
    name: "Transactions",
    icon: <Banknote className="w-6 h-6" />,
    href: "/moderators/transactions"
  },
  {
    name: "Accounts",
    icon: <User className="w-6 h-6" />,
    href: "/moderators/accounts"
  },
  {
    name: "Create Content",
    icon: <ArrowBigUpDash className="w-6 h-6" />,
    href: "/moderators/create"
  },
];

export default sidebarItems;

export const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="h-full text-black p-4">
      <Image src='/logo.png' height={84} width={132} alt="logo" />
      <ul className="">
        {sidebarItems.map((item) => (
          <li key={item.name} className="flex items-center mb-4">
            <Link
              href={item.href}
              className={`flex items-center space-x-5 px-2 font-semibold ${
                pathname === item.href
                  ? "text-primarycolor border-l-4 border-primarycolor"
                  : "text-gray-400 "
              }`}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
