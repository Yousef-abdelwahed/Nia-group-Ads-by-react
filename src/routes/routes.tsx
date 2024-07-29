import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import { HomePage } from "../pages";
import ContactUs from "../pages/ContactUs";

const useHandleRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        { path: "contact-us", element: <ContactUs /> },
      ],
    },
  ]);
  return { routes };
};

export default useHandleRoutes;
