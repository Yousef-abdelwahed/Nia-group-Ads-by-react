import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../../Button";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher ";

interface IProps {
  type?: "header" | "footer" | "mobile";
  classes?: string;
}

const className =
  "font-medium lg:text-sm xl:text-xl 2xl:mx-4  flex flex-row items-center lg:mx-2   capitalize hover:text-orange-400 pt-3 transition bg-red-500";

const NavItems = ({ type = "header" }) => {
  const { t, i18n } = useTranslation();

  const location = useLocation();
  const getRoutesPages = (t: Function) => [
    { name: t("nav.pages.home"), url: "/", icon: "" },
    {
      name: t("nav.pages.aboutUs") + (i18n.language === "ar" ? " Nia" : ""),
      url: "about-us",
    },
    { name: t("nav.pages.ourServices"), url: "services", icon: "" },
    {
      name: t("nav.pages.ourTeam"),
      url: "/",
    },
  ];
  const routes = getRoutesPages(t);

  const linkPages = routes?.map((item, index) => {
    const { url } = item;

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
          {item.name}
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
          <div className="inline-block mx-2  items-center my-auto"></div>
        </Button>
      </div>
    </>
  );
};

export default NavItems;
