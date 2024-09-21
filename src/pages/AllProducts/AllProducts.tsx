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
  Spinner,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import { BsFilter } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";
import { useGetCategoriesQuery } from "../../redux/features/category/categoryApi";
import { useGetAllProductsQuery } from "../../redux/features/product/productsApi";
import { TCategory, TFilter, TProduct } from "../../types/types";
import PriceSlider from "./PriceSlider";
import ProductCard from "./ProductCard/ProductCard";
import { brandItems, ratingData, sortByData } from "./helpers";

const AllProducts = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    data,
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

  // Error Handling
  useEffect(() => {
    if (isProductError) console.error(productError);
    if (isCategoryError) console.error(categoryError);
  }, [isProductError, isCategoryError, productError, categoryError]);

  const products = useMemo(() => data?.data || [], [data]);
  const [filter, setFilter] = useState<TFilter>({
    brand: [],
    priceRange: [],
    rating: [],
    category: [],
    searchParams: "",
    sortOrder: "",
  });
  const isAnyFilterApplied = () => {
    return (
      filter.brand.length > 0 ||
      filter.priceRange.length > 0 ||
      filter.rating.length > 0 ||
      filter.category.length > 0 ||
      filter.searchParams.trim() !== ""
    );
  };

  const [filteredProduct, setFilteredProduct] = useState<TProduct[]>([]);

  useEffect(() => {
    if (products) {
      let filtered = products as TProduct[];

      // Apply search filter if searchParams is not empty
      if (filter.searchParams.trim()) {
        filtered = filtered.filter((product: TProduct) =>
          product.name.toLowerCase().includes(filter.searchParams.toLowerCase())
        );
      }

      // Apply category filter if any category is selected
      if (filter.category.length > 0) {
        filtered = filtered.filter((product: TProduct) =>
          filter.category.includes(product.category.category_id)
        );
      }

      // Apply brand filter if any brand is selected
      if (filter.brand.length > 0) {
        filtered = filtered.filter((product: TProduct) =>
          filter.brand.includes(product.brand)
        );
      }

      // Apply price range filter if a price range is selected
      if (filter.priceRange.length === 2) {
        const [minPrice, maxPrice] = filter.priceRange;
        filtered = filtered.filter(
          (product: TProduct) =>
            product.price.regular_price >= minPrice &&
            product.price.regular_price <= maxPrice
        );
      }

      // Apply rating filter if a rating is selected
      if (filter.rating.length > 0) {
        filtered = filtered.filter((product: TProduct) =>
          filter.rating.includes(Math.floor(product.rating))
        );
      }

      // Apply sorting
      if (filter.sortOrder === "Price Low to High") {
        console.log("PLTOH");

        filtered = [...filtered].sort(
          (a: TProduct, b: TProduct) =>
            a.price.regular_price - b.price.regular_price
        );
      } else if (filter.sortOrder === "Price High to Low") {
        console.log("PHTOL");
        filtered = [...filtered].sort(
          (a: TProduct, b: TProduct) =>
            b.price.regular_price - a.price.regular_price
        );
      }

      // Update the filtered product list
      setFilteredProduct(filtered);
    }
  }, [filter, products]);

  const updateFilter = (
    filterKey: keyof TFilter,
    value: string | number,
    checked: boolean,
    priceRange: number[] = []
  ) => {
    setFilter((prevFilter) => {
      if (filterKey === "priceRange" && priceRange.length === 2) {
        return {
          ...prevFilter,
          priceRange,
        };
      }
      const currentFilter = prevFilter[filterKey];
      if (Array.isArray(currentFilter)) {
        // For fields like category, brand (arrays)
        return {
          ...prevFilter,
          [filterKey]: checked
            ? [...currentFilter, value]
            : currentFilter.filter((item) => item !== value),
        };
      }

      return prevFilter;
    });
  };

  if (isProductLoading || isCategoryLoading) {
    return (
      <div className="h-40 flex items-center justify-center">
        <Spinner label="Loading..." color="warning" />
      </div>
    );
  }

  const handleClearAllFilters = () => {
    setFilter({
      brand: [],
      priceRange: [],
      rating: [],
      category: [],
      searchParams: "",
      sortOrder: "",
    });
  };

  const getFilterItems = () => (
    <div>
      {isAnyFilterApplied() && (
        <div className="md:block hidden w-full mb-4">
          <Button
            onClick={handleClearAllFilters}
            className="bg-transparent border w-full"
            radius="full"
          >
            Clear all filters
          </Button>
        </div>
      )}
      <Input
        type="text"
        placeholder="Search here"
        radius="full"
        className="mb-5 text-gray placeholder:text-gray"
        onChange={(e) => setFilter({ ...filter, searchParams: e.target.value })}
        startContent={<CiSearch size={24} className="text-gray" />}
      />
      <div className="mb-10">
        <h4 className="my-3 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
          Categories{" "}
          <span className="text-sm h-6 w-6 rounded-full bg-indigo-500 text-white flex items-center justify-center">
            {categories?.data?.length}
          </span>
        </h4>
        {categories?.data?.map((item: TCategory) => (
          <Checkbox
            key={item?.id}
            className="my-0.5 block"
            isSelected={filter.category.includes(item.id)}
            onValueChange={(checked) => {
              updateFilter("category", item.id, checked);
            }}
          >
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
            isSelected={filter.brand.includes(item.brandTitle)}
            onValueChange={(checked) => {
              updateFilter("brand", item.brandTitle, checked);
            }}
          >
            {item.brandTitle}
          </Checkbox>
        ))}
      </div>
      <div className="mb-10">
        <h4 className="mt-3 mb-5 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
          Price range
        </h4>
        <PriceSlider updateFilter={updateFilter} />
      </div>
      <div className="mb-10">
        <h4 className="mt-3 mb-5 uppercase border-b-1 pb-2 flex justify-between items-center text-2xl font-semibold">
          Rating
        </h4>
        <div>
          {ratingData.map((rating) => {
            return (
              <Checkbox
                className="mb-1 flex"
                isSelected={filter.rating.includes(
                  Number(rating.number_of_star)
                )}
                onValueChange={(checked) => {
                  updateFilter("rating", rating.number_of_star, checked);
                }}
              >
                <div className="flex items-center">
                  {Array(rating.number_of_star)
                    .fill(0)
                    .map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                </div>
              </Checkbox>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <section>
      <NavigationHeader />
      {/* for mobile screen */}
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
                  <ModalBody>{getFilterItems()}</ModalBody>
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
            <Select
              label="Sort By"
              className="md:w-48 w-36 pr-4"
              size="sm"
              value={filter.sortOrder}
              onChange={(e) =>
                setFilter((prevFilter) => ({
                  ...prevFilter,
                  sortOrder: e.target.value,
                }))
              }
            >
              {sortByData.map((item) => (
                <SelectItem key={item.title}>{item.title}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      {/* for large screen */}
      <div className="grid md:grid-cols-8 gap-4">
        <div className="md:block hidden col-span-2 border-r-1 pr-8">
          {getFilterItems()}
        </div>
        <div className="col-span-6 md:pl-3">
          <div className="grid md:grid-cols-3 grid-cols-1 px-4 md:px-0">
            {filteredProduct.length > 0 ? (
              filteredProduct?.map((product: TProduct) => (
                <ProductCard
                  product={product}
                  key={product.id}
                  isGridCard={true}
                />
              ))
            ) : (
              <div>
                <p className="text-xl font-semibold text-gray">
                  No product found
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
