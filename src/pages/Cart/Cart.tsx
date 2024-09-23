import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { BiCheckDouble, BiMinus, BiPlus } from "react-icons/bi";
import { FaRegTrashCan } from "react-icons/fa6";
import { RiArrowRightSLine, RiHeart3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";

type TCartItem = {
  productId: string;
  name: string;
  image: string;
  price: string | number;
  availability: number;
  allColors?: string[];
  allSizes?: string[];
  color?: string;
  size?: string;
  quantity: number;
};

const Cart = () => {
  const cartFromStorage = localStorage.getItem("cart");
  const cartItems = cartFromStorage ? JSON.parse(cartFromStorage) : [];
  return (
    <section>
      <NavigationHeader />
      <div className="flex items-start gap-5 mt-10">
        <div className="flex-[2]">
          <div className="border-b pb-5">
            <h3 className="text-3xl font-semibold text-gray uppercase">
              Shoping cart
            </h3>
            <p className="font-medium text-gray-400">
              You have {cartItems.length < 9 && 0}
              {cartItems.length} items in your cart
            </p>
          </div>
          {cartItems.map((item: TCartItem) => {
            const sizeCount = item.allSizes?.length ?? 0;
            const colorCount = item.allColors?.length ?? 0;

            return (
              <div
                key={item.productId}
                className="mt-5 flex items-center justify-between gap-5 border-b pb-5"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gray-light rounded-xl inline-block p-3">
                    <img
                      src={item.image}
                      className="h-36 w-28 object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h6>

                    <p className="font-medium">
                      ${item.price} |{" "}
                      <span className="text-green-600">
                        {item.availability}
                      </span>
                    </p>
                    <div className="flex items-center gap-3 mt-8">
                      {sizeCount > 0 && (
                        <Select
                          radius="sm"
                          placeholder={item.allSizes![0]}
                          defaultSelectedKeys={item.allSizes![0]}
                          className="w-36"
                        >
                          {item.allSizes!.map((size) => (
                            <SelectItem key={size}>{size}</SelectItem>
                          ))}
                        </Select>
                      )}
                      {colorCount > 0 && (
                        <Select
                          radius="sm"
                          placeholder={item.allColors![0]}
                          defaultSelectedKeys={item.allColors![0]}
                          className="w-36"
                        >
                          {item.allColors!.map((color) => (
                            <SelectItem key={color}>{color}</SelectItem>
                          ))}
                        </Select>
                      )}

                      <div className="h-12 flex w-40 justify-between items-center p-2 rounded-full bg-gray-light border">
                        <button className="bg-indigo-500 text-white rounded-full p-2">
                          <BiMinus />
                        </button>
                        <p>{item.quantity}</p>
                        <button className="bg-indigo-500 text-white rounded-full p-2">
                          <BiPlus />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="text-2xl font-semibold text-indigo-500 mb-14 text-right">
                    ${Number(item.price) * Number(item.quantity)}
                  </h5>
                  <div className="flex items-center gap-3">
                    <Button className="bg-transparent border text-gray font-medium">
                      Add to wishlist <RiHeart3Line size={20} />
                    </Button>
                    <Button className="bg-red-500 text-white font-medium">
                      Delete <FaRegTrashCan size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex-1 border rounded-lg p-10 flex flex-col w-10/12 mx-auto">
          <h3 className="text-3xl font-semibold text-gray mb-5 uppercase">
            Summary
          </h3>
          <div className="border-b border-dashed pb-5 border-gray-800">
            <Input
              placeholder="Apply your promo code"
              radius="sm"
              endContent={
                <div className="flex items-center gap-1 cursor-pointer border-l border-gray-950 pl-2">
                  <p className="text-gray-800 font-medium">Apply</p>
                  <BiCheckDouble size={24} className="text-gray-800" />
                </div>
              }
            />
            <p className="text-sm text-gray-900 mt-2">
              Get 20% off by using promo code!
            </p>
          </div>
          <div className="border-b border-dashed pb-5 border-gray-800">
            <div>
              <p className="text-sm font-bold text-gray-900 mt-2 flex justify-between items-center">
                Subtotal{" "}
                <span className="text-sm font-bold text-gray-900 text-right">
                  $50.00
                </span>
              </p>
              <p className="text-sm font-bold text-gray-900 mt-2 flex justify-between items-center">
                Tax{" "}
                <span className="text-sm font-bold text-gray-900 text-right">
                  15%
                </span>
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-900 mt-2">
                  Discount <span>(if you have promo code)</span>{" "}
                </p>
                <span className="text-sm font-bold text-gray-900 text-right">
                  20%
                </span>
              </div>
            </div>
          </div>
          <h6 className="flex items-center justify-between mt-2 text-lg font-bold">
            Total <span className="text-right">$58.00</span>
          </h6>
          <Link to="/checkout">
            <Button
              className="bg-indigo-500 text-white font-semibold mt-20 w-full"
              radius="sm"
            >
              Procced to checkout{" "}
              <RiArrowRightSLine size={22} className="text-white" />{" "}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;
