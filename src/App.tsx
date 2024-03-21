import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { MainLayout } from "pages/MainLayout";
import { LandingPage } from "pages/LandingPage";
import { HomePage } from "pages/HomePage"; 
import { AboutPage } from "pages/AboutPage";
import { SkillsPage } from "pages/SkillsPage"; 
import { ProjectsPage } from "pages/ProjectsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={ <MainLayout /> }>
      <Route path="/" element={ <LandingPage /> }/>
      <Route path="/home" element={ <HomePage /> }/>
      <Route path="/about" element={ <AboutPage /> }/>
      <Route path="/skills" element={ <SkillsPage /> }/>
      <Route path="/projects" element={ <ProjectsPage /> }/>
    </Route>
  )
);

interface AppProps {};

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;