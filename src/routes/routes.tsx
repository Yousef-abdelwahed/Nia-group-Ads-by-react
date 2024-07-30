import { useRoutes } from "react-router-dom";

import { MasterLayout } from "../layout";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/niaGroup/page/home/Home";
import { NiaGroupLayout } from "../pages/niaGroup/layout";
const useHandleRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <NiaGroupLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "contact-us", element: <ContactUs /> },
      ],
    },
    
  ]);
  return { routes };
};

export default useHandleRoutes;
