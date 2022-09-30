import styles from "./../App.module.css";
import { Link } from "react-router-dom";
import CS370 from "../CS_370.pdf";
import CS245 from "../CS_245.pdf";
import MATH138 from "../MATH_138.pdf";
import MATH237 from "../MATH_237.pdf";

const Notes = () => {
  
  return (<>
    {/* <Nav /> */}
    <div class={styles.main}>
  
    <h1>Notes</h1>
    <hr />
    <Link to="/">Home</Link>&nbsp; &nbsp; <Link to="/experience">Experience</Link>
    <hr />
    <p>Here are some notes I have taken for courses sorted by semester:</p>
    <h3>Spring 2022 (2B)</h3>
    <ul>
        <li>CS 370 - Numerical Computation: <Link to={CS370} target="_blank">course notes</Link></li>
    </ul>
    <h3>Fall 2021 (2A)</h3>
    <ul>
        <li>CS 245 - Logic and Computation: <Link to={CS245} target="_blank">course notes</Link></li>
        <li>MATH 237 - Calculus III: <Link to={MATH237} target="_blank">summary</Link></li>
    </ul>
    <h3>Winter 2021 (1B)</h3>
    <ul>
        <li>MATH 138 - Calculus II: <Link to={MATH138} target="_blank">summary</Link></li>
    </ul>
  </div>

  </>
  );
};

export default Notes;
