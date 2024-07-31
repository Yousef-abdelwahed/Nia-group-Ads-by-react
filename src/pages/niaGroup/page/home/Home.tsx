import React from "react";
import { HomeImage, rectangles } from "../../../../assets";
import { data } from "../../../../data";

const Home = () => {
  const { title, subTitle, paragraph } = data.ourTeamData.header;
  const { locationEG, locationSA } = data.ourTeamData.teamLocation;

  // const {locationEG,locationSA}=data.ourTeamData.egTeam;

  console.log(data.ourTeamData);
  return (
    <div className=" relative  ">
      <section className="main_container   overflow-hidden  relative ">
        <img
          src={rectangles}
          alt="rectangles in the background "
          className="absolute bottom-[0%] left-0 w-[60px] "
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
          <img src={HomeImage} className="ms-auto  w-[80%] lg:h-[100vh]" />
        </div>
      </section>
      <section className="about_brand ">
        <div className="line-movies">line-movies</div>
        <div className="about_brand-container">about_brand-container</div>
      </section>
      <section className="service_container bg-stone-700 ">
        <div className="service_container-header">
          <h2>services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet suspendisse semper odio
            duis nascetur eget. Enim ullamcorper duis vulputate a sit
            suspendisse.
          </p>
        </div>
      </section>
      <section className="ourTeam">
        <img
          src={rectangles}
          alt="rectangles in the background "
          className="absolute bottom-[0%] left-0 w-[60px] "
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
                            className="min-w-[180px] lg:w-[193px] ourTeamImg  min-h-[160px] lg:h-[192px] shadow-md mx-auto"
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
