import {
  Input,
  Select,
  SelectItem,
  Spinner,
  Textarea,
} from "@nextui-org/react";
import { useEffect } from "react";
import { UseFormRegister } from "react-hook-form";
import { useGetCategoriesQuery } from "../../../redux/features/category/categoryApi";
import { TCategory, TProduct } from "../../../types/types";

type ManageProductInputs = {
  [Key in keyof TProduct]: TProduct[Key];
};

type ProductSummaryProps = {
  register: UseFormRegister<ManageProductInputs>;
};

const ProductSummary = ({ register }: ProductSummaryProps) => {
  const {
    data: categories,
    isLoading: isCategoryLoading,
    isError: isCategoryError,
    error: categoryError,
  } = useGetCategoriesQuery(undefined);

  // Error Handling
  useEffect(() => {
    if (isCategoryError) console.error(categoryError);
  }, [isCategoryError, categoryError]);

  if (isCategoryLoading) {
    return (
      <div className="h-40 flex items-center justify-center">
        <Spinner label="Loading..." color="warning" />
      </div>
    );
  }

  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Summary</h6>
        <p className="font-medium text-gray-500">
          Describe the product here properly
        </p>
      </div>
      <div className="flex-1">
        <Input
          type="text"
          label="Product Name"
          radius="sm"
          labelPlacement="outside"
          placeholder="Enter product name"
          isRequired
          {...register("name", { required: true })}
        />
        <Textarea
          isRequired
          label="Description"
          labelPlacement="outside"
          placeholder="Enter your description"
          className="mt-5"
          radius="sm"
          {...register("description", { required: true })}
        />

        <Select
          labelPlacement="outside"
          label="Product Category"
          isRequired
          radius="sm"
          placeholder="Select products category"
          className="pt-5"
        >
          {categories?.data?.map((category: TCategory) => (
            <SelectItem key={category?.id}>{category?.name}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default ProductSummary;
