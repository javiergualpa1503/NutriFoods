import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.jsx"
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import Food from "./Components/GridImage/Food.jsx";

const router = createBrowserRouter([
  {
    path: "/NutriFoods",
    element: <App/>,
    children:[{
      path: "",
      element: <Home/>,
    },{
      path: "carbohidratos",
      element: <Food tipo={'carbohidrato'}/>,
    },
    {
      path: "proteinas",
      element: <Food tipo={'proteina'}/>,
    },
    {
      path: "grasas",
      element: <Food tipo={'grasas'}/>,
    },
    {
      path: "frutas",
      element: <Food tipo={'frutas'}/>,
    }
  ],
  errorElement: <Navigate to={'/NutriFoods'}/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);