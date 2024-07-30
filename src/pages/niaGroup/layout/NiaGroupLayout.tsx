import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { FooterForGroup, Header } from "../../../components/Navigation";

const NiaGroupLayout = () => {
  const { i18n } = useTranslation();

  return (
    <>
      {/* <Header /> */}
      <main
        className={`overflow-hidden ${
          i18n.language === "ar" ? "rtl" : "ltr"
        } bg-[rgb(255,253,251)]`}
      >
        <Outlet />
      </main>
      <FooterForGroup />
    </>
  );
};

export default NiaGroupLayout;
