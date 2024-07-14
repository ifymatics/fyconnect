import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  Outlet,
} from "react-router-dom";

import "./App.scss";
import Home from "./components/home/Home";

import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Content from "./components/content/Content";
import StoriesLayout from "./components/storiesLayout/StoriesLayout";
import Auth from "./pages/auth/Auth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        { path: "", element: <Content /> },
        { path: "profile", element: <Profile /> },
        { path: "stories", element: <StoriesLayout /> },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/auth",

      element: <Auth />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      {/* <NavBar />

      <Home /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
