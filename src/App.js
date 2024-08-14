import styles from "./App.module.css";
import Nav from "./components/Nav.js" 
import { Link } from "react-router-dom";
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import { GrMail } from "react-icons/gr"

const App = () => {
  
  return (<>
    {/* <Nav /> */}
    <div class={styles.main}>
  
    <h1>Frank Jin</h1>
    <hr />
    <Link to="/notes">Notes</Link>&nbsp; &nbsp; <Link to="/experience">Experience</Link>
    <hr />
    <h3>About</h3>
    <p>Hello! I am a 4th year undergraduate <span className={styles.highlight}>Computer Science</span> student at the <span className={styles.highlight}>University of Waterloo</span>. I have experience in <span className={styles.highlight}>full stack development and data engineering</span>, and enjoy learning the mathematical foundations of computer science as well as pure mathematics. I enjoy playing <a href="https://jstris.jezevec10.com/u/lejin">tetris (jstris)</a> and badminton in my spare time.</p>
    <h3>Experience</h3>
    <ul>
      <li>(May 2024 - Aug 2024): Software Engineer Intern @ <span className={styles.highlight}>ZipRecruiter</span>: Enterprise Apply </li>
      <li>(Jan 2024 - Apr 2024): Software Engineer Intern @ <span className={styles.highlight}>Verily (Google Life Sciences)</span>: Precision Health Platform </li>
      <li>(Sept 2023 - Dec 2023): Data Engineer Intern @ <span className={styles.highlight}>Coursera</span>: Enterprise Data </li>
      <li>(May 2023 - Aug 2023): Software Engineer Intern @ <span className={styles.highlight}>Konrad Group</span>: Internal Projects </li>
      <li>(Sept 2022 - Sep 2022): Software Engineer Intern @ <span className={styles.highlight}>Squarepoint Capital</span>: Alpha Data, Data Operations </li>
      <li>(Jan 2022 - Apr 2022): Full Stack Engineer Intern @ <span className={styles.highlight}>HSBC</span>: Markets and Securities Services</li>
      <li>(Jan 2022 - Aug 2022): Software Developer @ <span className={styles.highlight}>McMaster University</span>: CANMOD / Theoretical Biology Lab </li>
      <li>(May 2021 - Aug 2021): Full Stack Developer Intern @ <span className={styles.highlight}>Heka Health</span></li>
    </ul>
    {/* <h3>Notes</h3>
    <ul>
      <li><a href="https://drive.google.com/file/d/1qqqvoNJs-DneNXHxvKwLhChJ0RL6K3np/view?usp=sharing">CS 245 (Logic) Notes</a></li>
      <li><a href="https://drive.google.com/file/d/1lhbL2y5n84QJrCqmWH0yJvU9JQ5IbQsE/view?usp=sharing">MATH 138 (Calculus II) Reference Sheet</a></li>
      <li><a href="https://drive.google.com/file/d/1GaNcVtxBhuqgt3HIbUm6BKXqAsVYsLr0/view?usp=sharing">MATH 237 (Calculus III) Reference Sheet</a></li>
    </ul> */}
    <h3>Contact</h3>
    <p><a href="https://linkedin.com/in/frankljin"><FaLinkedin size={25} /></a>&nbsp; &nbsp;<a href="https://github.com/frankljin"><FaGithub size={25} /></a>&nbsp; &nbsp;<a href="mailto:f7jin@uwaterloo.ca"><GrMail size={25} /></a></p>
  </div>

  </>
  );
};

export default App;
