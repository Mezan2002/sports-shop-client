import { Outlet, useLocation } from "react-router-dom";
import BottomNavMobile from "../shared/BottomNavMobile/BottomNavMobile";
import Footer from "../shared/Footer/Footer";
import NavigationBar from "../shared/NavigationBar/NavigationBar";

const MainLayout = () => {
  const location = useLocation();

  // Determine if the current path matches the condition
  const shouldShowFooter = !location.pathname.startsWith("/product/");

  return (
    <section>
      <NavigationBar />
      <div
        className={`md:max-w-[1480px] md:px-20 md:mx-auto -z-50 ${
          shouldShowFooter ? "py-8" : "py-0"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
      <BottomNavMobile />
    </section>
  );
};

export default MainLayout;
