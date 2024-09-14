import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Link, useLocation } from "react-router-dom";

const NavigationHeader = () => {
  const location = useLocation();

  // Split the pathname into an array of paths
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray">
      <div className="text-white font-semibold flex items-center justify-center flex-col md:h-[300px] pt-20 pb-14">
        <h1 className="flex items-center justify-center md:text-5xl text-2xl mb-5 capitalize">
          {pathnames[pathnames.length - 1] || "Home"}
        </h1>
        <div className="flex items-center justify-center">
          <Breadcrumbs
            separator="/"
            itemClasses={{
              item: "text-white text-lg capitalize",
              separator: "text-white mx-2 text-lg",
            }}
          >
            {/* Home Breadcrumb */}
            <BreadcrumbItem>
              <Link to="/" className="text-white">
                Home
              </Link>
            </BreadcrumbItem>

            {/* Dynamic Breadcrumbs */}
            {pathnames.map((value, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              return (
                <BreadcrumbItem key={routeTo}>
                  {isLast ? (
                    <span className="text-white">{value}</span>
                  ) : (
                    <Link to={routeTo} className="text-white">
                      {value}
                    </Link>
                  )}
                </BreadcrumbItem>
              );
            })}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default NavigationHeader;
