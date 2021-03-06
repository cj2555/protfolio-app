// https://www.npmjs.com/package/react-scroll
import { Link } from "react-scroll";
// https://react-icons.github.io/react-icons/
import { FaChevronCircleDown } from "react-icons/fa";
import NavBar from "../containers/NavBar";
import SocialLinks from "./SocialLinks";

// Image
import logo from "../images/logo.svg";

const About = ({ theme, setTheme, githubUrl, name, link, bio, twitter }) => {
  const newTheme = `${theme} d-flex flex-column min-vh-100 justify-content-center`;
 
  const socialData = {
    githubUrl: githubUrl,
    link: link,
    twitter: twitter,
  };

  return (
    <header id="about" className={newTheme} style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/background/READ.jpg'})`
      
    }}>
      <NavBar theme={theme} setTheme={setTheme} />
      <div className="container text-center">
      
        <h1>{name}</h1>
        <hr />
        <h3>Software Engineer</h3>
        <p>{bio}</p>
        <SocialLinks {...socialData} />
        <Link className="scroll" to="skills" smooth={true} duration={750}>
          <FaChevronCircleDown id="scroll-down" />
        </Link>
      </div>
    </header>
  );
};

export default About;
