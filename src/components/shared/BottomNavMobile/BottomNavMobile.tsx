import { Badge } from "@nextui-org/react";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { BsShop } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";

const BottomNavMobile = () => {
  return (
    <section>
      <div className="fixed px-6 bottom-0 w-full md:hidden flex items-center justify-between shadow-small bg-white py-3 z-50">
        <div className="flex flex-col items-center justify-center">
          <HiOutlineHome size={30} />
          <p className="text-sm font-medium">Home</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <AiOutlineUser size={30} />
          <p className="text-sm font-medium">Account</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <BsShop size={30} />
          <p className="text-sm font-medium">Shop</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Badge content="0" size="md" className="bg-indigo-500 text-white">
            <AiOutlineHeart size={30} />
          </Badge>
          <p className="text-sm font-medium">Wishlist</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Badge content="0" size="md" className="bg-indigo-500 text-white">
            <AiOutlineShoppingCart size={30} />
          </Badge>
          <p className="text-sm font-medium">Cart</p>
        </div>
      </div>
    </section>
  );
};

export default BottomNavMobile;
