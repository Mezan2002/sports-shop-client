import { Input } from "@nextui-org/react";

const ProductAttribute = () => {
  return (
    <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
      <div className="flex-1">
        <h6 className="text-xl font-semibold text-gray">Product Attributes</h6>
        <p className="font-medium text-gray-500">
          Add the product attribute info here
        </p>
      </div>
      <div className="flex-1 md:grid grid-cols-2 gap-4">
        <Input
          type="text"
          label="Color Name"
          radius="sm"
          labelPlacement="outside"
          className="group"
          placeholder="Enter color name"
          isRequired
          endContent={
            <div>
              <p className="text-xs whitespace-nowrap bg-indigo-500 text-white rounded-lg -mr-2 p-2">
                Add color name
              </p>
            </div>
          }
        />
        <Input
          type="text"
          label="Color Code"
          placeholder="Enter color code"
          radius="sm"
          labelPlacement="outside"
          isRequired
          endContent={
            <div>
              <p className="text-xs whitespace-nowrap bg-indigo-500 text-white rounded-lg -mr-2 p-2">
                Add color code
              </p>
            </div>
          }
        />
        <Input
          type="text"
          label="Size"
          radius="sm"
          className="col-span-2"
          labelPlacement="outside"
          placeholder="Enter product size"
          isRequired
          endContent={
            <div>
              <p className="text-xs whitespace-nowrap bg-indigo-500 text-white rounded-lg -mr-2 p-2">
                Add size
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ProductAttribute;
