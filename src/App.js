import { PageSlides, SlideParallaxType } from "react-page-slides";
import styles from "./App.module.css";

const App = () => {
  const slides = [
    {
      content: (
        <div className={styles.main}>
        <div>
          <h1 className={styles.title}>Frank Jin</h1>
       </div>
          
          <p className={styles.description}>
            Computer Science @ University of Waterloo
          </p>
        </div>
      ),
      style: {
        backgroundColor: "#1F1B24",
      },
    },
    {
      content: (
        <div className={styles.main}>
        <div className={styles.card}>
        <p className={styles.commonText}>Hi there, I'm Frank. I'm currently in my <span className={styles.highlight}>2nd</span> year at the <span className={styles.highlight}>University of Waterloo</span> as an undergraduate. I have interests in full stack development, UI/UX design, and mathematical applications in computer science.<br /><br />
        I'm currently working at <span className={styles.highlight}>HSBC</span> as a Full Stack Engineer and <span className={styles.highlight}>McMaster University</span> as a Software Developer. <br /><br />
        Let's chat!</p>
        <p><a href="http://linkedin.com/in/frankljin" style={{"text-decoration": "none"}}><span className={styles.highlight}>LinkedIn</span></a></p>
        <p><a href="http://github.com/frankljin" style={{"text-decoration": "none"}}><span className={styles.highlight}>GitHub</span></a></p>
        <p><a href="mailto:f7jin@uwaterloo.ca" style={{"text-decoration": "none"}}><span className={styles.highlight}>Email</span></a></p>
        </div>
        </div>
      ),
      style: {
        backgroundColor: "#1F1B24",
        backgroundImage: 'url("wave.svg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
        backgroundPosition: "bottom",
      },
    },
  ];

  return (
    <PageSlides
      enableAutoScroll={true}
      transitionSpeed={1000}
      slides={slides}
      parallax={{
        offset: 0.6,
        type: SlideParallaxType.reveal,
      }}
    />
  );
};

export default App;
