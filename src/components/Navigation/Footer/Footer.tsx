import React from "react";

import { useTranslation } from "react-i18next";
import { customIcon } from "../../../assets/icons/customIcons";
import { footerLogo, logo } from "../../../assets";

interface IProps {}
const socialIcons = [
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.facebook,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.ig,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.linkedIn,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.pinterest,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.tiktok,
  },
  {
    url: "",
    icon: customIcon.socialmediaFooterIcons.twitter,
  },
];

const Footer = ({}: IProps) => {
  const { t, i18n } = useTranslation();
  const footerLinks = {
    home: {},
  };
  return (
    <footer
      className={` bg-[#131312]  text-white mx-auto     ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="mx-auto ">
        <img
          src={footerLogo}
          width={109}
          alt="logo of brand nia"
          className="mx-auto"
        />
      </div>
    </footer>
  );
};

export default Footer;
