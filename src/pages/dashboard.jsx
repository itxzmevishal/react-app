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
  HiChevronRight,
  HiChevronDown,
} from "react-icons/hi";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const menuItems = [
    {
      name: "Administration",
      icon: HiUserGroup,
      dropdown: [
        {
          name: "Registration",
          submenu: [
            { name: "Add Registration", path: "/dashboard/registration/add" },
            { name: "View Registration", path: "/dashboard/registration/view" },
          ],
        },
        {
          name: "Users",
          submenu: [
            { name: "Add User", path: "/dashboard/users/add" },
            { name: "View Users", path: "/dashboard/users/view" },
          ],
        },
        {
          name: "Addmission",
          submenu: [
            { name: "Add Employee", path: "/dashboard/addmission/add" },
            { name: "View Users", path: "/dashboard/users/view" },
          ],
        },
      ],
    },
    {
      name: "Accounts",
      icon: HiCurrencyDollar,
      dropdown: [
        {
          name: "Invoices",
          submenu: [
            { name: "Create Invoice", path: "/dashboard/invoices/create" },
            { name: "View Invoices", path: "/dashboard/invoices/view" },
          ],
        },
      ],
    },
    {
      name: "Academics",
      icon: HiAcademicCap,
      dropdown: [
        {
          name: "Courses",
          submenu: [
            { name: "AI", path: "/dashboard/invoices/create" },
            { name: "ML", path: "/dashboard/invoices/view" },
          ],
        },
        { name: "Students", path: "/dashboard/students/add" },
      ],
    },
    {
      name: "Reports",
      icon: HiChartBar,
      dropdown: [{ name: "Daily Report", path: "/dashboard/reports/daily" }],
    },
    {
      name: "Mobile Apps",
      icon: HiDeviceMobile,
      dropdown: [
        { name: "iOS App", path: "/dashboard/ios/add" },
        { name: "Android App", path: "/dashboard/android/add" },
      ],
    },
    {
      name: "Communicate",
      icon: HiChat,
      dropdown: [
        { name: "Email", path: "/dashboard/communicate/email" },
        { name: "SMS", path: "/dashboard/communicate/sms" },
      ],
    },
    {
      name: "Help",
      icon: HiQuestionMarkCircle,
      dropdown: [
        { name: "Documentation", path: "/dashboard/help/docs" },
        { name: "Support", path: "/dashboard/help/support" },
      ],
    },
    {
      name: "Profile",
      icon: HiUserCircle,
      dropdown: [
        { name: "View Profile", path: "/dashboard/profile/view" },
        { name: "Settings", path: "/dashboard/profile/settings" },
      ],
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubmenu(null);
  };

  const toggleSubmenu = (parentIndex, childIndex) => {
    if (
      openSubmenu &&
      openSubmenu.parent === parentIndex &&
      openSubmenu.child === childIndex
    ) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu({ parent: parentIndex, child: childIndex });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar Fixed */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 py-3 bg-[#023561] shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-10 rounded-full mr-2" />
          <span className="text-white font-semibold text-lg">My Dashboard</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-6 text-white font-medium">
          {menuItems.map((menu, idx) => {
            const Icon = menu.icon;
            const isRightAligned = menu.name === "Help" || menu.name === "Profile"; // ye left ki taraf khulega
            return (
              <li
                key={idx}
                className="relative group flex flex-col items-center cursor-pointer"
              >
                <Icon className="text-2xl mb-1" />
                <span className="text-sm">{menu.name}</span>

                {/* Dropdown */}
                {menu.dropdown && (
                  <ul
                    className={`absolute ${
                      isRightAligned ? "right-0" : "left-0"
                    } top-[118%] mt-2 bg-white text-gray-800 shadow-lg rounded-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200`}
                  >
                    {menu.dropdown.map((item, i) => (
                      <li key={i} className="relative group/sub">
                        <Link
                          to={item.path || "#"}
                          className="flex justify-between px-4 py-2 hover:bg-gray-100"
                          onClick={(e) => item.submenu && e.preventDefault()}
                        >
                          {item.name}
                          {item.submenu && <HiChevronRight className="ml-2" />}
                        </Link>

                        {item.submenu && (
                          <ul
                            className={`absolute top-0 ${
                              isRightAligned ? "right-full mr-1" : "left-full ml-1"
                            } bg-white shadow-lg rounded-md min-w-[160px] opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200`}
                          >
                            {item.submenu.map((sub, si) => (
                              <li key={si}>
                                <Link
                                  to={sub.path}
                                  className="block px-4 py-2 hover:bg-gray-100"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Hamburger */}
        <div
          className="lg:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="lg:hidden fixed top-0 right-0 h-full w-64 bg-[#023561] text-white p-6 overflow-y-auto">
            <div className="flex justify-end mb-6">
              <HiX
                className="text-3xl cursor-pointer"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            {menuItems.map((menu, idx) => (
              <li key={idx}>
                <div
                  className="flex justify-between py-2 cursor-pointer"
                  onClick={() => toggleDropdown(idx)}
                >
                  <span className="flex items-center">
                    <menu.icon className="mr-2" />
                    {menu.name}
                  </span>
                  {menu.dropdown && (
                    <span>
                      {openDropdown === idx ? (
                        <HiChevronDown />
                      ) : (
                        <HiChevronRight />
                      )}
                    </span>
                  )}
                </div>
                {menu.dropdown && openDropdown === idx && (
                  <ul className="ml-4 border-l border-gray-400 pl-2">
                    {menu.dropdown.map((item, i) => (
                      <li key={i}>
                        <div
                          className="flex justify-between py-1 cursor-pointer"
                          onClick={() => toggleSubmenu(idx, i)}
                        >
                          <span>{item.name}</span>
                          {item.submenu && (
                            <span>
                              {openSubmenu?.parent === idx &&
                              openSubmenu?.child === i ? (
                                <HiChevronDown />
                              ) : (
                                <HiChevronRight />
                              )}
                            </span>
                          )}
                        </div>
                        {item.submenu &&
                          openSubmenu?.parent === idx &&
                          openSubmenu?.child === i && (
                            <ul className="ml-4 border-l border-gray-400 pl-2">
                              {item.submenu.map((sub, si) => (
                                <li key={si}>
                                  <Link
                                    to={sub.path}
                                    className="block py-1 hover:underline"
                                    onClick={() => setMenuOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </nav>

      {/* Content */}
      <main className="flex-1 mt-16 overflow-y-auto p-0">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
