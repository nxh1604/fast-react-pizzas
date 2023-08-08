import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home/Home";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as OrderAction,
} from "./features/order/CreateOrder";
import { loader as OrderLoader } from "./features/order/OrderLoader";
import OrderLoading from "./features/order/Order";
import AppLayout from "./ui/AppLayout/AppLayout";
import Error from "./ui/Error";
import { action as UpdateOrderAction } from "./features/order/UpdateOrder";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: MenuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: OrderAction,
      },
      {
        path: "/order/:orderId",
        element: <OrderLoading />,
        loader: OrderLoader,
        errorElement: <Error />,
        action: UpdateOrderAction,
      },
    ],
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
