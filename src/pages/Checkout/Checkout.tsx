import {
  Button,
  cn,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  Radio,
  RadioGroup,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";
import { clearCart } from "../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TCartItem } from "../../types/types";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.cart);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [checkoutInfo, setCheckoutInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    addressType: "",
    paymentMethod: "",
  });

  const handleCheckout = () => {
    dispatch(clearCart());
    localStorage.clear();
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  // Calculate VAT (15% of subtotal)
  const vat = subtotal * 0.15;

  // Calculate Total (subtotal + VAT)
  const total = subtotal + vat;

  // Disable the button if any field is empty
  const isCheckoutDisabled = Object.values(checkoutInfo).some(
    (value) => value === ""
  );

  const CustomRadio = (props) => {
    const { children, ...otherProps } = props;

    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
            "flex-row-reverse max-w-full cursor-pointer rounded-lg gap-4 p-4 border-2 border",
            "data-[selected=true]:border-indigo-500 border"
          ),
        }}
      >
        {children}
      </Radio>
    );
  };
  return (
    <section>
      <NavigationHeader />
      <div>
        <p></p>
      </div>
      {cartItems.length === 0 ? (
        <div className="flex flex-col justify-center items-center my-20">
          <p className="text-xl font-semibold text-gray-400">
            Your checkout is empty. Add some items to continue shopping.
          </p>
          <Link to="/all-products">
            <Button className="mt-5 font-semibold bg-indigo-500 text-white">
              Start shopping
            </Button>
          </Link>
        </div>
      ) : (
        <div className="flex items-start gap-5">
          <div className="flex-[2]">
            <h4 className="text-2xl font-semibold text-gray mt-10 inline-block">
              Checkout info
            </h4>
            <form className="grid grid-cols-2 gap-5 mt-5">
              <Input
                placeholder="John"
                labelPlacement="outside"
                label="First name"
                isRequired
                radius="sm"
                onChange={(e) =>
                  setCheckoutInfo({
                    ...checkoutInfo,
                    firstName: e.target.value,
                  })
                }
              />
              <Input
                placeholder="Doppler"
                labelPlacement="outside"
                label="Last name"
                isRequired
                radius="sm"
                onChange={(e) =>
                  setCheckoutInfo({ ...checkoutInfo, lastName: e.target.value })
                }
              />
              <Input
                placeholder="john@xyz.com"
                labelPlacement="outside"
                label="Email address"
                type="email"
                isRequired
                radius="sm"
                onChange={(e) =>
                  setCheckoutInfo({ ...checkoutInfo, email: e.target.value })
                }
              />
              <Input
                placeholder="1234567891"
                labelPlacement="outside"
                label="Phone Number"
                isRequired
                radius="sm"
                onChange={(e) =>
                  setCheckoutInfo({
                    ...checkoutInfo,
                    phone: `+880${e.target.value}`,
                  })
                }
                startContent={
                  <div>
                    <p className="font-medium text-gray">+880</p>
                  </div>
                }
              />
              <Input
                placeholder="Mirpur 13, Dhaka, Bangladesh"
                labelPlacement="outside"
                label="Address"
                isRequired
                radius="sm"
                onChange={(e) =>
                  setCheckoutInfo({ ...checkoutInfo, address: e.target.value })
                }
              />

              <RadioGroup
                orientation="horizontal"
                isRequired
                label="Address type"
                onValueChange={(value) =>
                  setCheckoutInfo({ ...checkoutInfo, addressType: value })
                }
              >
                <Radio value="home">
                  <span>Home (Full day delivery)</span>
                </Radio>
                <Radio value="office">
                  <span>Office (Delivery between 10AM - 5PM)</span>
                </Radio>
              </RadioGroup>
              <div className="col-span-2">
                <RadioGroup
                  onValueChange={(value) =>
                    setCheckoutInfo({ ...checkoutInfo, paymentMethod: value })
                  }
                  label="Payment method"
                  isRequired
                >
                  <div className="grid grid-cols-2 gap-2">
                    <CustomRadio value="cash_on_delivery">
                      <div className="flex items-center gap-4">
                        <img
                          className="size-10"
                          src="/src/assets/images/cash-on-delivery.png"
                        />
                        <p className="text-lg font-semibold text-gray">
                          Cash on delivery
                        </p>
                      </div>
                    </CustomRadio>

                    <CustomRadio isDisabled value="stripe">
                      <div className="flex items-center gap-4">
                        <img
                          className="size-10"
                          src="/src/assets/images/stripe.png"
                        />
                        <p className="text-lg font-semibold text-gray">
                          Stripe
                        </p>
                      </div>
                    </CustomRadio>
                  </div>
                </RadioGroup>
              </div>
            </form>
          </div>
          <div className="flex-1 shadow mt-10 rounded-2xl p-5">
            <h4 className="text-2xl font-semibold text-gray pb-3">
              Order summary
            </h4>
            <div>
              {cartItems.map((item: TCartItem) => (
                <div className="flex items-center gap-2 border-b pb-3 mt-3">
                  <div className="bg-white rounded-xl inline-block p-3">
                    <img
                      src={item.image}
                      className="h-20 w-16 object-cover"
                      alt=""
                    />
                  </div>
                  <div>
                    <h6 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h6>
                    <div className="flex items-center gap-4 my-1.5">
                      {item.selectedSize && (
                        <p className="text-sm font-medium text-gray-lighter">
                          Size{" "}
                          <span className="text-gray text-base">
                            {item.selectedSize}
                          </span>{" "}
                        </p>
                      )}
                      {item.selectedColor && (
                        <p className="text-sm font-medium text-gray-lighter">
                          Color{" "}
                          <span className="text-gray text-base">
                            {item.selectedColor}
                          </span>{" "}
                        </p>
                      )}
                    </div>
                    <h6 className="text-base font-bold text-gray">
                      {item.price}{" "}
                      <span className="text-gray-lighter">
                        x {item.quantity}
                      </span>{" "}
                    </h6>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-xl font-semibold text-gray flex items-center justify-between my-5">
              <p>Total</p>{" "}
              <span className="flex items-center gap-1">
                ${total.toFixed(2)}
              </span>
            </div>

            <Button
              size="lg"
              radius="full"
              onPress={onOpen}
              isDisabled={isCheckoutDisabled}
              onClick={handleCheckout}
              className="text-xl font-semibold text-white bg-indigo-500 w-full"
            >
              Checkout <RiArrowRightSLine size={24} className="text-white" />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                <ModalBody>
                  <img
                    className="w-1/4 mx-auto my-8"
                    src="/src/assets/images/checked.png"
                    alt="Check icon"
                  />
                  <div className="text-center">
                    <h6 className="text-xl font-semibold">Woohoo!</h6>
                    <h6 className="text-xl font-semibold mb-5">
                      Your order has been placed
                    </h6>
                    <p className="w-8/12 mx-auto font-light">
                      Pull up a chair, sit back and relax as your order is on
                      its way to you!
                    </p>
                    <hr className="w-1/2 mx-auto h-1.5 rounded-full bg-green-400 my-8" />
                  </div>
                </ModalBody>
              </ModalContent>
            </Modal>
          </div>
        </div>
      )}
    </section>
  );
};

export default Checkout;
