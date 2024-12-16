import {
  createBrowserRouter,
  RouterProvider,
  createHashRouter,
  Outlet,
  Navigate,
} from "react-router-dom";

import "./App.scss";
import Home from "./components/home/Home";

import Login from "./pages/login/Login";

import Profile from "./pages/profile/Profile";
import Content from "./components/content/Content";
import StoriesLayout from "./components/storiesLayout/StoriesLayout";
import Auth from "./pages/auth/Auth";
import { useSelector } from "react-redux";
import { FC } from "react";

type State = {
  auth: { authenticated: boolean };
};
interface AuthRoute {
  children: React.ReactElement;
}
function App() {
  const { authenticated } = useSelector((state: State) => state.auth);
  const AuthProtectedRoute: FC<AuthRoute> = ({ children }: AuthRoute) => {
    if (!authenticated) return <Navigate to="/login" />;
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthProtectedRoute>
          <Home />
        </AuthProtectedRoute>
      ),
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
