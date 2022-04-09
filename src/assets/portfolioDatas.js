import portfolio from "../assets/img/high-techigh-portfolio.png";
import highBookerWeb from "../assets/img/high-booker.png";
import highBookerDB from "../assets/img/high-booker-database.png";
import highSearchBook from "../assets/img/high-search-books.png";
import highVedio from "../assets/img/high-techigh-portfolio.png";
import {
  ApollographqlIcon,
  AwsIcon,
  // Css3Icon,
  GraphqlIcon,
  // Html5Icon,
  JavascriptIcon,
  // MysqllIcon,
  // NestjsIcon,
  // NodejsIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactLogoIcon,
  // TypescriptIcon,
  WebrtcIcon,
  StyledcomponentsIcon,
} from "../assets/Icons";

export const portfolioDatas = [
  {
    listNum: "1",
    listTitle: "Portfolio: Web",
    url: "techighportfolio",
    imgTitle: "Portfolio",
    imgSubtitle: "Web",
    src: portfolio,
    date: "April. 2022",
    stacks: {
      text: ["React JS", "Styled Components"],
      stacksIcon: [<ReactLogoIcon />, <StyledcomponentsIcon />],
    },
  },
  {
    listNum: "2",

    listTitle: "High-Booker: Web",
    url: "high-booker",
    imgTitle: "High-Booker",
    imgSubtitle: "Web",
    src: highBookerWeb,
    date: "Mar. 2022",
    stacks: {
      text: ["React JS", "Apollographql", "Styled Components"],
      stacksIcon: [
        <ReactLogoIcon />,
        <ApollographqlIcon />,
        <StyledcomponentsIcon />,
      ],
    },
  },
  {
    listNum: "3",

    listTitle: "High-Booker: Database / Server",
    url: "high-booker",
    imgTitle: "High-Booker",
    imgSubtitle: "Database",
    src: highBookerDB,
    date: "Mar. 2022",
    stacks: {
      text: ["Postgresql", "Prisma", "GraphQL", "Apollographql", "AWS S3"],
      stacksIcon: [
        <PostgresqlIcon />,
        <PrismaIcon />,
        <GraphqlIcon />,
        <ApollographqlIcon />,
        <AwsIcon />,
      ],
    },
  },
  {
    listNum: "4",
    listTitle: "High-Search-Books: Web",
    url: "high-search-book",
    imgTitle: "High-Search-Books",
    imgSubtitle: "Web",
    src: highSearchBook,
    date: "Mar. 2022",
    stacks: {
      text: ["React JS", "Rest API", "Styled Components"],
      stacksIcon: [<ReactLogoIcon />, "", <StyledcomponentsIcon />],
    },
  },
  {
    listNum: "5",
    listTitle: "High-Video: Web",
    url: "high-search-book",
    imgTitle: "High-Video",
    imgSubtitle: "Web",
    src: highVedio,
    date: "Mar. 2022",
    stacks: {
      text: ["JavaScript", "Web RTC"],
      stacksIcon: [<JavascriptIcon />, <WebrtcIcon />],
    },
  },
];
