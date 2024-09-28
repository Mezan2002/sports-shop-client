import { Input } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";
import { TProduct } from "../../../types/types";

type ManageProductInputs = {
  [Key in keyof TProduct]: TProduct[Key];
};

type ProductIdentifierProps = {
  register: UseFormRegister<ManageProductInputs>;
};

const ProductIdentifier = ({ register }: ProductIdentifierProps) => {
  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Product Identifiers</h6>
        <p className="font-medium text-gray-500">
          Add the product identifiers info here
        </p>
      </div>
      <div className="flex-1 md:grid grid-cols-2 gap-4">
        <Input
          type="text"
          label="Product ID"
          radius="sm"
          labelPlacement="outside"
          placeholder="Enter product ID"
          isRequired
          {...register("name", { required: true })}
        />
        <Input
          type="text"
          label="Brand Name"
          placeholder="Enter product brand name"
          radius="sm"
          labelPlacement="outside"
          isRequired
        />
      </div>
    </div>
  );
};

export default ProductIdentifier;
