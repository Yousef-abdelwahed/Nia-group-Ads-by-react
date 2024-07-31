import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useRef, useState } from "react";
import { useClickAway } from "react-use";
import { footerLogo, navLogo } from "../../../../../assets";

import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Icon from "../../../../../assets/icons/Icons";
import Button from "../../../../Button";
import LanguageSwitcher from "../../../LanguageSwitcher/LanguageSwitcher ";

interface NavMobileProps {
  isVisible: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

const SidebarItem: FC<{
  title: string;
  href?: string;
  activeAccordion: boolean;
  toggleAccordion: any;
}> = ({ title, href, activeAccordion, toggleSidebar }) => {
  const mutedText = activeAccordion && "text-[#464440]";

  return (
    <li
      className={`p-2 hover:bg-gray-700 cursor-pointer  m-auto md:text-xl font-medium capitalize mx-auto &:not(:first-child)]:my-[2.5rem]  border-t border-[#4E4E4E]  ${mutedText}`}
    >
      <a
        href={href}
        className="flex items-center justify-end space-x-2 text-lg  font-medium  md:text-[22px] "
      >
        <span onClick={() => toggleSidebar()} className="block">
          {title}
        </span>
      </a>
    </li>
  );
};

const NavMobile: FC<NavMobileProps> = ({ isVisible, setOpen, isOpen }) => {
  const sidebarRef = useRef(null);
  useClickAway(sidebarRef, () => {
    if (isOpen) setOpen(false);
  });
  const [activeAccordion, setActiveAccordion] = useState(false);
  const toggleAccordion = () => setActiveAccordion((prev) => !prev);
  const toggleSidebar = () => setOpen((prev) => !prev);
  const items = [
    { title: "Home", href: "/" },
    { title: "about us", href: "about-us" },
    {
      title: "services",
      icon: <Icon name="ChevronLeft" size={24} color="#ffffff" />,
      href: "#",
    },
    { title: "our works", href: "#" },
    { title: "news", href: "news" },
  ];
  const routesServiceList = [
    { name: "design", url: "our-services/software" },
    { name: "software", url: "our-services/software" },
    { name: "advertising", url: "our-services/software" },
    { name: "photography", url: "our-services/software" },
    { name: "events", url: "our-services/software" },
    { name: " digital marketing", url: "our-services/software" },
  ];

  return (
    <motion.nav
      //fixed top-0 left-0 right-0 z-50 backdrop-filter backdrop-blur-xl bg-white/40
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : [-35, -50, -100, -100] }}
      transition={{ duration: 0.2, type: "spring" }}
      className={`lg:hidden flex justify-between w-screen h-[50px] md:h-20  bg-transparent absolute top-0 left-0 right-0 z-50 mt-4 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-[45px] md:w-[70px] h-auto left-0 mx-10 translate-y-[5px]">
        <img src={navLogo} alt="Logo" />
      </div>
      <aside className="transform ">
        <button
          aria-label="toggle sidebar"
          onClick={toggleSidebar}
          className="menuIcon mx-10 translate-y-[50%] md:translate-y-[100%] "
        >
          <Icon name="Menu" size={30} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={sidebarRef}
              initial={{ width: 0 }}
              animate={{ width: "100vw" }}
              exit={{ width: 0 }}
              className="bg-[#0E0D0D] flex flex-col justify-between text-white h-[101vh] absolute -top-5  right-0 shadow-lg overflow-hidden w-full"
            >
              <div className="p-4">
                <div className="flex justify-between items-center mb-[22px]">
                  <button
                    onClick={toggleSidebar}
                    className=" flex items-center my-auto  order-2 "
                  >
                    <Icon name="X" size={30} />
                  </button>
                  <Image
                    src={footerLogo}
                    alt="Nia logo"
                    boxSize={{ base: "70px" }}
                    className="order-1"
                  />
                </div>

                <ul
                  className="text-center first:mb-[22px] me-12 "
                  style={{ direction: "rtl" }}
                >
                  {items.map((item, index) => {
                    return (
                      <SidebarItem
                        toggleSidebar={toggleSidebar}
                        key={uuidv4()}
                        activeAccordion={activeAccordion}
                        {...item}
                      />
                    );
                  })}
                </ul>
              </div>
              <div className=" text-white mb-[50px] m-auto">
                <LanguageSwitcher />

                <Button className="capitalize">
                  <Link to={"contact-us"}>contact us</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </aside>
    </motion.nav>
  );
};

export default NavMobile;
