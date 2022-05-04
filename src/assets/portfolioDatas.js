// import styled from "styled-components";
import highmarket from "../assets/img/high-market.png";
import portfolio from "../assets/img/high-techigh-portfolio.png";
import highBookerWeb from "../assets/img/high-booker.png";
// import highBookerDB from "../assets/img/high-booker-database.png";
// import highSearchBook from "../assets/img/high-search-books.png";
// import highVedio from "../assets/img/high-techigh-portfolio.png";
import {
  ApollographqlIcon,
  AwsIcon,
  GraphqlIcon,
  JavascriptIcon,
  NetlifyIcon,
  NextdotjsIcon,
  PlanetScaleIcon,
  PostgresqlIcon,
  PrismaIcon,
  // AwsIcon,
  // Css3Icon,
  // GraphqlIcon,
  // Html5Icon,
  // JavascriptIcon,
  // MysqllIcon,
  // NestjsIcon,
  // NodejsIcon,
  // PostgresqlIcon,
  // PrismaIcon,
  ReactLogoIcon,
  // TypescriptIcon,
  // WebrtcIcon,
  StyledcomponentsIcon,
  TailwindcssIcon,
  TypescriptIcon,
  VercelIcon,
} from "../assets/Icons";

// const RestAPI = styled.span`
//   font-size: 12px;
// `;
export const portfolioDatas = [
  {
    listTitle: "High-Market: Web",
    url: "high-market.vercel.app",
    imgTitle: "High-Market",
    imgSubtitle: "Web",
    link: "/highmarket",
    imgSrc: highmarket,
    stacks: {
      text: [
        "Typescript",
        "Next JS",
        "Prisma",
        "Tailwindcss",
        "PlanetScale",
        "Vercel",
      ],
      stacksIcon: [
        <TypescriptIcon />,
        <NextdotjsIcon />,
        <PrismaIcon />,
        <TailwindcssIcon />,
        <PlanetScaleIcon />,
        <VercelIcon />,
      ],
    },
    coding: false,
  },
  {
    listTitle: "Portfolio: Web",
    url: "techighportfolio.netlify.app",
    imgTitle: "Portfolio",
    imgSubtitle: "Web",
    link: "/portfolio",
    imgSrc: portfolio,
    stacks: {
      text: ["Javascript", "React JS", "Styled Components", "Netlify"],
      stacksIcon: [
        <JavascriptIcon />,
        <ReactLogoIcon />,
        <StyledcomponentsIcon />,
        <NetlifyIcon />,
      ],
    },
    coding: false,
  },
  {
    listTitle: "High-Booker: Web",
    url: "high-booker.netlify.app",
    imgTitle: "High-Booker",
    imgSubtitle: "Web",
    link: "/highbooker",
    imgSrc: highBookerWeb,
    stacks: {
      text: [
        "Javascript",
        "React JS",
        "PostgresqlIcon",
        "Prisma",
        "GraphQL",
        "Apollographql",
        "Styled Components",
        "AWS S3",
        "Heroku",
        "Netlify",
      ],
      stacksIcon: [
        <JavascriptIcon />,
        <ReactLogoIcon />,
        <PostgresqlIcon />,
        <PrismaIcon />,
        <ApollographqlIcon />,
        <GraphqlIcon />,
        <StyledcomponentsIcon />,
        <AwsIcon />,
      ],
    },
    coding: false,
  },
  // {
  //   listNum: "3",

  //   listTitle: "High-Booker: Database / Server",
  //   url: "high-booker",
  //   imgTitle: "High-Booker",
  //   imgSubtitle: "Database",
  //   imgSrc: highBookerDB,
  //   stacks: {
  //     text: ["Postgresql", "Prisma", "GraphQL", "Apollographql", "AWS S3"],
  //     stacksIcon: [
  //       <PostgresqlIcon />,
  //       <PrismaIcon />,
  //       <GraphqlIcon />,
  //       <ApollographqlIcon />,
  //       <AwsIcon />,
  //     ],
  //   },
  //   coding: false,
  // },
  // {
  //   listNum: "4",
  //   listTitle: "High-Search-Books: Web",
  //   url: "high-search-book",
  //   imgTitle: "High-Search-Books",
  //   imgSubtitle: "Web",
  //   imgSrc: highSearchBook,
  //   stacks: {
  //     text: ["React JS", "Styled Components", "Rest API"],
  //     stacksIcon: [
  //       <ReactLogoIcon />,
  //       <StyledcomponentsIcon />,
  //       <RestAPI>RestAPI</RestAPI>,
  //     ],
  //   },
  //   coding: false,
  // },
  // {
  //   listNum: "5",
  //   listTitle: "High-Video: Web",
  //   url: "high-search-book",
  //   imgTitle: "High-Video",
  //   imgSubtitle: "Web",
  //   imgSrc: highVedio,
  //   stacks: {
  //     text: ["JavaScript", "Web RTC"],
  //     stacksIcon: [<JavascriptIcon />, <WebrtcIcon />],
  //   },
  //   coding: true,
  // },
  // {
  //   listNum: "6",
  //   listTitle: "High-Booker: App",
  //   url: "high-booker",
  //   imgTitle: "High-Booker",
  //   imgSubtitle: "App",
  //   imgSrc: highVedio,
  //   stacks: {
  //     text: ["React Native"],
  //     stacksIcon: [<ReactLogoIcon />],
  //   },
  // },
];
