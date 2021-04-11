// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNpm,
  FaGitAlt,
  FaGithubSquare,
  FaLaravel,
  FaNode,
  FaVuejs,
  
} from "react-icons/fa";
import { SiJavascript ,SiMongodb,SiMysql} from "react-icons/si";

// Projects Images (add your images to the /assets/images directory and import below)
import colors from "./assets/images/colors.svg";
import react from "./assets/images/logo.svg";
import notepad from "./assets/images/notepad.svg";

/* START HERE - add your GitHub username below
 ************************************************************** */
export const githubUsername = "cj2555";

/* Skills
 ************************************************************** */
// Add or remove skills in the SAME format below, there must be one icon imported above per skill below and 3 skills per row
export const skillData = [
  {
    id: 1,
  
    skill: <FaVuejs className="display-4" />,
    name: "Vue",
  },
    {
    id: 2,
    skill: <FaLaravel className="display-4" />,
    name: "Laravel",
  },
  
  {
    id: 3,
    skill: <SiJavascript className="display-4" />,
    name: "JavaScript",
  },
   {
    id: 4,
    skill: <FaReact className="display-4" />,
    name: "React",
  },
 
   {
    id: 5,
    skill: <FaNode className="display-4" />,
    name: "Node",
  },
  {
    id: 6,
    skill: <FaSass className="display-4" />,
    name: "Sass",
  },
  {
    id: 7,
    skill: <SiMysql className="display-4" />,
    name: "Mysql",
  },
  {
    id: 8,
    skill: <FaGitAlt className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <SiMongodb className="display-4" />,
    name: "MongoDb",
  },
   {
    id: 10,
    skill: <FaCss3Alt className="display-4" />,
    
    name: "CSS3",
  },
    {
    id: 11,
    skill: <FaBootstrap className="display-4" />,
    name: "Bootstrap",
  },
   
     {
    id: 12,
    skill: <FaHtml5 className="display-4" />,
    name: "HTML5",
  },
];

/* Projects
 ************************************************************** */
// List the repo names you want to include (they will be sorted alphabetically), leave the array empty if you want to include everything
export const filteredProjects = [
  "Background-Generator",
  "github-react-portfolio-template",
  "notepad",
];

// List the card images you want to include in the same order as the repos above (alphabetically)
// There MUST be one image per repo above or the defualt image will be applied
export const projectData = [
  {
    image: `${process.env.PUBLIC_URL + '/background/READ.jpg'}`
  },
  {
    image: `${process.env.PUBLIC_URL + '/background/covid.jpg'}`,
  },
   {
    image: `${process.env.PUBLIC_URL + '/background/ordering.jpg'}`,
  },

  {
    image: `${process.env.PUBLIC_URL + '/background/giftshop.jpg'}`,
  },


];

/* Contact Info
 ************************************************************** */
// Share the contact info you are comfortable with (no dashes for phone numbers)
// If no info provided a button with a link to mailchimp will be rendered, update the link if you want to use this option
export const contactInfo = {
  email: "abir4584@gmail.com",
  phone: "",
  mailChimp: "https://www.mailchimp.com/",
};
