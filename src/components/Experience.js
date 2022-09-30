import styles from "./../App.module.css";
import { Link } from "react-router-dom";
import Resume from "../Jin_Frank_2022.pdf";

const Experience = () => {
  
  return (<>
    {/* <Nav /> */}
    <div class={styles.main}>
  
    <h1>Experience</h1>
    <hr />
    <Link to="/">Home</Link>&nbsp; &nbsp; <Link to="/notes">Notes</Link>
    <hr />
    <h3>(Sept 2022 - Present): Software Engineer Intern @ <span className={styles.highlight}>Squarepoint Capital</span>: Alpha Data, Data Operations</h3>
    <p> Currently working in the Alpha Data and Data Operations teams on a Fall 2022 internship, developing ETL data pipelines for quantitative strategies. Currently, I am working with Nomad, Bamboo, Google Cloud Products, and PostgreSQL along with internal timeseries libraries. </p>
    <h3>(Jan 2022 - Apr 2022): Full Stack Engineer Intern @ <span className={styles.highlight}>HSBC</span>: Markets and Securities Services</h3>
    <p> Worked in Market and Securities Services on the Advanced Warning and Control System (AWACS) PoC. The platform was developed on a scalable Scala-based internal electronic trading platform. I worked with data pipelines (Apache Beam), code generation (treehugger), cloud technologies (GCP), and front-end development (React) to push out new features in the project. I demonstrated object-oriented programming, multithreading principles, and the publisher-subscriber design pattern in my work.  </p>
    <h3>(Jan 2022 - Aug 2022): Software Developer @ <span className={styles.highlight}>McMaster University</span>: CANMOD / Theoretical Biology Lab</h3>
    <p>Worked part-time with CANMOD (Canadian Network for Modelling Infectious Diseases) and the TheoBio (Theoretical Biology) Lab to develop internal tools and website features. I developed a data pipeline using R and Python to generate tidy datasets for use in a client-facing API (FastAPI) for Canada's historical infectious disease morbidity and mortality data. I also worked on various web-scraping tools (BeautifulSoup, Selenium) to scrape articles and papers relevant to members of the CANMOD network. </p>
    <h3>(May 2021 - Aug 2021): Full Stack Developer Intern @ <span className={styles.highlight}>Heka Health</span></h3>
    <p>I worked with an early stage startup focusing on digital health and physiotherapy prepare for their product launch. Using various web technologies such as React (Next.js) front-end and API development and Sequelize ORM for PostgreSQL, I owned the development of scheduling features such as appointment creation and modification, availability lookups and scheduling interfaces, and many more. </p>
    {/* <h3>Notes</h3>
    <ul>
      <li><a href="https://drive.google.com/file/d/1qqqvoNJs-DneNXHxvKwLhChJ0RL6K3np/view?usp=sharing">CS 245 (Logic) Notes</a></li>
      <li><a href="https://drive.google.com/file/d/1lhbL2y5n84QJrCqmWH0yJvU9JQ5IbQsE/view?usp=sharing">MATH 138 (Calculus II) Reference Sheet</a></li>
      <li><a href="https://drive.google.com/file/d/1GaNcVtxBhuqgt3HIbUm6BKXqAsVYsLr0/view?usp=sharing">MATH 237 (Calculus III) Reference Sheet</a></li>
    </ul> */}
    <hr />
    <h3>Resume</h3>
    <p>Click <a href={Resume} target="_blank">here</a> for my resume in PDF format.</p>
  </div>

  </>
  );
};

export default Experience;
