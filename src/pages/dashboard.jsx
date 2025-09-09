import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/images/logo.jpg";
import {
  HiMenu,
  HiX,
  HiUserGroup,
  HiCurrencyDollar,
  HiAcademicCap,
  HiChartBar,
  HiDeviceMobile,
  HiChat,
  HiQuestionMarkCircle,
  HiUserCircle,
} from "react-icons/hi";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      name: "Administration",
      icon: HiUserGroup,
      dropdown: [
        { name: "Registration", path: "/dashboard/registration" },
        { name: "Users", path: "/dashboard/users" },
        { name: "Roles", path: "/dashboard/roles" },
      ],
    },
    {
      name: "Accounts",
      icon: HiCurrencyDollar,
      dropdown: [
        { name: "Invoices", path: "/dashboard/invoices" },
        { name: "Payments", path: "/dashboard/payments" },
        { name: "Reports", path: "/dashboard/account-reports" },
      ],
    },
    {
      name: "Academics",
      icon: HiAcademicCap,
      dropdown: [
        { name: "Courses", path: "/dashboard/courses" },
        { name: "Students", path: "/dashboard/students" },
        { name: "Exams", path: "/dashboard/exams" },
      ],
    },
    {
      name: "Reports",
      icon: HiChartBar,
      dropdown: [
        { name: "Daily Report", path: "/dashboard/daily-report" },
        { name: "Monthly Report", path: "/dashboard/monthly-report" },
        { name: "Annual Report", path: "/dashboard/annual-report" },
      ],
    },
    {
      name: "Mobile Apps",
      icon: HiDeviceMobile,
      dropdown: [
        { name: "iOS App", path: "/dashboard/ios" },
        { name: "Android App", path: "/dashboard/android" },
      ],
    },
    {
      name: "Communicate",
      icon: HiChat,
      dropdown: [
        { name: "Email", path: "/dashboard/email" },
        { name: "SMS", path: "/dashboard/sms" },
        { name: "Chat", path: "/dashboard/chat" },
      ],
    },
    {
      name: "Help",
      icon: HiQuestionMarkCircle,
      dropdown: [
        { name: "FAQ", path: "/dashboard/faq" },
        { name: "Support", path: "/dashboard/support" },
        { name: "Contact Us", path: "/dashboard/contact" },
      ],
    },
    {
      name: "Profile",
      icon: HiUserCircle,
      dropdown: [
        { name: "My Account", path: "/dashboard/account" },
        { name: "Settings", path: "/dashboard/settings" },
        { name: "Logout", path: "/dashboard/logout" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar Fixed */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 md:px-6 py-3 bg-[#023561] shadow-md">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-4">
          <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-white font-semibold text-lg">My Dashboard</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-wrap gap-6 text-white font-medium relative">
          {menuItems.map((menu, idx) => {
            const Icon = menu.icon;
            return (
              <li
                key={idx}
                className="relative group flex flex-col items-center justify-end cursor-pointer"
              >
                <Icon className="text-2xl mb-1" />
                <span className="text-sm">{menu.name}</span>
                <ul
                  className={`absolute left-0 top-full bg-white text-gray-800 shadow-lg rounded-md min-w-[160px] max-h-60 overflow-y-auto z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                    menu.name === "Profile" ? "right-0 left-auto" : ""
                  }`}
                >
                  {menu.dropdown.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-[#023561] text-white transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 p-6 lg:hidden`}
        >
          <div className="flex justify-end mb-6">
            <HiX
              className="text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          </div>

          <ul className="flex flex-col space-y-4">
            {menuItems.map((menu, idx) => {
              const Icon = menu.icon;
              return (
                <li key={idx}>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleDropdown(idx)}
                  >
                    <span className="flex items-center font-semibold">
                      <Icon className="text-xl mr-2" />
                      {menu.name}
                    </span>
                    <span>{openDropdown === idx ? "-" : "+"}</span>
                  </div>
                  {openDropdown === idx && (
                    <ul className="mt-2 flex flex-col space-y-1 pl-4 max-h-60 overflow-y-auto">
                      {menu.dropdown.map((item, i) => (
                        <li key={i}>
                          <Link
                            to={item.path}
                            className="block px-2 py-1 hover:bg-[#03508C] rounded"
                            onClick={() => setMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Content Scrollable */}
      <div className="flex-1 mt-15 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
