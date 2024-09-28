import { getLocalTimeZone, parseDate } from "@internationalized/date";
import { DatePicker, Input } from "@nextui-org/react";
import { useDateFormatter } from "@react-aria/i18n";
import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { TProduct } from "../../../types/types";

type ManageProductInputs = {
  [Key in keyof TProduct]: TProduct[Key];
};

type ProductPromoCodeProps = {
  register: UseFormRegister<ManageProductInputs>;
};

const ProductPromoCode = ({ register }: ProductPromoCodeProps) => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const [promoCodeStatedAt, setPromoCodeStatedAt] = useState(
    parseDate(formattedDate)
  );
  const [promoCodeEndedAt, setPromoCodeEndedAt] = useState(
    parseDate(formattedDate)
  );

  const formatter = useDateFormatter({ dateStyle: "full" });
  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Promo Code</h6>
        <p className="font-medium text-gray-500">
          Add the product promo code here
        </p>
      </div>
      <div className="flex-1 md:grid grid-cols-2 gap-4">
        <Input
          type="text"
          label="Promo Code"
          placeholder="MR100"
          radius="sm"
          labelPlacement="outside"
          {...register("promoCode.code", {
            required: true,
          })}
        />
        <Input
          type="number"
          label="Promo Code Discount Percentage"
          placeholder="0.00"
          radius="sm"
          labelPlacement="outside"
          endContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">%</span>
            </div>
          }
          {...register("promoCode.discount", {
            required: true,
          })}
        />
        <div>
          <DatePicker
            labelPlacement="outside"
            label="Started at"
            isRequired
            value={promoCodeStatedAt}
            onChange={setPromoCodeStatedAt}
          />
          <p className="text-default-500 text-sm">
            Started at date:{" "}
            {promoCodeStatedAt
              ? formatter.format(promoCodeStatedAt.toDate(getLocalTimeZone()))
              : "--"}
          </p>
        </div>
        <div>
          <DatePicker
            value={promoCodeEndedAt}
            onChange={setPromoCodeEndedAt}
            labelPlacement="outside"
            label="Ended at"
            isRequired
          />
          <p className="text-default-500 text-sm">
            Ended at date:{" "}
            {promoCodeEndedAt
              ? formatter.format(promoCodeEndedAt.toDate(getLocalTimeZone()))
              : "--"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPromoCode;
