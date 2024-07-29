import { Outlet } from "react-router-dom";
import i18n from "../../../location/i18n";

const HomeLayout = () => {
  return (
    <div
      className={`overflow-hidden ${
        i18n.language === "ar" ? "rtl" : "ltr"
      } bg-[rgb(255,253,251)]`}
    >
      <Outlet />
    </div>
  );
};

export default HomeLayout;
