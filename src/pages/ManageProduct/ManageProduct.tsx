import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { BiCheck } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import NavigationHeader from "../../components/shared/NavigationHeader/NavigationHeader";

const ManageProduct = () => {
  return (
    <section>
      <NavigationHeader />
      <div className="mt-10">
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
              label="Product name"
              radius="sm"
              labelPlacement="outside"
              placeholder="Enter product name"
              isRequired
            />
            <Textarea
              isRequired
              label="Description"
              labelPlacement="outside"
              placeholder="Enter your description"
              className="mt-5"
              radius="sm"
            />
            <Select
              labelPlacement="outside"
              label="Product category"
              isRequired
              radius="sm"
              placeholder="Select products category"
              className="pt-5"
            >
              <SelectItem key="cricket">Cricket</SelectItem>
              <SelectItem key="football">Football</SelectItem>
              <SelectItem key="baseball">Baseball</SelectItem>
              <SelectItem key="basketball">Basketball</SelectItem>
            </Select>
          </div>
        </div>
        <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
          <div className="flex-1">
            <h6 className="text-xl font-semibold text-gray">Product images</h6>
            <p className="font-medium text-gray-500">
              Upload the product images here, you can select on or more then one
              image
            </p>
          </div>
          <div className="flex-1">
            <div className="container h-60 w-full rounded-lg shadow-lg flex flex-col items-center justify-between p-2.5 gap-1.5 bg-blue-50">
              <label
                htmlFor="product_image_uploader"
                className="flex-1 w-full border-2 border-dashed border-royalblue rounded-lg flex flex-col items-center justify-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 24 24"
                  className="h-20"
                >
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    id="SVGRepo_tracerCarrier"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill=""
                      d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>{" "}
                  </g>
                </svg>
                <p className="text-center text-black mt-5">
                  Click to upload product image!
                </p>
              </label>

              <input
                id="product_image_uploader"
                type="file"
                className="hidden"
              />
            </div>
          </div>
        </div>
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
              label="Price"
              placeholder="0.00"
              radius="sm"
              labelPlacement="outside"
              isRequired
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
            <Input
              type="number"
              label="Discount price"
              placeholder="0.00"
              radius="sm"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-small">$</span>
                </div>
              }
            />
          </div>
        </div>
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
              label="Current stock amount"
              placeholder="150"
              radius="sm"
              labelPlacement="outside"
              isRequired
            />
            <Input
              type="number"
              label="Low stock level amount"
              placeholder="20"
              isRequired
              radius="sm"
              labelPlacement="outside"
            />
          </div>
        </div>
        <div className="flex items-start gap-5 mb-10 border-b border-dashed pb-10">
          <div className="flex-1">
            <h6 className="text-xl font-semibold text-gray">
              Product Identifiers
            </h6>
            <p className="font-medium text-gray-500">
              Add the product product identifiers info here
            </p>
          </div>
          <div className="flex-1 md:grid grid-cols-2 gap-4">
            <Input
              type="text"
              label="Brand Name"
              placeholder="Enter product brand name"
              radius="sm"
              labelPlacement="outside"
              isRequired
            />
            <Input
              type="text"
              label="Made in"
              placeholder="Enter product made in from"
              isRequired
              radius="sm"
              labelPlacement="outside"
            />
          </div>
        </div>
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
            startContent={<BiCheck size={20} className="text-white" />}
            className="bg-indigo-500 text-white"
          >
            Create new product
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ManageProduct;
