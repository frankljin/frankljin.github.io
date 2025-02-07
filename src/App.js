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
    <Link to="/notes">Notes</Link>
    <hr />
    <h3>About</h3>
    <p>I am a senior undergraduate <span className={styles.highlight}>Computer Science</span> and <span className={styles.highlight}>Combinatorics and Optimization</span> student at the <span className={styles.highlight}>University of Waterloo</span>. My interests include software and data engineering, distributed systems and observability, and discrete mathematics.
    I enjoy playing <a href="https://jstris.jezevec10.com/u/lejin">tetris (jstris)</a> and badminton in my spare time.</p>
    <h3>Experience</h3>
    <ul>
      <li>
        <div className={styles.customContainer}>
        <h4>ZipRecruiter</h4>
          <p>(May 2024 - Aug 2024): Software Engineer Intern</p>
          <p>Enterprise Apply Team: worked on ATS integrations and full-stack features for job screening questions</p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
        <h4>Verily (Google Life Sciences)</h4>
          <p>(Jan 2024 - Apr 2024): Software Engineer Intern</p>
          <p>Data Ingest Team: optimized performance for healthcare data pipelines and built a local testing framework</p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
        <h4>Coursera</h4>
          <p>(Sept 2023 - Dec 2023): Data Engineer Intern</p>
          <p>Enterprise Data Team: developed data pipelines for a new course recommendation system based on skill taxonomies</p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
        <h4>Konrad Group</h4>
          <p>(May 2023 - Aug 2023): Software Engineer Intern</p>
          <p>Internal Project: designed and implemented a charity platform to auction items for fundraising </p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
        <h4>Squarepoint Capital</h4>
          <p>(Sept 2022 - Sep 2022): Software Engineer Intern</p>
          <p>Data Operations Team: developed data pipelines to support trading strategies, and a new observability system for on-call engineers</p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
        <h4>HSBC</h4>
          <p>(Jan 2022 - Apr 2022): Full Stack Engineer Intern</p>
          <p>AWACS Team: built dashboards and filtering tools to monitor and detect illegal trades</p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
        <h4>McMaster University</h4>
          <p>(Jan 2022 - Aug 2022): Software Developer</p>
          <p>CANMOD / Theoretical Biology Lab: maintained the <a href="https://canmod.net/">CANMOD</a> website and built data pipelines for historical disease data</p>
        </div>
      </li>
      <li>
        <div className={styles.customContainer}>
          <h4>Heka Health</h4>
          <p>(May 2021 - Aug 2021): Full Stack Developer Intern</p>
          <p>Worked on full-stack appointment scheduling features for a physiotherapy platform</p>
        </div>
      </li>
    </ul>
    <h3>Education</h3>
    <ul>
      <li>(Sept 2020 - Apr 2025): <span className={styles.highlight}>University of Waterloo</span>: Bachelor's Degree - Double Major in Computer Science and Mathematics <a href="https://uwaterloo.ca/combinatorics-and-optimization/">(C&O)</a></li>
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
