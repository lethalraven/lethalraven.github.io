import { Outlet } from "react-router-dom";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

interface MainLayoutProps {};

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="MainLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;