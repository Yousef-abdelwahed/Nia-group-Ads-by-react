import { ChevronDownIcon } from "@chakra-ui/icons";
import { Center, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { customIcon } from "../../../assets/icons/customIcons";
import { v4 as uuidv4 } from "uuid";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Button from "../../Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher ";
import { useTranslation } from "react-i18next";

interface IProps {
  type?: "header" | "footer" | "mobile";
  classes?: string;
}

const getRoutesPages = (t: Function) => [
  { name: t("nav.pages.home"), url: "/", icon: "" },
  {
    name: "nia" + t("nav.pages.aboutUs") + "",
    url: "about-us",
    icon: customIcon.rightArrowFooter,
  },
  { name: t("nav.pages.ourServices"), url: "services", icon: "" },
  {
    name: t("nav.pages.ourTeam"),
    url: "/",
    icon: customIcon.rightArrowFooter,
  },
];
const className =
  "font-medium lg:text-sm xl:text-xl 2xl:mx-4  flex flex-row items-center lg:mx-2   capitalize hover:text-orange-400 pt-3 transition bg-red-500";

const NavItems = ({ type = "header" }) => {
  const { t } = useTranslation();
  const routes = getRoutesPages(t);

  const location = useLocation();
  const linkPages = routes?.map((item, index) => {
    const { url, name, icon } = item;

    const isActive = location.pathname === url;
    return (
      <li
        key={uuidv4()}
        className={`text-start  my-auto   ${
          type === "footer" && "flex items-center first:pb-[22px]"
        }`}
      >
        {" "}
        <a
          href={`#${url}`}
          className={
            className +
            "" +
            ` text-nowrap relative  transition duration-300 ${
              isActive ? "active" : ""
            }`
          }
        >
          {type === "footer" && icon} {item.name}
        </a>
      </li>
    );
  });

  return (
    <>
      <ul
        key={uuidv4()}
        className={`flex justify-center  ${
          type === "header"
            ? "mx-auto   items-center w-full   max-h-[150px] "
            : ""
        }`}
      >
        {linkPages}
      </ul>
      <div className="ms-auto my-auto  font-medium flex ">
        <LanguageSwitcher classes="text-dark" />
        <Button className="flex flex-row items-center  justify-center">
          <Link
            to="contact-us"
            className="inline-block order-1 my-auto text-xl capitalize "
          >
            {t("components.contactUs")}
          </Link>
          <div className="inline-block mx-2  items-center my-auto">
            {customIcon.arrowsIcon.contactBtn}
          </div>
        </Button>
      </div>
    </>
  );
};

export default NavItems;
