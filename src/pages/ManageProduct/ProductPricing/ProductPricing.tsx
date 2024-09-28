import { Input } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";
import { TProduct } from "../../../types/types";

type ManageProductInputs = {
  [Key in keyof TProduct]: TProduct[Key];
};

type ProductPricingProps = {
  register: UseFormRegister<ManageProductInputs>;
};

const ProductPricing = ({ register }: ProductPricingProps) => {
  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Pricings</h6>
        <p className="font-medium text-gray-500">
          Add the product pricings here
        </p>
      </div>
      <div className="flex-1 md:grid grid-cols-2 gap-4">
        <Input
          type="number"
          label="Regular Price"
          placeholder="0.00"
          radius="sm"
          labelPlacement="outside"
          isRequired
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          {...register("price.regular_price", { required: true })}
        />
        <Input
          type="text"
          label="Currency"
          placeholder="USD"
          radius="sm"
          labelPlacement="outside"
          isRequired
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          {...register("price.currency", { required: true })}
        />
        <Input
          type="number"
          label="Discount Price"
          placeholder="0.00"
          radius="sm"
          labelPlacement="outside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
          {...register("price.discounted_price", { required: true })}
        />
        <Input
          type="number"
          label="Discount Percentage"
          placeholder="0.00"
          radius="sm"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">%</span>
            </div>
          }
          {...register("price.percentage_of_discount", { required: true })}
        />
      </div>
    </div>
  );
};

export default ProductPricing;
