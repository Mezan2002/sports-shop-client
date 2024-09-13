import { Outlet } from "react-router-dom";
import BottomNavMobile from "../shared/BottomNavMobile/BottomNavMobile";
import Footer from "../shared/Footer/Footer";
import NavigationBar from "../shared/NavigationBar/NavigationBar";

const MainLayout = () => {
  return (
    <section>
      <NavigationBar />
      <div className="md:max-w-[1480px] md:mx-auto py-8 -z-50">
        <Outlet />
      </div>
      <Footer />
      <BottomNavMobile />
    </section>
  );
};

export default MainLayout;
