import highBookerWeb from "../assets/img/high-booker.JPG";
import highBookerDB from "../assets/img/high-booker-database.png";
import highSearchBook from "../assets/img/high-search-book.png";
import highVedio from "../assets/img/high-booker-web-3.png";
import portfolio from "../assets/img/portfolio.png";

export const portfolioDatas = [
  {
    listNum: "1",
    listTitle: "Portfolio: Web",
    url: "techighportfolio",
    imgTitle: "Portfolio",
    imgSubtitle: "Web",
    src: portfolio,
    date: "April. 2022",
    stacks: ["React JS"],
  },
  {
    listNum: "2",

    listTitle: "High-Booker: Web",
    url: "high-booker",
    imgTitle: "High-Booker",
    imgSubtitle: "Web",
    src: highBookerWeb,
    date: "Mar. 2022",
    stacks: ["React JS", "Apollo Client"],
  },
  {
    listNum: "3",

    listTitle: "High-Booker: Database / Server",
    url: "high-booker",
    imgTitle: "High-Booker",
    imgSubtitle: "Database",
    src: highBookerDB,
    date: "Mar. 2022",
    stacks: ["Postgresql", "GraphQL", "Apollo Server", "Prisma"],
  },
  {
    listNum: "4",
    listTitle: "Search-Books: Web",
    url: "high-search-book",
    imgTitle: "Search-Books",
    imgSubtitle: "Web",
    src: highSearchBook,
    date: "Mar. 2022",
    stacks: ["React JS", "Rest API", "GraphQL"],
  },
  {
    listNum: "5",
    listTitle: "High-Video: Web",
    url: "high-search-book",
    imgTitle: "High-Video",
    imgSubtitle: "Web",
    src: highVedio,
    date: "Mar. 2022",
    stacks: ["Web RTC", "JavaScript"],
  },
];
