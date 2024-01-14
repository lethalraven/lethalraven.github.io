import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './utils/Root';
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error/>,
    children: [
      { index: true, element: <Home />, },
      { path: "about", element: <About />, },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;


