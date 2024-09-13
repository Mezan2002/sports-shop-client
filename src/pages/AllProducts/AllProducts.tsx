import {
  Button,
  Checkbox,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Slider,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFilter, BsGrid } from "react-icons/bs";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";
import ProductCard from "./ProductCard/ProductCard";

const AllProducts = () => {
  // State to manage the slider value
  const [value, setValue] = useState([0, 5000]);
  const [scrollBehavior, setScrollBehavior] = useState("inside");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Function to handle slider value change
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const categorieItems = [
    {
      title: "Computer & Laptop",
    },
    {
      title: "Tablet & IPad",
    },
    {
      title: "Printer",
    },
    {
      title: "Smartphones",
    },
    {
      title: "Cameras",
    },
    {
      title: "Keyboard & Mouse",
    },
    {
      title: "Video Games",
    },
    {
      title: "Smart Watch",
    },
    {
      title: "Headphones & Audios",
    },
    {
      title: "Video Projectors",
    },
    {
      title: "Networking Devices",
    },
    {
      title: "Hot Selling Products",
    },
  ];
  const brandItems = [
    {
      brandTitle: "Apple",
    },
    {
      brandTitle: "Real Me",
    },
    {
      brandTitle: "Samsung",
    },
    {
      brandTitle: "Walton",
    },

    {
      brandTitle: "Lenovo",
    },
    {
      brandTitle: "Google",
    },
    {
      brandTitle: "Microsoft",
    },
    {
      brandTitle: "Sony",
    },
    {
      brandTitle: "Canon",
    },
    {
      brandTitle: "Symphony",
    },
    {
      brandTitle: "Itel",
    },
    {
      brandTitle: "One Plus",
    },
  ];
  const sortByData = [
    { title: "Default" },
    { title: "Latest" },
    { title: "Popularity" },
    { title: "Avarage Rating" },
    { title: "Price High to Low" },
    { title: "Price Low to High" },
  ];
  const showItemsNumber = ["20 Items", "40 Items", "60 Items"];

  return (
    <section>
      <NavigationHeader />
      <div className="flex items-center justify-between border-b-1 my-4 pb-5">
        <div>
          <Button
            onPress={onOpen}
            className="md:hidden bg-indigo-500 text-white ml-4 md:pl-0 flex items-center font-semibold uppercase"
          >
            <BsFilter size={20} /> Filter
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            scrollBehavior={scrollBehavior}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    Filter
                  </ModalHeader>
                  <ModalBody>
                    <div>
                      <div className="mb-10">
                        <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                          Categories{" "}
                          <span className="text-sm h-6 w-6 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                            {categorieItems.length}
                          </span>
                        </h4>
                        {categorieItems.map((item) => (
                          <Checkbox key={item.title} className="my-0.5 block">
                            {item.title}
                          </Checkbox>
                        ))}
                      </div>
                      <div className="mb-10">
                        <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                          Brands{" "}
                          <span className="text-sm h-6 w-6 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                            {brandItems.length}
                          </span>
                        </h4>
                        {brandItems.map((item) => (
                          <Checkbox
                            key={item.brandTitle}
                            className="my-0.5 block"
                          >
                            {item.brandTitle}
                          </Checkbox>
                        ))}
                      </div>
                      <div className="mb-10">
                        <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                          Price Range{" "}
                        </h4>
                        <div className="flex items-center mt-3">
                          <Input
                            type="text"
                            placeholder="Min"
                            className="border rounded-xl"
                            value={value[0]}
                            onChange={(e) =>
                              handleSliderChange(e, [e.target.value, value[1]])
                            }
                            startContent={
                              <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">
                                  $
                                </span>
                              </div>
                            }
                          />
                          <p className="mx-2"> - </p>
                          <Input
                            type="text"
                            value={value[1]}
                            onChange={(e) =>
                              handleSliderChange(e, [value[0], e.target.value])
                            }
                            placeholder="Max"
                            className="border rounded-xl"
                            startContent={
                              <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">
                                  $
                                </span>
                              </div>
                            }
                          />
                        </div>
                        <div className="mt-2 px-2">
                          <Slider
                            value={value}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            valueLabelFormat={(value) => `$${value}`}
                            min={0}
                            max={5000}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-semibold">
                            {" "}
                            Price: ${value[0]} - ${value[1]}{" "}
                          </p>
                          <Button
                            size="sm"
                            className="bg-indigo-500 text-white"
                          >
                            Filter
                          </Button>
                        </div>
                      </div>
                      <div className="mb-10">
                        <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                          Products Status{" "}
                        </h4>
                        <Checkbox key="In Stock" className="my-0.5 block">
                          In Stock
                        </Checkbox>
                        <Checkbox key="Out of Stock" className="my-0.5 block">
                          Out of Stock
                        </Checkbox>
                        <Checkbox key="On Sale" className="my-0.5 block">
                          On Sale
                        </Checkbox>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      className="bg-red-500 text-white uppercase"
                      onPress={onClose}
                    >
                      Close
                    </Button>
                    <Button
                      className="bg-indigo-500 text-white uppercase"
                      onPress={onClose}
                    >
                      Filter
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
          <p className="font-semibold md:block hidden uppercase">
            Showing 1–20 of 67 results
          </p>
        </div>
        <div className="flex items-center">
          <div>
            <Select label="Sort By" className="md:w-48 w-36 pr-4" size="sm">
              {sortByData.map((item) => (
                <SelectItem key={item.title} value={item.title}>
                  {item.title}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="md:block hidden">
            <Select
              label="Show Items"
              className="w-48 px-5 border-x-2"
              size="sm"
            >
              {showItemsNumber.map((item) => (
                <SelectItem key={item} value={item}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
          <div className="md:flex hidden items-center pl-5">
            <BsGrid className="text-xl mr-3" />
            <AiOutlineUnorderedList className="text-xl" />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-5 gap-4">
        <div className="md:block hidden col-span-1 border-r-1 pr-8">
          <div>
            <div className="mb-10">
              <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                Categories{" "}
                <span className="text-sm h-6 w-6 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  {categorieItems.length}
                </span>
              </h4>
              {categorieItems.map((item) => (
                <Checkbox key={item.title} className="my-0.5 block">
                  {item.title}
                </Checkbox>
              ))}
            </div>
            <div className="mb-10">
              <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                Brands{" "}
                <span className="text-sm h-6 w-6 rounded-full bg-indigo-500 text-white flex items-center justify-center">
                  {brandItems.length}
                </span>
              </h4>
              {brandItems.map((item) => (
                <Checkbox key={item.brandTitle} className="my-0.5 block">
                  {item.brandTitle}
                </Checkbox>
              ))}
            </div>
            <div className="mb-10">
              <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                Price Range{" "}
              </h4>
              <div className="flex items-center mt-3">
                <Input
                  type="text"
                  placeholder="Min"
                  className="border rounded-xl"
                  value={value[0]}
                  onChange={(e) =>
                    handleSliderChange(e, [e.target.value, value[1]])
                  }
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                />
                <p className="mx-2"> - </p>
                <Input
                  type="text"
                  value={value[1]}
                  onChange={(e) =>
                    handleSliderChange(e, [value[0], e.target.value])
                  }
                  placeholder="Max"
                  className="border rounded-xl"
                  startContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400 text-small">$</span>
                    </div>
                  }
                />
              </div>
              <div className="mt-2 px-2">
                <Slider
                  value={value}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                  valueLabelFormat={(value) => `$${value}`}
                  min={0}
                  max={5000}
                />
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">
                  {" "}
                  Price: ${value[0]} - ${value[1]}{" "}
                </p>
                <Button size="sm" className="bg-indigo-500 text-white">
                  Filter
                </Button>
              </div>
            </div>
            <div className="mb-10">
              <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
                Products Status{" "}
              </h4>
              <Checkbox key="In Stock" className="my-0.5 block">
                In Stock
              </Checkbox>
              <Checkbox key="Out of Stock" className="my-0.5 block">
                Out of Stock
              </Checkbox>
              <Checkbox key="On Sale" className="my-0.5 block">
                On Sale
              </Checkbox>
            </div>
          </div>
        </div>
        <div className="col-span-4 md:pl-3">
          <div className="grid md:grid-cols-4 grid-cols-1 px-4 md:px-0">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
              (product) => (
                <ProductCard key={product} isGridCard={true} />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
