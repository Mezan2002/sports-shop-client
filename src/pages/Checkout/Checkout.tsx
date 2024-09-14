import { Button, cn, Input, Radio, RadioGroup } from "@nextui-org/react";
import { RiArrowRightSLine } from "react-icons/ri";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";

const Checkout = () => {
  const CustomRadio = (props) => {
    const { children, ...otherProps } = props;

    return (
      <Radio
        {...otherProps}
        classNames={{
          base: cn(
            "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
            "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border",
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
            />
            <Input
              placeholder="Doppler"
              labelPlacement="outside"
              label="Last name"
              isRequired
              radius="sm"
            />
            <Input
              placeholder="1234567891"
              labelPlacement="outside"
              label="Phone Number"
              isRequired
              radius="sm"
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
            />

            <RadioGroup isRequired label="Address type">
              <Radio value="home">Home (Full day delivery)</Radio>
              <Radio value="office">Office (Delivery between 10AM - 5PM)</Radio>
            </RadioGroup>

            <RadioGroup label="Payment method" isRequired>
              <CustomRadio value="cash_on_delivery">
                Cash on delivery
              </CustomRadio>
            </RadioGroup>
          </form>
        </div>
        <div className="flex-1 shadow mt-10 rounded-2xl p-5">
          <h4 className="text-2xl font-semibold text-gray border-b pb-3">
            Order summary
          </h4>
          <div>
            <div className="flex items-center gap-2 border-b pb-3 mt-3">
              <div className="bg-white rounded-xl inline-block p-3">
                <img
                  src="https://th.bing.com/th/id/R.0288f2ee5dc6cbb800fc5fa3bc05a0b6?rik=jz2i2w1l3JXGIg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCricket-Bat-PNG-Pic.png&ehk=WIGN7NaX376jzPl%2fo1QdaVy2Zk9K%2bfvdem2KnONl6Iw%3d&risl=1&pid=ImgRaw&r=0"
                  className="h-20 w-16 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-xl font-semibold text-gray-800">
                  Cricket bat chamso
                </h6>
                <div className="flex items-center gap-4 my-1.5">
                  <p className="text-sm font-medium text-gray-lighter">
                    Size <span className="text-gray text-base">16m</span>{" "}
                  </p>
                  <p className="text-sm font-medium text-gray-lighter">
                    Color <span className="text-gray text-base">White</span>{" "}
                  </p>
                </div>
                <h6 className="text-base font-bold text-gray">
                  $50.00 <span className="text-gray-lighter">x 2</span>{" "}
                </h6>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b pb-3 mt-3">
              <div className="bg-white rounded-xl inline-block p-3">
                <img
                  src="https://th.bing.com/th/id/R.0288f2ee5dc6cbb800fc5fa3bc05a0b6?rik=jz2i2w1l3JXGIg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCricket-Bat-PNG-Pic.png&ehk=WIGN7NaX376jzPl%2fo1QdaVy2Zk9K%2bfvdem2KnONl6Iw%3d&risl=1&pid=ImgRaw&r=0"
                  className="h-20 w-16 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-xl font-semibold text-gray-800">
                  Cricket bat chamso
                </h6>
                <div className="flex items-center gap-4 my-1.5">
                  <p className="text-sm font-medium text-gray-lighter">
                    Size <span className="text-gray text-base">16m</span>{" "}
                  </p>
                  <p className="text-sm font-medium text-gray-lighter">
                    Color <span className="text-gray text-base">White</span>{" "}
                  </p>
                </div>
                <h6 className="text-base font-bold text-gray">
                  $50.00 <span className="text-gray-lighter">x 2</span>{" "}
                </h6>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b pb-3 mt-3">
              <div className="bg-white rounded-xl inline-block p-3">
                <img
                  src="https://th.bing.com/th/id/R.0288f2ee5dc6cbb800fc5fa3bc05a0b6?rik=jz2i2w1l3JXGIg&riu=http%3a%2f%2fwww.pngmart.com%2ffiles%2f4%2fCricket-Bat-PNG-Pic.png&ehk=WIGN7NaX376jzPl%2fo1QdaVy2Zk9K%2bfvdem2KnONl6Iw%3d&risl=1&pid=ImgRaw&r=0"
                  className="h-20 w-16 object-cover"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-xl font-semibold text-gray-800">
                  Cricket bat chamso
                </h6>
                <div className="flex items-center gap-4 my-1.5">
                  <p className="text-sm font-medium text-gray-lighter">
                    Size <span className="text-gray text-base">16m</span>{" "}
                  </p>
                  <p className="text-sm font-medium text-gray-lighter">
                    Color <span className="text-gray text-base">White</span>{" "}
                  </p>
                </div>
                <h6 className="text-base font-bold text-gray">
                  $50.00 <span className="text-gray-lighter">x 2</span>{" "}
                </h6>
              </div>
            </div>
          </div>
          <h4 className="text-3xl font-semibold text-gray flex items-center justify-between my-5">
            Total <span>$200.00</span>{" "}
          </h4>

          <Button
            size="lg"
            radius="sm"
            className="text-2xl font-medium text-white bg-indigo-500 w-full"
          >
            Pay now <RiArrowRightSLine size={24} className="text-white" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
