import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPageLayout from "./pages/MainPageLayout/MainPageLayout";
import LandingPage from "./pages/LandingPage/LandingPage"
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";

const router = createBrowserRouter([
  { path: "/", element: <MainPageLayout> <LandingPage /> </MainPageLayout>, },
  { path: "/home", element: <MainPageLayout> <HomePage /> </MainPageLayout>, },
  { path: "/about", element: <MainPageLayout> <AboutPage /> </MainPageLayout>, },
  { path: "/skills", element: <MainPageLayout> <SkillsPage /> </MainPageLayout>, },
  { path: "/projects", element: <MainPageLayout> <ProjectsPage /> </MainPageLayout>, },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
