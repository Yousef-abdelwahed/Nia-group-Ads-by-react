import { useTranslation } from "react-i18next";
import { footerLogo } from "../../../../assets";
import { customIcon } from "../../../../assets/icons/customIcon";
import { v4 as uuidv4 } from "uuid";

interface IProps {}
const socialIcons = [
  {
    id: uuidv4(),
    url: "",
    icon: customIcon.niaGroupIcon.socialIcon.youtube,
  },
  {
    id: uuidv4(),
    url: "",
    icon: customIcon.niaGroupIcon.socialIcon.google,
  },
  {
    id: uuidv4(),
    url: "https://www.facebook.com/niasolutions.eg",
    icon: customIcon.niaGroupIcon.socialIcon.facebook,
  },
  {
    id: uuidv4(),
    url: "",
    icon: customIcon.niaGroupIcon.socialIcon.whatsApp,
  },
  {
    id: uuidv4(),
    url: "https://www.instagram.com/niasolutions_eg/",
    icon: customIcon.niaGroupIcon.socialIcon.instagram,
  },
  {
    id: uuidv4(),
    url: "https://x.com/niasolutions_eg",
    icon: customIcon.niaGroupIcon.socialIcon.twitter,
  },
  {
    id: uuidv4(),
    url: "niasolutionslinkedin.com/company",
    icon: customIcon.niaGroupIcon.socialIcon.linkedIn,
  },
  {
    id: uuidv4(),
    url: "https://www.tiktok.com/@niasolutions_eg?lang=ar",
    icon: customIcon.niaGroupIcon.socialIcon.pinterest,
  },
  {
    id: uuidv4(),
    url: "https://www.pinterest.com/niasolutions/",
    icon: customIcon.niaGroupIcon.socialIcon.tiktok,
  },
];

const NiaGroupFooter = ({}: IProps) => {
  const { t, i18n } = useTranslation();
  const footerLinks = [
    { id: uuidv4(), page: t("nav.pages.home"), url: "#home" },
    {
      id: uuidv4(),
      page: t("nav.pages.aboutUs") + (i18n.language === "ar" ? " Nia" : ""),
      url: "#aboutUs",
    },
    { id: uuidv4(), page: t("nav.pages.ourServices"), url: "#ourServices" },
    { id: uuidv4(), page: t("nav.pages.ourTeam"), url: "#ourTeam" },
  ];
  return (
    <footer
      className={` bg-[#131312]  text-white mx-auto relative z-20 bottom-0 w-full   overflow-hidden  ${
        i18n.language === "ar" ? "rtl" : "ltr"
      }`}
    >
      <div className="footer_links mx-auto  max-md:max-w-[51.5%] md:max-w-[47.9%] lg:max-w-[30%] ">
        <img
          src={footerLogo}
          width={109}
          alt="logo of brand nia"
          className="mx-auto py-[32px]"
        />
        <ul className="grid gap-4 grid-cols-2  md:flex md:justify-between   ">
          {footerLinks.map((link) => (
            <li
              key={uuidv4()}
              className="text-[1.125rem]  text-[#DCDCDC] text-nowrap capitalize text-start  "
            >
              {link.page}
            </li>
          ))}
        </ul>
        <ul className="flex justify-center max-md:flex-wrap  gap-4 max-w-[264px] mt-[40px] pb-8  mx-auto">
          {socialIcons.map((icons) => (
            <div key={icons.id} className="">
              {icons.icon}
            </div>
          ))}
        </ul>
      </div>

      <div className="footer_details  mb-8 pt-8  text-4 text-[#DCDCDC] border-t-2 ">
        <div className="footer_details_location-description lg:flex items-center justify-between  w-[88.8%] mx-auto ">
          <div className="flex">
            <span className="inline-block me-2">
              {customIcon.locationIcon.pin}
            </span>
            <div className="footer_details_location-description font-normal">
              Salhiya-Riyadh-12662,SaudiArabia/ Al
              NasrBuildingGizasquare-Giza,Egypt Aziziyah-Jeddah-23337,SaudiArab
            </div>
          </div>
          <div className="footer_details-phone flex max-lg:mt-[18px]">
            <span className="inline-block me-2">
              {customIcon.locationIcon.telephone}
            </span>
            <div className="footer_details_location-description font-normal">
              +966551326054 / +201080721500{" "}
            </div>
          </div>
        </div>
        <div className="contact_details-number"></div>
      </div>
    </footer>
  );
};

export default NiaGroupFooter;
