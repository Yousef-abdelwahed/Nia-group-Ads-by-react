import { niaTeams } from "./assets";

const { SA, EG } = niaTeams;

const data = {
  ourTeamData: {
    header: {
      title: "meet our",
      subTitle: "meet our",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur. Viverra tristique vitae rutrum dui aliquet sed at nunc convallis. Tellus facilisis adipiscing cras est.",
    },
    teamLocation: {
      locationSA: "saudi arabia",
      locationEG: "egypt",
    },
    saTeam: [
      {
        name: "youssef bwazzer",
        position: "general manager",
        image: SA.seo,
      },
      {
        name: "ahmed elshigh",
        position: "executive manager",

        image: SA.EM,
      },
      {
        name: "samir el bataty",
        position: "administrative manager",
        image: SA.AM,
      },
    ],
    egTeam: [
      {
        name: "hossam el masry",
        position: "executive manager",

        image: EG.EM,
      },
      {
        name: "shadi youssef",
        position: "marketing manager",
        image: EG.MM,
      },
      {
        name: "abdallah el bataty",
        position: "administrative manager",
        image: EG.AM,
      },
    ],
  },
};

export { data };
