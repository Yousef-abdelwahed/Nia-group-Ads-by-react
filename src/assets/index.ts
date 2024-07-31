// logs
import navLogo from "./images/logo/logo.png";
import footerLogo from "./images/logo/footerLogo.png";

// homeNia
import HomeImage from "./images/Home/home.png";
// about Nia
import aboutNiaGroup from "./images/AboutSection/aboutUs.png";

// service
import serviceNiaGroup from "./images/servicesSection/serviceSection.png";

import ourTeam1 from "./images/ourTeam/ourTeam1.png";

// contact us
import contactCover from "./images/contactUs/contactCover.png";
import contactUsGroup from "./images/contactUs/contactUs.png";

// rectangles
import rectangles from "./images/victoresTriangles/rectangles.png";
import rightRec from "./images/victoresTriangles/leftRec.png";
import LeftRec from "./images/victoresTriangles/patternright.png";

// service Icons
import adsIcon from "./images/victoresTriangles/adsICon.svg";
import solutionIcon from "./images/victoresTriangles/solutionIcon.svg";
import zz from "./images/victoresTriangles/zzz.svg";
export {
  footerLogo,
  navLogo,
  HomeImage,
  aboutNiaGroup,
  serviceNiaGroup,
  ourTeam1,
  contactUsGroup,
  contactCover,
  rectangles,
  zz,
};

export const homeImgsNiaGroup = {
  mainSection: HomeImage,
  aboutUs: aboutNiaGroup,
  ourServicesImg: serviceNiaGroup,
  ourTeam: ourTeam1,
};
export const contactUsNiaGroup = {
  contacts: contactUsGroup,
  cover: contactCover,
};

export const niaTeams = {
  SA: {
    seo: { src: ourTeam1, alt: "nia seo manager" },
    EM: { src: ourTeam1, alt: "nia executive manager manager" },
    AM: { src: ourTeam1, alt: "nia administrative manager manager" },
  },
  EG: {
    EM: { src: ourTeam1, alt: "nia executive manager manager" },
    MM: { src: ourTeam1, alt: "nia marketing manager manager" },
    AM: { src: ourTeam1, alt: "nia administrative manager manager" },
  },
};
export const RectanglesBackImg = {
  right: rightRec,
  left: LeftRec,
};

export const serviceIcons = {
  adsIcon: adsIcon,
  solutionIcon: solutionIcon,
};
