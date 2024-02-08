import "./MainPageLayout.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MainPageLayout = ({children}) => {
  return (
    <div className="MainPageLayout">
      <Header> 
        <Navbar />
      </Header>
      <div>{children}</div>
      <Footer>

      </Footer>
    </div>
  );
};

export default MainPageLayout;
