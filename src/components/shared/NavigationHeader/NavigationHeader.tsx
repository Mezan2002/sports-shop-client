import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { BsArrowLeft } from "react-icons/bs";

const NavigationHeader = () => {
  return (
    <div className="bg-gray">
      <div className="text-white font-semibold flex-col flex items-center justify-center md:h-[300px] pt-20 pb-14">
        <h1 className="flex items-center md:text-5xl text-2xl mb-5">
          {" "}
          <span className="md:mr-5 mr-2">
            {" "}
            <BsArrowLeft />{" "}
          </span>{" "}
          Computer & Laptop
        </h1>
        <Breadcrumbs
          separator="/"
          itemClasses={{
            item: "text-white text-lg",
            separator: "text-white mx-2 text-lg",
          }}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Computer & Laptop</BreadcrumbItem>
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default NavigationHeader;
