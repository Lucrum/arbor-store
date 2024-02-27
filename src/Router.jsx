import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Item from "./pages/Item";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
    {
      path: "shop/item/:id",
      element: <Item />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
