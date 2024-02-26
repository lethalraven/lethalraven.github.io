import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "@pages/LandingPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage />, },
]);

interface AppProps {};

const App: React.FC<AppProps> = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;