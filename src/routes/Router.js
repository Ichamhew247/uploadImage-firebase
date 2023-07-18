import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "../pages/Header";
import Homepage from "../pages/Homepage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Outlet />
        </>
      ),

      children: [
        {
          path: "/homepage",
          element: <Homepage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
