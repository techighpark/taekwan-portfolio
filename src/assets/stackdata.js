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
  VercelIcon,
  NetlifyIcon,
  GithubIcon,
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
    stack: "ApolloGraphql",
    skillLv: "Intermediate",
    icon: <ApollographqlIcon />,
  },
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
  { stack: "WebRTC", skillLv: "Beginner", icon: <WebrtcIcon /> },
];

export const backEndStacks = [
  { stack: "Node JS", skillLv: "Intermediate", icon: <NodejsIcon /> },
  { stack: "Nest JS", skillLv: "Beginner", icon: <NestjsIcon /> },
  { stack: "MySQL", skillLv: "Beginner", icon: <MysqlIcon /> },
  { stack: "Postgresql", skillLv: "Beginner", icon: <PostgresqlIcon /> },
  { stack: "Rest API", skillLv: "Intermediate", icon: "Rest API" },
  { stack: "GraphQL", skillLv: "Advanced", icon: <GraphqlIcon /> },
  { stack: "Prisma", skillLv: "Intermediate", icon: <PrismaIcon /> },
  { stack: "AWS S3", skillLv: "Beginner", icon: <AwsIcon /> },
];

export const deploymentStacks = [
  { stack: "Heroku", skillLv: "Intermediate", icon: <GraphqlIcon /> },
  { stack: "Vercel", skillLv: "Intermediate", icon: <VercelIcon /> },
  { stack: "Netilify", skillLv: "Intermediate", icon: <NetlifyIcon /> },
];

export const versionStacks = [
  { stack: "Github", skillLv: "Advanced", icon: <GithubIcon /> },
];
