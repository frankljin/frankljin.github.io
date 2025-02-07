import styles from "./../App.module.css";
import { Link } from "react-router-dom";
import CS370 from "../CS_370.pdf";
import CS245 from "../CS_245.pdf";
import MATH138 from "../MATH_138.pdf";
import MATH235 from "../MATH_235.pdf";
import MATH237 from "../MATH_237.pdf";
import MATH239 from "../MATH_239.pdf";
import STAT231 from "../STAT_231.pdf";

const Notes = () => {
  
  return (<>
    {/* <Nav /> */}
    <div class={styles.main}>
  
    <h1>Notes</h1>
    <hr />
    <Link to="/">Home</Link>
    <hr />
    <p>Here are some notes I have taken for courses (not actively maintained):</p>
    <h3>Mathematics</h3>
    <ul>
      <li>MATH 138 - Calculus 2: <Link to={MATH138} target="_blank">summary</Link></li>
      <li>MATH 235 - Linear Algebra 2: <Link to={MATH235} target="_blank">summary</Link></li>
      <li>MATH 237 - Calculus 3: <Link to={MATH237} target="_blank">summary</Link></li>
      <li>MATH 239 - Introduction to Combinatorics: <Link to={MATH239} target="_blank">summary</Link></li>
      <li>STAT 231 - Statistics: <Link to={STAT231} target="_blank">course notes</Link></li>
      {/* <li>MH 3701 (NTU) - Basic Optimization: Coming Soon</li>
      <li>CO 331 - Coding Theory: Coming Soon</li> */}
    </ul>
    <h3>Computer Science</h3>
    <ul>
        <li>CS 245 - Logic and Computation: <Link to={CS245} target="_blank">course notes</Link></li>
        <li>CS 370 - Numerical Computation: <Link to={CS370} target="_blank">course notes</Link></li>
        {/* <li>CZ 4041 (NTU) - Machine Learning: Coming Soon</li> */}
    </ul>
  </div>

  </>
  );
};

export default Notes;
