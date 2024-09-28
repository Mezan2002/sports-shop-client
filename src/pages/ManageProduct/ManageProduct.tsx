import { Button } from "@nextui-org/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiCheck } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";
import { TProduct } from "../../types/types";
import ProductAttribute from "./ProductAttribute/ProductAttribute";
import ProductIdentifier from "./ProductIdentifier/ProductIdentifier";
import ProductImagesUploader from "./ProductImagesUploader/ProductImagesUploader";
import ProductInventory from "./ProductInventory/ProductInventory";
import ProductPricing from "./ProductPricing/ProductPricing";
import ProductPromoCode from "./ProductPromoCode/ProductPromoCode";
import ProductSummary from "./ProductSummary/ProductSummary";

type ManageProductInputs = {
  [Key in keyof TProduct]: TProduct[Key];
};

const ManageProduct = () => {
  const { register, handleSubmit } = useForm<ManageProductInputs>();

  const onSubmit: SubmitHandler<ManageProductInputs> = (data) =>
    console.log(data);

  return (
    <section>
      <NavigationHeader />
      <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
        <ProductSummary register={register} />
        <ProductImagesUploader />
        <ProductPricing register={register} />
        <ProductPromoCode register={register} />
        <ProductInventory register={register} />
        <ProductIdentifier register={register} />
        <ProductAttribute />
        <div className="flex justify-end gap-5">
          <Button
            radius="sm"
            className="bg-red-500 text-white"
            startContent={<FiX size={20} className="text-white" />}
          >
            Cancel
          </Button>
          <Button
            radius="sm"
            type="submit"
            startContent={<BiCheck size={20} className="text-white" />}
            className="bg-indigo-500 text-white"
          >
            Create new product
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ManageProduct;
