import React from "react";
import { Translation, useTranslation } from "react-i18next";
import {
  aboutNiaGroup,
  HomeImage,
  rectangles,
  RectanglesBackImg,
  serviceIcons,
  zz,
} from "../../../../assets";
import { data } from "../../../../data";

const Home = () => {
  const { i18n } = useTranslation();

  // const { t, i18n } = Translation;
  // console.log(i18n);
  const { title, subTitle, paragraph } = data.ourTeamData.header;
  const { locationEG, locationSA } = data.ourTeamData.teamLocation;
  const { header, ads, servicesImg } = data.ourServices;
  const { left, right } = RectanglesBackImg;
  const aboutUsLitter = `1993 saw a turning point in the domestic market; Because it was
  founded. Our company NIA specializes in propaganda and advertising,
  and we found that the market Hungry for creativity, we decided to
  satisfy it with our endless ideas and our honesty in Our promises
  have been made for more than 30 years, and we're starting to show
  up. Business by innovating solutions and designs by a selection of
  the best experts in All fields as we contributed to the industry and
  installation of more than 150,000 meters for all species.
  Advertising signs and we would not have provided these services with
  the required efficiency had they not been one of our factories
  established across Saudi Arabia and designed for me. Even the
  highest level of efficiency, equipped with the latest machines in
  the world, created our own production line. Now we are building
  bridges towards software and digital marketing to achieve the same
  successes as advertising.`;
  const sentences = aboutUsLitter
    .split(".")
    .filter((sentence) => sentence.trim().length > 0);

  return (
    <div className=" relative  ">
      <section className="main_container   overflow-hidden  relative ">
        <img
          src={rectangles}
          alt="rectangles in the background "
          className={`absolute bottom-[0%] left-0 w-[60px] md:w-[80px] lg:w-[130px]  transform  ${
            i18n.language === "ar"
              ? "bottom-[0%] -right-5 "
              : "bottom-[0%] left-0 "
          }`}
        />

        <div className="main_container-left absolute  bottom-[50%] transform translate-y-[50%] ">
          <h1 className="main_container-header capitalize break-words	font-bold text-center  text-[28px] md:text-[40px] lg:text-[70px] lg:w-[597px]  w-[50%]">
            Welcome to the world of <span className="text-primary">Nia</span>
          </h1>
          <div className="input-wrapper w-[90.4%] md:w-[49.7%] lg:w-[80%]  mx-auto ms-5 lg:ms-10 my-5 absolute top-5 ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded min-h-[44px] max-h-[60px] "
            />
            <button className="bg-red-400 ">send</button>
          </div>
        </div>
        <div className="main_container-right  max-h-[1024px]">
          <img
            src={HomeImage}
            className={`ms-auto  w-[80%] lg:h-[100vh]   ${
              i18n.language === "ar" && "scaleImg"
            }`}
          />
        </div>
      </section>
      <section className="about_brand mt-6 bg-[#F5F5F5]">
        <div className="line_services_container  relative ">
          <div className="">{/* <BrandSlider /> */}</div>
          <div className="line-services background-text bottom-5">Nia</div>
        </div>
        <div className="about_brand_container container ">
          <div className="about_brand-header mx-4">
            <h2 className="capitalize ">
              About <span className="text-primary max-md:">NIA</span>
            </h2>
          </div>
          <div className="about_brand_container flex flex-col md:flex-row md:gap-11  mx-4 md:mt-8 lg:mt-14">
            <article className="about_brand-Litter max-md:order-2 max-md:mt-4 md:text-[18px] max-w-[765px]  ">
              {sentences.map((sentence, index) => (
                <React.Fragment key={index}>
                  {sentence.trim() + "."}
                  {index !== sentences.length - 1 && <br />}
                </React.Fragment>
              ))}
            </article>
            <div className="about_brand-img order-1  mx-auto relative max-md:my-10 bg-stone-400 w-full">
              <div className="bg-stone-400 relative  w-[76.8%] md:w-[366px]">
                <img
                  src={left}
                  alt=""
                  className="absolute -top-5 -left-5 z-0"
                />
                <img
                  src={left}
                  alt=""
                  className="absolute -bottom-5 -right-5 rotate-180 "
                />
                <img
                  src={aboutNiaGroup}
                  alt=""
                  className="mx-auto relative  z-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service_container  relative ">
        <img
          src={rectangles}
          alt="rectangles in the background "
          className={`absolute w-[60px] md:w-[80px] lg:w-[130px]  ${
            i18n.language === "ar"
              ? "bottom-[0%] -right-10 "
              : "bottom-[0%] left-0 "
          }`}
        />
        <div className="py-8 container">
          <div className="service-header">
            <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.125rem] font-bold">
              {header.title}
            </h2>
            <p className="p-line-hight max-w-[664px] mt-4 md:mt-6">
              {header.paragraph}
            </p>
          </div>
          <div className="service_cover">
            <div className="service_cover-img  relative  p-6  -bottom-20">
              <img src={left} alt="" className="absolute top-0 left-0 " />
              <img
                src={left}
                alt=""
                className="absolute bottom-0 right-0 rotate-180 "
              />

              <img
                className="lg:max-h-[370px] h-[200px] md:h-[350px]  mx-auto  w-[100%] relative"
                src={servicesImg}
                alt="employee in meeting room  "
              />
            </div>
            <div className="service_card-container md:flex relative  gap-6 justify-center ">
              {/*  */}
              <div className="service_card-box shadowEffect max-md:mt-20 max-md:mx-auto  bg-white p-2 w-[327px] md:w-[327px] lg:w-[465px] rounded-lg text-center ">
                <div className="service_card-Icon relative ">
                  <img
                    className="mx-auto absolute  top-[-70px] left-[50%]  transform -translate-x-[50%]"
                    src={serviceIcons.adsIcon}
                    alt="service advertising Icon  "
                  />
                  <img
                    className="mx-auto absolute -top-10 left-[50%] transform -translate-x-[50%]"
                    src={zz}
                    alt=""
                  />
                </div>
                <div className="service_card-body pt-20">
                  <div className="service_card-title">
                    <h3 className="text-[1.75rem] md:text-[2rem] font-semibold capitalize ">
                      Nia advertising
                    </h3>
                  </div>
                  <div className="service_card-description mb-10 text-[#828282] text-center text-[20px] lg:text-[24px] mt-4 lg:mt-8 max-w-[415px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Curabitur molestie
                  </div>
                  <div className="service_card-readMore flex gap-3 justify-center ">
                    <span className="my-auto font-semibold capitalize">
                      show more
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M32.5034 20L24.17 11.6666M32.5034 20L24.17 28.3333M32.5034 20L15.8367 20C13.0589 20 7.50336 21.6666 7.50336 28.3333"
                          stroke="#EF7D00"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="service_card-box shadowEffect max-md:mt-20 max-md:mx-auto pb-10 bg-white p-2 w-[327px] md:w-[327px] lg:w-[465px] rounded-lg text-center ">
                <div className="service_card-Icon relative ">
                  <img
                    className="mx-auto absolute  top-[-70px] left-[50%]  transform -translate-x-[50%]"
                    src={serviceIcons.adsIcon}
                    alt="service advertising Icon  "
                  />
                  <img
                    className="mx-auto absolute -top-10 left-[50%] transform -translate-x-[50%]"
                    src={zz}
                    alt=""
                  />
                </div>
                <div className="service_card-body pt-20">
                  <div className="service_card-title">
                    <h3 className="text-[1.75rem] md:text-[2rem] font-semibold capitalize ">
                      Nia advertising
                    </h3>
                  </div>
                  <div className="service_card-description mb-10 text-[#828282] text-center text-[20px] lg:text-[24px] mt-4 lg:mt-8 max-w-[415px] mx-auto">
                    Lorem ipsum dolor sit amet consectetur. Curabitur molestie
                  </div>
                  <div className="service_card-readMore flex gap-3 justify-center ">
                    <span className="my-auto font-semibold capitalize">
                      show more
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                      >
                        <path
                          d="M32.5034 20L24.17 11.6666M32.5034 20L24.17 28.3333M32.5034 20L15.8367 20C13.0589 20 7.50336 21.6666 7.50336 28.3333"
                          stroke="#EF7D00"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ourTeam">
        <img
          src={rectangles}
          alt="rectangles in the background "
          className={`absolute bottom-[0%] left-0 w-[60px] md:w-[80px] lg:w-[130px]  ${
            i18n.language === "ar"
              ? "bottom-[0%] -right-10 "
              : "bottom-[0%] left-0 "
          }`}
        />
        <div className="container max-md:py-10 md:py-[57px] lg:py-20  ">
          <div className="mx-[18px] md:mx-[32px]">
            <h2 className="capitalize">
              {title} <span className="text-primary max-md:">{subTitle}</span>
            </h2>
            <p className="p-line-hight text-dark text-[1rem] md:text-lg mt-4 max-w-[912px]">
              {paragraph}
            </p>
          </div>
          <div>
            <div className="team_container mx-[18px] md:mx-[32px]">
              <div className="team_SA lg:flex    mt-10">
                <h3 className=" md:mb-6 order-2 max-lg:text-end text-[1.375rem] md:text-4xl lg:text-[48px] uppercase tracking-[1.54px]">
                  {locationSA}
                </h3>
                <div className="flex order-1 flex-col md:flex-row md:gap-[32px] max-md:justify-center  md:justify-start    mb-[1.125rem]">
                  {data.ourTeamData.saTeam.map((member) => {
                    return (
                      <div
                        key={member.name}
                        className="team_card-member   max-w-[63.2%] max-md:mx-auto  md:max-w-[57.6%]"
                      >
                        <figure>
                          <img
                            src={member.image.src}
                            alt={member.image.alt}
                            className="min-w-[180px] lg:w-[193px] ourTeamImg  min-h-[160px] lg:h-[192px]  mx-auto"
                          />
                          <figcaption className="text-[22px] max-w-[14rem] md:text-[24px] lg:text-[28px] capitalize font-semibold text-center my-2">
                            {member.position}
                          </figcaption>
                        </figure>
                        <h4 className="text-[#464440] text-center text-[18px] md:text-[20px] lg:text-[24px] capitalize">
                          {member.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="team_EG lg:flex  lg:w-[78.2%] ms-auto mt-10 ">
                <h3 className=" text-end md:mb-6   order-1 max-lg:text-start text-[1.375rem] md:text-4xl lg:text-[48px] uppercase tracking-[1.54px]">
                  {locationEG}
                </h3>
                <div className="flex w-[81.6%] order-2  flex-col md:flex-row md:gap-[32px]   md:justify-end ms-auto    mb-[1.125rem]">
                  {data.ourTeamData.egTeam.map((member) => {
                    return (
                      <div
                        key={member.name}
                        className="team_card-member     w-full max-md:mx-auto  md:max-w-[57.6%] text-center"
                      >
                        <figure>
                          <img
                            src={member.image.src}
                            alt={member.image.alt}
                            className="min-w-[180px] lg:w-[193px] ourTeamImg  min-h-[160px] lg:h-[192px]   mx-auto "
                          />
                          <figcaption className="text-[22px] max-w-[14rem]  leading-normal md:text-[24px] lg:text-[28px] capitalize font-semibold  mx-auto text-center my-2">
                            {member?.position}
                          </figcaption>
                        </figure>
                        <h4 className="text-[#464440] text-center text-[18px] md:text-[20px] lg:text-[24px] mx-auto capitalize">
                          {member.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
