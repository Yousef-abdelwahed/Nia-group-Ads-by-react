import AOS from "aos";
import "aos/dist/aos.css";
import React, { FC } from "react";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { aboutNia1, aboutNia2 } from "../../assets";
import { customIcon } from "../../assets/icons/customIcons";

interface HomeProps {}

const aboutImages = [{ src: aboutNia1 }, { src: aboutNia2 }];
const customPadding = " px-[18px] sm:px-10 lg:px-[100px]";
const HomePage: FC<HomeProps> = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const controlNavbar = () => {
    if (window.scrollY >= 1 && window.scrollY < 3800) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
    setLastScrollY(window.scrollY);
  };
  React.useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return <>{isVisible && <div>Home</div>}</>;
};
export default HomePage;
