import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/login/Login";
import MainPage from './pages/mainPage/MainPage';
import Airdrop from './pages/statistics/Airdrop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/main",
    element: <MainPage />
  },
  {
    path: "/statistic/airdrop",
    element: <Airdrop />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);