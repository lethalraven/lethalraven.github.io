import { ReactNode } from "react";
import { Header } from "@components/Header";
import { Navbar } from "@components/Navbar";

interface MainLayoutProps {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({children}) => {
  return (
    <div className="MainLayout">
      <Header>
        <Navbar />
      </Header>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;