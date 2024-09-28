import { Input } from "@nextui-org/react";
import { UseFormRegister } from "react-hook-form";
import { TProduct } from "../../../types/types";

type ManageProductInputs = {
  [Key in keyof TProduct]: TProduct[Key];
};

type ProductInventoryProps = {
  register: UseFormRegister<ManageProductInputs>;
};

const ProductInventory = ({ register }: ProductInventoryProps) => {
  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Inventory</h6>
        <p className="font-medium text-gray-500">
          Add the product inventory info here
        </p>
      </div>
      <div className="flex-1 md:grid grid-cols-2 gap-4">
        <Input
          type="number"
          label="Current Stock Amount"
          placeholder="150"
          radius="sm"
          labelPlacement="outside"
          isRequired
          {...register("stock.current_stock_amount", {
            required: true,
          })}
        />
        <Input
          type="number"
          label="Low Stock Level Amount"
          placeholder="20"
          isRequired
          radius="sm"
          labelPlacement="outside"
          {...register("stock.low_stock_amount", {
            required: true,
          })}
        />
      </div>
    </div>
  );
};

export default ProductInventory;
