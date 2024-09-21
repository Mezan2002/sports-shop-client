import { Slider } from "@nextui-org/react";
import { TPriceSliderProps } from "../../types/types";

const PriceSlider = ({ updateFilter }: TPriceSliderProps) => {
  return (
    <Slider
      label="Price Range"
      step={100}
      minValue={0}
      maxValue={10000}
      defaultValue={[0, 10000]}
      onChange={(newRange) =>
        updateFilter("priceRange", 0, false, newRange as number[])
      }
      showTooltip={true}
      showOutline={true}
      disableThumbScale={true}
      formatOptions={{ style: "currency", currency: "USD" }}
      tooltipValueFormatOptions={{
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
      }}
      classNames={{
        base: "max-w-md",
        filler: "bg-indigo-500",
        labelWrapper: "mb-2",
        label: "font-medium text-default-700 text-medium",
        value: "font-medium text-default-500 text-small",
        thumb: [
          "transition-size",
          "bg-indigo-500",
          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
          "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
        ],
      }}
      tooltipProps={{
        offset: 10,
        placement: "bottom",
        classNames: {
          base: [
            // arrow color
            "before:bg-indigo-500",
          ],
          content: ["py-2 shadow-xl", "text-white bg-indigo-500"],
        },
      }}
    />
  );
};

export default PriceSlider;
