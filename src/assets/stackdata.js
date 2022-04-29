import {
  ApollographqlIcon,
  AwsIcon,
  Css3Icon,
  GraphqlIcon,
  Html5Icon,
  JavascriptIcon,
  MysqlIcon,
  NestjsIcon,
  NodejsIcon,
  PostgresqlIcon,
  PrismaIcon,
  ReactLogoIcon,
  TypescriptIcon,
  WebrtcIcon,
  StyledcomponentsIcon,
  NextdotjsIcon,
  TailwindcssIcon,
} from "../assets/Icons";

export const frontEndStacks = [
  { stack: "HTML5", skillLv: "Advanced", icon: <Html5Icon /> },
  { stack: "CSS3", skillLv: "Advanced", icon: <Css3Icon /> },
  { stack: "JavaScript", skillLv: "Advanced", icon: <JavascriptIcon /> },
  { stack: "TypeScript", skillLv: "Advanced", icon: <TypescriptIcon /> },
  { stack: "React JS", skillLv: "Advanced", icon: <ReactLogoIcon /> },
  { stack: "Next JS", skillLv: "Advanced", icon: <NextdotjsIcon /> },
  { stack: "React Native", skillLv: "Beginner", icon: <ReactLogoIcon /> },
  {
    stack: "Styled Components",
    skillLv: "Intermediate",
    icon: <StyledcomponentsIcon />,
  },
  {
    stack: "Tailwindcss",
    skillLv: "Advanced",
    icon: <TailwindcssIcon />,
  },
];
export const middleStacks = [
  { stack: "GraphQL", skillLv: "Advanced", icon: <GraphqlIcon /> },
  {
    stack: "ApolloGraphql",
    skillLv: "Intermediate",
    icon: <ApollographqlIcon />,
  },
];

export const backEndStacks = [
  { stack: "Node JS", skillLv: "Beginner", icon: <NodejsIcon /> },
  { stack: "Nest JS", skillLv: "Beginner", icon: <NestjsIcon /> },
  { stack: "MySQL", skillLv: "Beginner", icon: <MysqlIcon /> },
  { stack: "Postgresql", skillLv: "Beginner", icon: <PostgresqlIcon /> },
  { stack: "Rest API", skillLv: "Intermediate", icon: "Rest API" },
  { stack: "GraphQL", skillLv: "Advanced", icon: <GraphqlIcon /> },
  { stack: "Prisma", skillLv: "Intermediate", icon: <PrismaIcon /> },
  {
    stack: "ApolloGraphql",
    skillLv: "Intermediate",
    icon: <ApollographqlIcon />,
  },
  { stack: "AWS S3", skillLv: "Beginner", icon: <AwsIcon /> },
  { stack: "WebRTC", skillLv: "Beginner", icon: <WebrtcIcon /> },
];
