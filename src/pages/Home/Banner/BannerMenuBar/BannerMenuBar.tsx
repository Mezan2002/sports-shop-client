import { Card } from "@nextui-org/react";
import { BsCamera, BsKeyboard, BsPrinter, BsSmartwatch } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { PiFireBold, PiGameControllerDuotone } from "react-icons/pi";
import { RiComputerLine } from "react-icons/ri";
import { SlScreenTablet } from "react-icons/sl";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";

const BannerMenuBar = () => {
  const bannerMenuItems = [
    {
      title: "Computer & Laptop",
      href: "/",
      icon: <RiComputerLine className="h-5 w-5 mr-2" />,
    },
    {
      title: "Tablet & IPad",
      href: "/",
      icon: <SlScreenTablet className="h-5 w-5 mr-2" />,
    },
    {
      title: "Printer",
      href: "/",
      icon: <BsPrinter className="h-5 w-5 mr-2" />,
    },
    {
      title: "Smartphones",
      href: "/",
      icon: <FiSmartphone className="h-5 w-5 mr-2" />,
    },
    {
      title: "Cameras",
      href: "/",
      icon: <BsCamera className="h-5 w-5 mr-2" />,
    },
    {
      title: "Keyboard & Mouse",
      href: "/",
      icon: <BsKeyboard className="h-5 w-5 mr-2" />,
    },
    {
      title: "Video Games",
      href: "/",
      icon: <PiGameControllerDuotone className="h-5 w-5 mr-2" />,
    },
    {
      title: "Smart Watch",
      href: "/",
      icon: <BsSmartwatch className="h-5 w-5 mr-2" />,
    },
    {
      title: "Headphones & Audios",
      href: "/",
      icon: <TfiHeadphoneAlt className="h-5 w-5 mr-2" />,
    },
    {
      title: "Hot Selling Products",
      href: "/",
      icon: <PiFireBold className="h-5 w-5 mr-2" />,
    },
  ];
  return (
    <div>
      <Card className="shadow-none">
        <div className="px-8 pt-2 pb-2">
          <ul className="text-sm font-semibold">
            {bannerMenuItems.map((item, i) => (
              <li
                key={i}
                className={`py-3.5 hover:text-indigo-500 duration-500  flex items-center ${
                  i === 9 ? "border-b-none" : "border-b-1"
                }`}
              >
                <span>{item.icon}</span>
                <Link to={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default BannerMenuBar;
