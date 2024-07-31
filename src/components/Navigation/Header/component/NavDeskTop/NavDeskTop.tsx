import { motion } from "framer-motion";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { navLogo } from "../../../../../assets";
import NavItems from "../../../NavLinks/NavLinks";

interface IProp {
  isVisible: boolean;
}

const NavDeskTop: FC<IProp> = ({ isVisible }) => {
  const { i18n } = useTranslation();
  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : [-35, -50, -100, -140] }}
      transition={{ duration: 0.2, type: "spring" }}
      className={`max-lg:hidden  container pt-6  absolute   top-0 left-0 right-0 mt-4 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${i18n.language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className=" flex ">
        <div className={` ${i18n.language !== "ar" ? "" : ""} `}>
          <img src={navLogo} className="2xl:w-[70%] h-auto" alt="" />
        </div>
        <NavItems />
      </div>
    </motion.nav>
  );
};

export default NavDeskTop;
