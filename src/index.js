import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {Helmet} from "react-helmet";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import st from 'settings';
import Login from "./pages/login/Login";
import MainPage from './pages/mainPage/MainPage';
import Airdrop from './pages/statistics/Airdrop';
import General from './pages/statistics/General';

const router = createBrowserRouter([
  {
    path: `${st.fedRoot}/`,
    element: <Login />
  },
  {
    path: `${st.fedRoot}/login`,
    element: <Login />
  },
  {
    path: `${st.fedRoot}/main`,
    element: <MainPage />
  },
  {
    path: `${st.fedRoot}/statistic/airdrop`,
    element: <Airdrop />
  },
  {
    path: `${st.fedRoot}/statistic/general`,
    element: <General />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <Helmet>
      <meta name="keywords" content="平和てき~" />
      <meta name="description" content="マサトの裏サイト" />
      <title>平和てき~ ^____^</title>
    </Helmet>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);