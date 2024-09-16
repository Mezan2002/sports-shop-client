import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BsFilter, BsGrid } from "react-icons/bs";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { useGetAllProductsQuery } from "../../redux/features/product/productsApi";
import { TProduct } from "../../types/types";
import ProductCard from "./ProductCard/ProductCard";

const AllProducts = () => {
  // State to manage the slider value
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    data: products,
    isLoading: isProductLoading,
    isError: isProductError,
    error: productError,
  } = useGetAllProductsQuery(undefined);

  const {
    data: categories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
    error: categoryError,
  } = useGetCategoriesQuery(undefined);

  if (isProductError) {
    console.error(productError);
  }
  if (isCategoryError) {
    console.error(categoryError);
  }
  const brandItems = [
    {
      brandTitle: "Adidas",
    },
    {
      brandTitle: "Kookaburra",
    },
    {
      brandTitle: "CA",
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

  if (isProductLoading || isCategoryLoading) {
    return (
      <div className="h-40 flex items-center justify-center">
        <Spinner label="Loading..." color="warning" />
      </div>
    );
  }

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
            scrollBehavior="inside"
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
                            {categories?.data?.length}
                          </span>
                        </h4>
                        {categories?.data?.map((item: TProduct) => (
                          <Checkbox key={item?.id} className="my-0.5 block">
                            {item?.name}
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
                  {categories?.data?.length}
                </span>
              </h4>
              {categories?.data?.map((item: TProduct) => (
                <Checkbox key={item?.id} className="my-0.5 block">
                  {item?.name}
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
            {products?.data &&
              products?.data?.map((product: TProduct) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  isGridCard={true}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
