import {
  Badge,
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Home",
    "All Products",
    "About us",
    "Manage Products",
    "Log Out",
  ];
  const navItems = [
    { title: "Home", path: "/" },
    { title: "All Products", path: "/all-products" },
    { title: "About us", path: "/about-us" },
    { title: "Manage Products", path: "/manage-products" },
    { title: "Support", path: "/support" },
  ];
  return (
    <div className="sticky top-0 bg-white z-50 pt-1">
      <Navbar
        className="bg-white mt-3"
        onMenuOpenChange={setIsMenuOpen}
        maxWidth="2xl"
      >
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarContent className="w-4/12 items-center">
          <div className="md:hidden block">
            <Link to="/">
              <img
                draggable
                src="/src/assets/images/logo.png"
                alt="Champso Logo"
              />
            </Link>
          </div>
          <div className="mr-4 hidden md:flex">
            <Link to="/">
              <img
                draggable
                src="/src/assets/images/logo.png"
                alt="Champso Logo"
                className="w-40"
              />
            </Link>
          </div>
        </NavbarContent>

        <div className="hidden w-fit md:block mx-auto">
          <ul className="flex items-center gap-8">
            {navItems.map((nav) => (
              <li key={nav.title}>
                <Link
                  to={nav.path}
                  className="text-black uppercase font-semibold"
                >
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <NavbarContent as="div" className="items-center w-3/12" justify="end">
          <div className="md:flex items-center hidden">
            <AiOutlineUser size={35} className="mr-1" />
            <div>
              <span className="text-xs text-gray-300">Log In</span>
              <p className="text-sm text-gray-600 -mt-1.5 font-medium">
                Account
              </p>
            </div>
          </div>
          <div className="hidden md:block mt-3">
            <Badge content="0" size="md" className="bg-indigo-500 text-white">
              <AiOutlineHeart size={32} />
            </Badge>
          </div>
          <Link to="/cart" className="mt-2">
            <div className="flex items-center">
              <Badge content="0" size="md" className="bg-indigo-500 text-white">
                <AiOutlineShoppingCart size={32} />
              </Badge>
              <div className="ml-2 mb-1 hidden md:block">
                <span className="text-xs text-gray-300">Cart</span>
                <p className="text-sm text-gray-600 -mt-1.5 font-medium">
                  $0.00
                </p>
              </div>
            </div>
          </Link>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                className="w-full border-b-2 py-2"
                to="/"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
