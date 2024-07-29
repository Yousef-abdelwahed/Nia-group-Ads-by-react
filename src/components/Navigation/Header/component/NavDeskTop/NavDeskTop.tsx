import { motion } from "framer-motion";
import { FC } from "react";
import { logo, navBg, navImg } from "../../../../../assets";
import NavItems from "../../../NavLinks/NavLinks";
import { customIcon } from "../../../../../assets/icons/customIcons";
import { useTranslation } from "react-i18next";

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
      className={`max-lg:hidden  container pt-6  ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${i18n.language === "ar" ? "rtl" : "ltr"}`}
    >
      <div className=" flex ">
        <div className={` ${i18n.language !== "ar" ? "" : ""} `}>
          <img src={logo} className="2xl:w-[70%] h-auto" alt="" />
        </div>
        <NavItems />
      </div>
    </motion.nav>
  );
};

export default NavDeskTop;
